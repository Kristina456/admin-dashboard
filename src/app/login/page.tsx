import { redirect } from 'next/navigation';
import { LoginForm } from './components/LoginForm/LoginForm.component';
import styles from './page.module.scss';
import Image from 'next/image';
import { cookies } from 'next/headers';

export default async function LoginPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get('access_token')?.value;

  if (token) {
    redirect('/');
  }

  return (
    <main className={styles['login-page']}>
      <div className={styles['login-page__image']}>
        <Image src="/images/dashboard.jpg" fill alt="Dashboard image" loading="eager" sizes="50vw" />
      </div>
      <div className={styles['login-page__form']}>
        <LoginForm />
      </div>
    </main>
  );
}
