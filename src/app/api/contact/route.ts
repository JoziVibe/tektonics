import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

export const runtime = "nodejs";

const contactSchema = z.object({
  name: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(254),
  company: z.string().trim().max(160).optional().default(""),
  message: z.string().trim().min(1).max(4000),
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

const getValidationError = (issues: z.ZodIssue[]) => {
  const field = issues[0]?.path[0];

  if (field === "name") {
    return "Please enter your full name.";
  }

  if (field === "email") {
    return "Please enter a valid email address.";
  }

  if (field === "message") {
    return "Please enter a message.";
  }

  return "Please complete the required fields.";
};

export async function POST(request: Request) {
  const payload = await request.json().catch(() => null);
  const parsed = contactSchema.safeParse(payload);

  if (!parsed.success) {
    return NextResponse.json(
      { error: getValidationError(parsed.error.issues) },
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

  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.RESEND_FROM_EMAIL;
  const toEmail = process.env.RESEND_TO_EMAIL ?? "info@tektonics.africa";
  const fromName = process.env.RESEND_FROM_NAME ?? "Tektonics Website";
  const subjectPrefix =
    process.env.RESEND_SUBJECT_PREFIX ?? "Tektonics Website Inquiry";

  if (!apiKey || !fromEmail) {
    console.error("Resend is not configured. RESEND_API_KEY and RESEND_FROM_EMAIL are required.");

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

  const resend = new Resend(apiKey);

  try {
    const { error } = await resend.emails.send({
      to: toEmail,
      from: `${fromName} <${fromEmail}>`,
      replyTo: inquiry.email,
      subject: `${subjectPrefix}: ${inquiry.name}`,
      text,
      html,
      tags: [
        {
          name: "category",
          value: "website-contact",
        },
      ],
    });

    if (error) {
      console.error("Resend contact email failed", error);

      return NextResponse.json(
        { error: "We could not send your inquiry right now." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true }, { status: 201 });
  } catch (error) {
    console.error("Resend contact email failed", error);

    return NextResponse.json(
      { error: "We could not send your inquiry right now." },
      { status: 502 },
    );
  }
}
