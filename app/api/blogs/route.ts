import { NextRequest, NextResponse } from 'next/server';

function getBackendApiBaseUrl() {
  return (
    process.env.NEXT_PUBLIC_API_BASE_URL?.replace(/\/+$/, '') ?? 'http://localhost:5000/api'
  );
}

export async function GET(request: NextRequest) {
  const upstreamUrl = new URL(`${getBackendApiBaseUrl()}/blogs`);
  const incomingParams = request.nextUrl.searchParams;

  incomingParams.forEach((value, key) => {
    upstreamUrl.searchParams.set(key, value);
  });

  try {
    const response = await fetch(upstreamUrl.toString(), {
      method: 'GET',
      cache: 'no-store',
      headers: {
        Accept: 'application/json',
      },
    });

    const payload = await response.json().catch(() => null);

    return NextResponse.json(payload, {
      status: response.status,
    });
  } catch {
    return NextResponse.json(
      {
        success: false,
        message: 'Unable to connect to the blog service.',
      },
      { status: 502 }
    );
  }
}
