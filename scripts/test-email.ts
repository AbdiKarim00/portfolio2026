/**
 * Email Test Script for MailHog
 * 
 * Usage:
 * 1. Start MailHog: mailhog
 * 2. Run this script: npx tsx scripts/test-email.ts
 * 3. Check MailHog UI at http://localhost:8025
 */

import nodemailer from 'nodemailer'

async function testEmail() {
  console.log('📧 Testing email with MailHog...\n')

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'localhost',
    port: Number(process.env.SMTP_PORT) || 1025,
    secure: false,
    // MailHog doesn't require auth
  })

  try {
    const info = await transporter.sendMail({
      from: '"Portfolio Test" <test@portfolio.local>',
      to: 'abdulkarimsingir@gmail.com',
      subject: '✅ Portfolio Contact Form Test',
      text: 'This is a test email from your portfolio contact form.\n\nIf you see this in MailHog, your email setup is working!',
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h2 style="color: #FFB400;">Portfolio Contact Form Test</h2>
          <p>This is a test email from your portfolio contact form.</p>
          <p><strong>If you see this in MailHog, your email setup is working!</strong></p>
          <hr style="border: 1px solid #eee; margin: 20px 0;" />
          <p style="color: #666; font-size: 12px;">
            Sent at: ${new Date().toLocaleString()}
          </p>
        </div>
      `,
    })

    console.log('✅ Email sent successfully!')
    console.log('   Message ID:', info.messageId)
    console.log('\n📬 Check MailHog UI at: http://localhost:8025')
  } catch (error) {
    console.error('❌ Failed to send email:', error)
    console.log('\n💡 Make sure MailHog is running: mailhog')
  }
}

testEmail()
