import nodemailer from "nodemailer"

export async function POST(req) {
  const body = await req.json()
  const { firstName, lastName, email, subject, message } = body

  if (!firstName || !lastName || !email || !subject || !message) {
    return new Response(JSON.stringify({ error: "Missing fields" }), {
      status: 400,
    })
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    })

    await transporter.sendMail({
      from: `"${firstName} ${lastName}" <${email}>`,
      to: process.env.GMAIL_USER,
      subject: `New Contact: ${subject} (from ${firstName} ${lastName})`,
      text: `
New Contact Form Submission

Name: ${firstName} ${lastName}
Email: ${email}
Subject: ${subject}
Message:
${message}
      `.trim(),
    })

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
    })
  } catch (err) {
    console.error("Email error:", err)
    return new Response(JSON.stringify({ error: "Failed to send email" }), {
      status: 500,
    })
  }
}
