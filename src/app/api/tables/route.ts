import { NextRequest, NextResponse } from 'next/server';
import { addData, getData } from './service';

export async function GET() {
  const data = NextResponse.json(getData());
  return data;
}

export async function POST(request: NextRequest) {
  const userRequest = await request.json();
  const user = addData(userRequest);
  return NextResponse.json({ user: user }, { status: user ? 200 : 400 });
}
