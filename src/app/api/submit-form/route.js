import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    // रिक्वेस्ट बॉडी पार्स करें
    const { name, email, message } = await req.json();

    // इनपुट वैलिडेशन
    if (!name || !email || !message) {
      return NextResponse.json(
        { result: 'error', message: 'Missing required fields: name, email, or message' },
        { status: 400 }
      );
    }

    // GOOGLE_APPS_SCRIPT_URL चेक करें
    if (!process.env.GOOGLE_APPS_SCRIPT_URL) {
      return NextResponse.json(
        { result: 'error', message: 'GOOGLE_APPS_SCRIPT_URL is not defined' },
        { status: 500 }
      );
    }

    // Google Apps Script को रिक्वेस्ट भेजें
    const response = await fetch(process.env.GOOGLE_APPS_SCRIPT_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, message }),
      redirect: 'follow',
    });

    // रिस्पॉन्स टेक्स्ट पहले लें
    const responseText = await response.text();
    console.log('Google Apps Script Response:', responseText); // डीबगिंग के लिए

    // JSON पार्स करने की कोशिश करें
    let result;
    try {
      result = JSON.parse(responseText);
    } catch (error) {
      return NextResponse.json(
        { result: 'error', message: `Invalid JSON response from Google Apps Script: ${responseText.substring(0, 200)}` },
        { status: 500 }
      );
    }

    // रिस्पॉन्स स्टेटस चेक करें
    if (!response.ok) {
      return NextResponse.json(
        { result: 'error', message: `Google Apps Script responded with status ${response.status}: ${responseText.substring(0, 200)}` },
        { status: response.status }
      );
    }

    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { result: 'error', message: `Server error: ${error.message}` },
      { status: 500 }
    );
  }
}