// app/api/contact/route.js

import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, message, recipient } = body;

    // Basic validation
    if (!name || !email || !message || !recipient) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }
    
    // Remember to verify your domain in Resend for this `from` address to work.
    const fromAddress = 'onboarding@resend.dev'; 
    // You can customize this, e.g., 'contact-form@yourdomain.com' after verification.
    
    const { data, error } = await resend.emails.send({
      from: `Contact Form <${fromAddress}>`,
      to: [recipient], // The email you want to receive messages at
      subject: `New Message from ${name} on Your Website`,
      reply_to: email, // Set the 'reply-to' to the sender's email
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <hr>
          <p><strong>Message:</strong></p>
          <p style="padding: 10px; border-left: 3px solid #ccc; white-space: pre-wrap;">${message}</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ message: 'Error sending email.', error: error.message }, { status: 500 });
    }

    return NextResponse.json({ message: 'Email sent successfully!', data });

  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json({ message: 'Internal Server Error.', error: error.message }, { status: 500 });
  }
}