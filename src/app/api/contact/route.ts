import { NextRequest, NextResponse } from 'next/server';
import {
  sendContactNotification,
  sendContactConfirmation,
} from '@/lib/email';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, company, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Log the contact form submission
    console.log('New contact form submission:', {
      name,
      email,
      phone: phone || 'Not provided',
      company: company || 'Not provided',
      message,
      timestamp: new Date().toISOString(),
    });

    // Send notification email to admin
    console.log('📧 Sending admin notification...');
    const adminNotification = await sendContactNotification({
      name,
      email,
      phone,
      company,
      message,
    });

    if (!adminNotification.success) {
      console.error('❌ Failed to send admin notification:', adminNotification.error);
      // Continue with confirmation email even if admin notification fails
    } else {
      console.log('✅ Admin notification sent successfully to:', process.env.ADMIN_EMAIL);
    }

    // Send confirmation email to the submitter
    console.log('📧 Sending confirmation email to:', email);
    const confirmationEmail = await sendContactConfirmation({
      name,
      email,
      phone,
      company,
      message,
    });

    if (!confirmationEmail.success) {
      console.error('❌ Failed to send confirmation email:', confirmationEmail.error);
      return NextResponse.json(
        { error: 'Form submitted but email confirmation failed. Please contact us directly.' },
        { status: 500 }
      );
    } else {
      console.log('✅ Confirmation email sent successfully to:', email);
    }

    return NextResponse.json(
      {
        message: 'Contact form submitted successfully',
        emailSent: true,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { message: 'Contact endpoint is ready' },
    { status: 200 }
  );
}
