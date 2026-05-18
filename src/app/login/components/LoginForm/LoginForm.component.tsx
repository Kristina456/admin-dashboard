import Link from 'next/link';
import styles from './LoginForm.module.scss';
import { Button } from '@/components/Button/Button.component';

export function LoginForm() {
  return (
    <div className={styles['login-form']}>
      <h1>Log in to your account</h1>
      <p>Welcome back! Please enter your details.</p>
      <form className={styles['login-form__form']}>
        <label className={styles['login-form__label']}>
          Email
          <input type="text" />
        </label>
        <label className={styles['login-form__label']}>
          Password
          <input type="password" />
        </label>
        <label>
          Remember me <input type="checkbox" />
        </label>
        <div>
          <Link href={'/login'}>Forgot password?</Link>
        </div>
        <Button type="submit">Sign in</Button>
      </form>
      <Button type="button">Sign in with Google</Button>
      <p>
        Don't have an account? <Link href={'/login'}>Sign up</Link>
      </p>
    </div>
  );
}
