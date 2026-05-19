import { NextRequest, NextResponse } from 'next/server';
import { addData, getData } from './service';

export async function GET() {
  return NextResponse.json(getData());
}

export async function POST(request: NextRequest) {
  const userRequest = await request.json();
  const user = addData(userRequest);
  return NextResponse.json(user);
}
