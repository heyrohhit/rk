import { NextResponse } from 'next/server';

export async function GET(req) {
  const url = new URL(req.url);
  const verifyToken = 'EAFUwiQzgOSMBO3DeKrfqggZBlcHZAlZAAmIwZC2DYsMTIGve0guiT0bZCtUNzUQfv0zZC8lCUEDaLxDgmozFri6MzzupZAlN7CzkFHRgJdMkBqgdmWU7fsblwJFbIBVWoN9GurPEbqvcBWSXGMxE4BX8fmRR4jvEf2XP2LOgdq9QFqrFrrfwCNKi7hZCHjis87KC7vmQrQPfkAUVo68QDZCZAIGUI0uRYwmqR3ZBQn7phr8eSm9SgZDZD';  // Jo tum Meta Dashboard me doge

  const mode = url.searchParams.get('hub.mode');
  const token = url.searchParams.get('hub.verify_token');
  const challenge = url.searchParams.get('hub.challenge');

  if (mode && token && mode === 'subscribe' && token === verifyToken) {
    console.log('WEBHOOK_VERIFIED');
    return new Response(challenge, { status: 200 });
  } else {
    return new Response('Verification failed', { status: 403 });
  }
}

export async function POST(req) {
  const body = await req.json();
  console.log('Webhook Received:', JSON.stringify(body, null, 2));

  // ✅ Tum yaha user reply, message status etc DB me save kar sakte ho
  return NextResponse.json({ status: 'received' });
}
