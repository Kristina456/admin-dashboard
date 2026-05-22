'use server';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function loginUser(email: string, password: string) {
  return await new Promise<{ token: string }>(resolve => {
    if (!email && !password) {
      throw new Error('Invalid credentials');
    }

    setTimeout(() => {
      resolve({
        token: 'fake-token-1234567890',
      });
    }, 1000);
  });
}

export async function logoutUser() {
  const cookieStore = await cookies();
  cookieStore.delete('access_token');

  redirect('/login');
}
