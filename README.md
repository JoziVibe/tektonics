# tektoniks

## SendGrid SMTP Relay contact form

The contact form posts to `/api/contact` and sends inquiries through Twilio
SendGrid SMTP Relay. Configure these environment variables before deploying:

```bash
SENDGRID_SMTP_HOST=smtp.sendgrid.net
SENDGRID_SMTP_PORT=587
SENDGRID_SMTP_USER=apikey
SENDGRID_SMTP_PASSWORD=
SENDGRID_FROM_EMAIL=no-reply@tektonics.africa
SENDGRID_TO_EMAIL=info@tektonics.africa
SENDGRID_FROM_NAME="Tektonics Website"
SENDGRID_SUBJECT_PREFIX="Tektonics Website Inquiry"
```

`SENDGRID_SMTP_USER` should be the literal string `apikey`.
`SENDGRID_SMTP_PASSWORD` should be a SendGrid API key with Mail Send access.
`SENDGRID_FROM_EMAIL` must be a verified SendGrid sender or a sender on an
authenticated domain.
