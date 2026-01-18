/**
 * MOCK EMAIL SERVICE - For testing without sending real emails
 * Set USE_MOCK_EMAIL=true in .env to use this instead of Resend
 */

const USE_MOCK_EMAIL = process.env.USE_MOCK_EMAIL === 'true';

interface ContactEmailData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
}

/**
 * Send notification email to admin when contact form is submitted
 */
export async function sendContactNotification(data: ContactEmailData) {
  if (USE_MOCK_EMAIL) {
    console.log('🧪 MOCK MODE: Admin notification would be sent', data);
    return { success: true, data: { mock: true } };
  }

  const { name, email, phone, company, message } = data;
  const adminEmail = process.env.ADMIN_EMAIL || 'info@gurujitechglobal.com';

  try {
    const { Resend } = await import('resend');
    const { getResendClient } = await import('./email').then(m => ({ getResendClient: m.getResendClient }));

    const resend = getResendClient();
    const result = await resend.emails.send({
      from: 'Guruji Tech Global <noreply@gurujitechglobal.com>',
      to: [adminEmail],
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>New Contact Form Submission</title>
            <style>
              body {
                font-family: Arial, sans-serif;
                line-height: 1.6;
                color: #333;
                margin: 0;
                padding: 0;
              }
              .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
              }
              .header {
                background: linear-gradient(135deg, #059669 0%, #06b6d4 100%);
                color: white;
                padding: 30px;
                text-align: center;
                border-radius: 8px 8px 0 0;
              }
              .header h1 {
                margin: 0;
                font-size: 28px;
              }
              .content {
                background: #f9f9f9;
                padding: 30px;
                border-radius: 0 0 8px 8px;
                box-shadow: 0 2px 4px rgba(0,0,0,0.1);
              }
              .field {
                margin-bottom: 20px;
              }
              .field-label {
                font-weight: bold;
                color: #059669;
                margin-bottom: 5px;
                font-size: 14px;
                text-transform: uppercase;
              }
              .field-value {
                background: white;
                padding: 15px;
                border-radius: 4px;
                border-left: 4px solid #059669;
              }
              .footer {
                text-align: center;
                padding: 20px;
                color: #666;
                font-size: 14px;
              }
              .footer a {
                color: #059669;
                text-decoration: none;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>🚀 New Contact Form Submission</h1>
              </div>
              <div class="content">
                <div class="field">
                  <div class="field-label">Name</div>
                  <div class="field-value">${name}</div>
                </div>
                
                <div class="field">
                  <div class="field-label">Email</div>
                  <div class="field-value">
                    <a href="mailto:${email}">${email}</a>
                  </div>
                </div>
                
                ${phone ? `
                <div class="field">
                  <div class="field-label">Phone</div>
                  <div class="field-value">${phone}</div>
                </div>
                ` : ''}
                
                ${company ? `
                <div class="field">
                  <div class="field-label">Company</div>
                  <div class="field-value">${company}</div>
                </div>
                ` : ''}
                
                <div class="field">
                  <div class="field-label">Message</div>
                  <div class="field-value">${message}</div>
                </div>
              </div>              
              <div class="footer">
                <p>This email was sent from the Guruji Tech Global website contact form.</p>
                <p>
                  <a href="https://gurujitechglobal.com">Visit Guruji Tech Global</a>
                </p>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    return { success: true, data: result };
  } catch (error) {
    console.error('Error sending contact notification:', error);
    return { success: false, error };
  }
}

/**
 * Send confirmation email to the person who submitted the form
 */
export async function sendContactConfirmation(data: ContactEmailData) {
  if (USE_MOCK_EMAIL) {
    console.log('🧪 MOCK MODE: Confirmation email would be sent to', data.email);
    return { success: true, data: { mock: true } };
  }

  const { name, email, phone, company } = data;

  try {
    const { Resend } = await import('resend');
    const { getResendClient } = await import('./email').then(m => ({ getResendClient: m.getResendClient }));

    const resend = getResendClient();
    const result = await resend.emails.send({
      from: 'Guruji Tech Global <noreply@gurujitechglobal.com>',
      to: [email],
      subject: 'Thank you for contacting Guruji Tech Global',
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Thank You - Guruji Tech Global</title>
            <style>
              body {
                font-family: Arial, sans-serif;
                line-height: 1.6;
                color: #333;
                margin: 0;
                padding: 0;
              }
              .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
              }
              .header {
                background: linear-gradient(135deg, #059669 0%, #06b6d4 100%);
                color: white;
                padding: 40px 30px;
                text-align: center;
                border-radius: 8px 8px 0 0;
              }
              .header h1 {
                margin: 0 0 20px 0;
                font-size: 32px;
              }
              .header p {
                margin: 0;
                font-size: 18px;
                opacity: 0.95;
              }
              .content {
                background: white;
                padding: 40px 30px;
                border-radius: 0 0 8px 8px;
                box-shadow: 0 2px 4px rgba(0,0,0,0.1);
              }
              .info-box {
                background: #f0fdf4;
                border: 2px solid #22c55e;
                border-radius: 8px;
                padding: 20px;
                margin: 20px 0;
              }
              .info-box h3 {
                color: #166534;
                margin: 0 0 10px 0;
                font-size: 18px;
              }
              .info-box p {
                margin: 0;
                color: #15803d;
              }
              .cta-button {
                display: inline-block;
                background: #059669;
                color: white;
                padding: 15px 40px;
                border-radius: 5px;
                text-decoration: none;
                font-weight: bold;
                margin: 20px 0;
              }
              .footer {
                text-align: center;
                padding: 30px 20px;
                color: #666;
                font-size: 14px;
                border-top: 1px solid #eee;
              }
              .social-links {
                margin: 20px 0;
              }
              .social-links a {
                display: inline-block;
                margin: 0 10px;
                color: #059669;
                text-decoration: none;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>✅ Thank You, ${name}!</h1>
                <p>We've received your inquiry and will get back to you shortly.</p>
              </div>              
              <div class="content">
                <p>Hi ${name},</p>
                
                <p>Thank you for reaching out to <strong>Guruji Tech Global</strong>. We've received your message and one of our team members will review it and get back to you within 24 hours.</p>
                
                <div class="info-box">
                  <h3>What's Next?</h3>
                  <p>Our team is reviewing your inquiry. We'll contact you via email at <strong>${email}</strong> ${phone ? `or phone at <strong>${phone}</strong>` : ''} to discuss your IT support needs.</p>
                </div>
                
                <div style="text-align: center;">
                  <a href="https://gurujitechglobal.com" class="cta-button">Visit Our Website</a>
                </div>
                
                <p>In the meantime, feel free to explore our services:</p>
                <ul>
                  <li>IT Support & Service Management</li>
                  <li>Cyber Security Services</li>
                  <li>Cloud Solutions (Microsoft Azure)</li>
                  <li>Microsoft 365 Support</li>
                  <li>Disaster Recovery</li>
                </ul>
              </div>              
              <div class="footer">
                <p><strong>Guruji Tech Global</strong></p>
                <p>Your trusted partner for comprehensive IT support and managed services.</p>
                
                <div class="social-links">
                  <a href="https://gurujitechglobal.com">Website</a>
                  <a href="mailto:info@gurujitechglobal.com">Email Us</a>
                </div>
                
                <p style="font-size: 12px; color: #999;">
                  © ${new Date().getFullYear()} Guruji Tech Global. All rights reserved.
                </p>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    return { success: true, data: result };
  } catch (error) {
    console.error('Error sending contact confirmation:', error);
    return { success: false, error };
  }
}
