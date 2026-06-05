# tektoniks

## Resend contact form

The contact form posts to `/api/contact` and sends inquiries through Resend.
Configure these environment variables before deploying:

```bash
RESEND_API_KEY=
RESEND_FROM_EMAIL=no-reply@tektonics.africa
RESEND_TO_EMAIL=info@tektonics.africa
RESEND_FROM_NAME="Tektonics Website"
RESEND_SUBJECT_PREFIX="Tektonics Website Inquiry"
```

`RESEND_FROM_EMAIL` must use a sender on a domain that has been verified in
Resend.
