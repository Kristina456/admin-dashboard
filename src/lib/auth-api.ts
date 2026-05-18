'use server';
import { cookies } from 'next/headers';
import { fakeLogin } from './auth-actions';

export async function loginAction(email: string, password: string) {
  try {
    const response = await fakeLogin(email, password);

    const cookieStore = await cookies();
    cookieStore.set('access_token', response.token, {
      httpOnly: true,
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24 * 7,
    });

    return { success: true };
  } catch (error) {
    if (error instanceof Error) {
      return { success: false, error: error.message };
    }
    return { success: false, error: 'Invalid credentials' };
  }
}
