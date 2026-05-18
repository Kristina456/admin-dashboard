import { LoginForm } from './components/LoginForm/LoginForm.component';
import styles from './page.module.scss';
import Image from 'next/image';

export default function LoginPage() {
  return (
    <main className={styles['login-page']}>
      <div className={styles['login-page__image']}>
        <Image src="/images/dashboard.jpg" fill alt="Background image" />
      </div>
      <div className={styles['login-page__form']}>
        <LoginForm />
      </div>
    </main>
  );
}
