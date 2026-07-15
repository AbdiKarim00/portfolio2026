import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { siteConfig } from '@/lib/site-config'

const RATE_LIMIT = 10
const RATE_WINDOW_MS = 60_000
const hits = new Map<string, { count: number; resetAt: number }>()

function clientIp(request: Request): string {
  const forwarded = request.headers.get('x-forwarded-for')
  if (forwarded) return forwarded.split(',')[0].trim()
  return 'unknown'
}

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const entry = hits.get(ip)

  if (!entry || now > entry.resetAt) {
    hits.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS })
    return false
  }

  if (entry.count >= RATE_LIMIT) return true
  entry.count += 1
  return false
}

function isValidEmail(value: unknown): value is string {
  return (
    typeof value === 'string' &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
  )
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

const ACCENT = '#FFB400'

function buildAutoReplyHtml(visitorName: string): string {
  const first = visitorName.trim().split(/\s+/)[0] || 'there'
  const safeName = escapeHtml(first)
  const ownerName = escapeHtml(siteConfig.name)
  const ownerEmail = escapeHtml(siteConfig.email)

  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </head>
  <body style="margin:0; padding:0; background-color:#f5f5f5; font-family:Arial, Helvetica, sans-serif;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f5f5f5; padding:24px 0;">
      <tr>
        <td align="center">
          <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="width:600px; max-width:100%; background-color:#ffffff; border:1px solid #e6e6e6;">
            <tr>
              <td style="padding:36px 40px 28px; border-top:4px solid ${ACCENT};">
                <p style="margin:0 0 10px; font-size:12px; letter-spacing:2px; text-transform:uppercase; color:${ACCENT}; font-weight:bold;">Message Received</p>
                <h1 style="margin:0; font-size:24px; font-weight:300; color:#141414; font-family:Georgia, 'Times New Roman', serif;">Thank you, ${safeName}</h1>
              </td>
            </tr>
            <tr>
              <td style="padding:0 40px;"><div style="height:1px; background-color:#eeeeee;"></div></td>
            </tr>
            <tr>
              <td style="padding:32px 40px;">
                <p style="margin:0 0 16px; font-size:15px; line-height:1.7; color:#2b2b2b; font-weight:300;">Thanks for reaching out through my portfolio. I've received your message and will get back to you as soon as I can.</p>
                <p style="margin:0; font-size:15px; line-height:1.7; color:#2b2b2b; font-weight:300;">In the meantime, feel free to explore my work or connect with me on social media.</p>
              </td>
            </tr>
            <tr>
              <td style="padding:0 40px;"><div style="height:1px; background-color:#eeeeee;"></div></td>
            </tr>
            <tr>
              <td style="padding:24px 40px;">
                <p style="margin:0 0 4px; font-size:14px; color:#141414; font-weight:bold; font-family:Georgia, 'Times New Roman', serif;">${ownerName}</p>
                <p style="margin:0; font-size:13px; color:#6b6b6b;">${ownerEmail}</p>
              </td>
            </tr>
          </table>
          <p style="margin:16px 0 0; font-size:11px; color:#b0b0b0;">This is an automated reply &middot; ${escapeHtml(siteConfig.name)} &middot; ${new Date().toLocaleString('en-US', { dateStyle: 'medium', timeStyle: 'short' })}</p>
        </td>
      </tr>
    </body>
  </html>`
}

function buildAutoReplyText(visitorName: string): string {
  const first = visitorName.trim().split(/\s+/)[0] || 'there'
  return (
    'Hi ' + first + ',\n\n' +
    'Thanks for reaching out through my portfolio. I\'ve received your message and will get back to you as soon as I can.\n\n' +
    'Best,\n' + siteConfig.name + '\n' + siteConfig.email
  )
}

function buildEmailHtml(name: string, email: string, message: string): string {
  const safeName = escapeHtml(name)
  const safeEmail = escapeHtml(email)
  const safeMessage = escapeHtml(message).replace(/\n/g, '<br />')
  const receivedAt = new Date().toLocaleString('en-US', {
    dateStyle: 'medium',
    timeStyle: 'short',
  })

  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </head>
  <body style="margin:0; padding:0; background-color:#f5f5f5; font-family:Arial, Helvetica, sans-serif;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f5f5f5; padding:24px 0;">
      <tr>
        <td align="center">
          <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="width:600px; max-width:100%; background-color:#ffffff; border:1px solid #e6e6e6;">
            <tr>
              <td style="padding:36px 40px 28px; border-top:4px solid ${ACCENT};">
                <p style="margin:0 0 10px; font-size:12px; letter-spacing:2px; text-transform:uppercase; color:${ACCENT}; font-weight:bold;">New Portfolio Message</p>
                <h1 style="margin:0; font-size:24px; font-weight:300; color:#141414; font-family:Georgia, 'Times New Roman', serif;">${safeName}</h1>
                <p style="margin:6px 0 0; font-size:14px; color:#6b6b6b;">${safeEmail}</p>
              </td>
            </tr>
            <tr>
              <td style="padding:0 40px;"><div style="height:1px; background-color:#eeeeee;"></div></td>
            </tr>
            <tr>
              <td style="padding:32px 40px;">
                <p style="margin:0 0 12px; font-size:12px; letter-spacing:2px; text-transform:uppercase; color:#8a8a8a; font-weight:bold;">Message</p>
                <p style="margin:0; font-size:15px; line-height:1.7; color:#2b2b2b; font-weight:300; white-space:pre-wrap;">${safeMessage}</p>
              </td>
            </tr>
            <tr>
              <td style="padding:0 40px;"><div style="height:1px; background-color:#eeeeee;"></div></td>
            </tr>
            <tr>
              <td style="padding:24px 40px;">
                <p style="margin:0; font-size:12px; color:#9a9a9a;">Received via the contact form &middot; ${receivedAt}</p>
              </td>
            </tr>
          </table>
          <p style="margin:16px 0 0; font-size:11px; color:#b0b0b0;">Reply directly to ${safeEmail} using your mail client's reply button.</p>
        </td>
      </tr>
    </body>
  </html>`
}

export async function POST(request: Request) {
  try {
    const ip = clientIp(request)
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      )
    }

    const { name, email, message } = await request.json()

    if (!name || !email || !message || !isValidEmail(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid name, email, and message.' },
        { status: 400 }
      )
    }

    const hasSmtpConfig =
      process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS

    if (!hasSmtpConfig) {
      console.error(
        '[Contact API] SMTP is not configured. Message was NOT delivered.'
      )
      return NextResponse.json(
        {
          error:
            'The contact form is not configured to send mail. Please email me directly at ' +
            (process.env.CONTACT_EMAIL || 'abdulkarimsingir@gmail.com'),
        },
        { status: 503 }
      )
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: Boolean(process.env.SMTP_SECURE) || false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    const fromAddress = process.env.SMTP_FROM || process.env.SMTP_USER

    await transporter.sendMail({
      from: fromAddress,
      to: process.env.CONTACT_EMAIL || 'abdulkarimsingir@gmail.com',
      replyTo: email,
      subject: 'Portfolio Contact: Message from ' + name,
      text:
        'Name: ' + name + '\nEmail: ' + email + '\n\nMessage:\n' + message,
      html: buildEmailHtml(name, email, message),
    })

    try {
      await transporter.sendMail({
        from: fromAddress,
        to: email,
        subject: 'Thanks for reaching out — ' + siteConfig.name,
        text: buildAutoReplyText(name),
        html: buildAutoReplyHtml(name),
      })
    } catch (autoReplyError) {
      console.error('[Contact API] Auto-reply failed:', autoReplyError)
    }

    console.log('[Contact API] Email sent successfully via SMTP')
    return NextResponse.json({ success: true, message: 'Message sent successfully' })
  } catch (error) {
    console.error('[Contact API] Error sending email:', error)
    return NextResponse.json(
      { error: 'Failed to send message. Please try again later.' },
      { status: 500 }
    )
  }
}
