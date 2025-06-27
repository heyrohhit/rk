import { NextResponse } from 'next/server';

export async function POST(req) {
  const body = await req.json();

  const { name, email, message } = body;

  const textMessage = `New Contact Form Submission:\nName: ${name}\nEmail: ${email}\nMessage: ${message}`;

  const whatsappApiUrl = 'https://graph.facebook.com/v19.0/YOUR_PHONE_NUMBER_ID/messages';
  const accessToken = 'YOUR_WHATSAPP_CLOUD_API_ACCESS_TOKEN';

  try {
    const response = await fetch(whatsappApiUrl, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        messaging_product: 'whatsapp',
        to: '91XXXXXXXXXX',  // ← अपना नंबर डालो (receiver)
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
