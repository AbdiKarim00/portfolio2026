import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json()

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    console.log('[Contact API] Received message from ' + name + ' (' + email + ')')

    // Check if SMTP credentials are configured
    const hasSmtpConfig = 
      process.env.SMTP_HOST && 
      process.env.SMTP_USER && 
      process.env.SMTP_PASS

    if (hasSmtpConfig) {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT) || 587,
        secure: Boolean(process.env.SMTP_SECURE) || false,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      })

      await transporter.sendMail({
        from: process.env.SMTP_FROM || process.env.SMTP_USER,
        to: process.env.CONTACT_EMAIL || 'abdulkarimsingir@gmail.com',
        subject: 'Portfolio Contact: Message from ' + name,
        text: 'Name: ' + name + '\nEmail: ' + email + '\n\nMessage:\n' + message,
      })

      console.log('[Contact API] Email sent successfully via SMTP')
    } else {
      // Fallback/Dev mode: Log to console
        console.log('---------------------------------------------------')
        console.log('⚠ No SMTP config found. Simulating email send.')
        console.log('To: abdulkarimsingir@gmail.com')
        console.log('Subject: Portfolio Contact: Message from ' + name)
        console.log('Body: ' + message)
        console.log('---------------------------------------------------')
    }

    return NextResponse.json({ success: true, message: 'Message sent successfully' })
  } catch (error) {
    console.error('[Contact API] Error sending email:', error)
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    )
  }
}
