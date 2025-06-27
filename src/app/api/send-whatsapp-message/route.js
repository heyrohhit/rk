import { NextResponse } from 'next/server';

export async function POST(req) {
  const body = await req.json();

  const { name, email, message } = body;

  const textMessage = `New Contact Form Submission:\nName: ${name}\nEmail: ${email}\nMessage: ${message}`;

  const whatsappApiUrl = 'https://graph.facebook.com/v22.0/707678209093048/messages';
  const accessToken = "EAFUwiQzgOSMBO3DeKrfqggZBlcHZAlZAAmIwZC2DYsMTIGve0guiT0bZCtUNzUQfv0zZC8lCUEDaLxDgmozFri6MzzupZAlN7CzkFHRgJdMkBqgdmWU7fsblwJFbIBVWoN9GurPEbqvcBWSXGMxE4BX8fmRR4jvEf2XP2LOgdq9QFqrFrrfwCNKi7hZCHjis87KC7vmQrQPfkAUVo68QDZCZAIGUI0uRYwmqR3ZBQn7phr8eSm9SgZDZD";

  try {
    const response = await fetch(whatsappApiUrl, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        messaging_product: 'whatsapp',
        to: '918700750589',  // ← अपना नंबर डालो (receiver)
        type: 'text',
        text: { body: textMessage }
      })
    });

    const data = await response.json();

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('WhatsApp API Error:', error);
    return NextResponse.json({ success: false, error });
  }
}
