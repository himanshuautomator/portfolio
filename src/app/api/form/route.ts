import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const data = await request.formData();
  const body = Object.fromEntries(data.entries());

  try {
    const response = await fetch(process.env.NEXT_PUBLIC_SITE_URL + '/.netlify/functions/submission-created', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        payload: {
          ...body,
          form_name: 'contact',
        },
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to submit to Netlify');
    }

    return NextResponse.json(
      { message: 'Form submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: 'Error submitting form' },
      { status: 500 }
    );
  }
} 