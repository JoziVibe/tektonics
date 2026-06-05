import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";

export const runtime = "nodejs";

const contactSchema = z.object({
  name: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(254),
  company: z.string().trim().max(160).optional().default(""),
  message: z.string().trim().min(10).max(4000),
});

const forbiddenPattern =
  /(https?:\/\/[^\s]+|www\.[^\s]+|[<>{};]|\b(script|function|const|let|var|eval)\b)/i;

const stripUnsafeContent = (value: string) =>
  value
    .replace(/<[^>]*>?/gm, "")
    .replace(/javascript:/gi, "")
    .replace(/on\w+=/gi, "")
    .replace(/[\u0000-\u001f\u007f]/g, " ")
    .trim();

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const hasForbiddenContent = (value: string) => forbiddenPattern.test(value);

const parseSmtpPort = (value: string | undefined) => {
  const port = Number(value ?? "587");

  if (!Number.isInteger(port) || port < 1 || port > 65535) {
    return 587;
  }

  return port;
};

export async function POST(request: Request) {
  const payload = await request.json().catch(() => null);
  const parsed = contactSchema.safeParse(payload);

  if (!parsed.success) {
    return NextResponse.json(
      {
        error: "Please complete the required fields with a valid email address.",
      },
      { status: 400 },
    );
  }

  if (
    hasForbiddenContent(parsed.data.name) ||
    hasForbiddenContent(parsed.data.company) ||
    hasForbiddenContent(parsed.data.message)
  ) {
    return NextResponse.json(
      { error: "Links and code snippets are not allowed in inquiries." },
      { status: 400 },
    );
  }

  const smtpHost = process.env.SENDGRID_SMTP_HOST ?? "smtp.sendgrid.net";
  const smtpPort = parseSmtpPort(process.env.SENDGRID_SMTP_PORT);
  const smtpUser = process.env.SENDGRID_SMTP_USER ?? "apikey";
  const smtpPassword = process.env.SENDGRID_SMTP_PASSWORD;
  const fromEmail = process.env.SENDGRID_FROM_EMAIL;
  const toEmail = process.env.SENDGRID_TO_EMAIL ?? "info@tektonics.africa";
  const fromName = process.env.SENDGRID_FROM_NAME ?? "Tektonics Website";
  const subjectPrefix =
    process.env.SENDGRID_SUBJECT_PREFIX ?? "Tektonics Website Inquiry";

  if (!smtpPassword || !fromEmail) {
    console.error(
      "SendGrid SMTP is not configured. SENDGRID_SMTP_PASSWORD and SENDGRID_FROM_EMAIL are required.",
    );

    return NextResponse.json(
      { error: "Email service is not configured yet." },
      { status: 500 },
    );
  }

  const inquiry = {
    name: stripUnsafeContent(parsed.data.name),
    email: stripUnsafeContent(parsed.data.email),
    company: stripUnsafeContent(parsed.data.company),
    message: stripUnsafeContent(parsed.data.message),
  };

  const text = [
    "New inquiry from the Tektonics website",
    "",
    `Name: ${inquiry.name}`,
    `Email: ${inquiry.email}`,
    `Company: ${inquiry.company || "N/A"}`,
    "",
    "Message:",
    inquiry.message,
  ].join("\n");

  const html = `
    <h2>New inquiry from the Tektonics website</h2>
    <p><strong>Name:</strong> ${escapeHtml(inquiry.name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(inquiry.email)}</p>
    <p><strong>Company:</strong> ${escapeHtml(inquiry.company || "N/A")}</p>
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(inquiry.message).replace(/\n/g, "<br />")}</p>
  `;

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpPort === 465,
    requireTLS: smtpPort !== 465,
    auth: {
      user: smtpUser,
      pass: smtpPassword,
    },
  });

  try {
    await transporter.sendMail({
      to: toEmail,
      from: {
        name: fromName,
        address: fromEmail,
      },
      replyTo: {
        name: inquiry.name,
        address: inquiry.email,
      },
      subject: `${subjectPrefix}: ${inquiry.name}`,
      text,
      html,
      headers: {
        "X-SMTPAPI": JSON.stringify({ category: ["website-contact"] }),
      },
    });

    return NextResponse.json({ ok: true }, { status: 201 });
  } catch (error) {
    console.error("SendGrid SMTP contact email failed", error);

    return NextResponse.json(
      { error: "We could not send your inquiry right now." },
      { status: 502 },
    );
  }
}
