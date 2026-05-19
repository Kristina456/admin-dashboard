import { NextRequest, NextResponse } from 'next/server';
import { removeData, updateData } from '../service';

type Context = {
  params: {
    id: string;
  };
};

export async function DELETE(request: NextRequest, context: Context) {
  const { id } = await context.params;
  if (!id) {
    return NextResponse.json({ success: false, error: 'Id not provided' }, { status: 400 });
  }
  const removed = removeData(id);
  return NextResponse.json({ success: removed }, { status: removed ? 200 : 400 });
}

export async function PUT(request: NextRequest, context: Context) {
  const userRequest = await request.json();
  const { id } = await context.params;
  if (!id) {
    return NextResponse.json({ success: false, error: 'Id not provided' }, { status: 400 });
  }
  const updateUser = updateData(id, userRequest);
  return NextResponse.json({ success: updateUser }, { status: updateUser ? 200 : 400 });
}
