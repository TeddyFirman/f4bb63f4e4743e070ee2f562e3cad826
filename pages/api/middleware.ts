import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  const response = NextResponse.next();

  response.headers.append("Access-Control-Allow-Origin", "*");
  response.headers.append("Access-Control-Allow-Credentials", "true");
  return response;
};

export const config = {
  matcher: '/:path*',
};
