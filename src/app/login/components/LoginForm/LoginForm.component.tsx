'use client';
import { Button } from '@/components/Button/Button.component';
import { useLoginForm } from '@/hooks/useLoginForm';
import Link from 'next/link';
import styles from './LoginForm.module.scss';

export function LoginForm() {
  const { userData, formError, fieldError, loading, handleInputChange, handleSubmit } = useLoginForm();

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className={styles['login-form']}>
      <h1>Log in to your account</h1>
      <p>Welcome back! Please enter your details.</p>
      <form className={styles['login-form__form']} onSubmit={handleSubmit}>
        <label className={styles['login-form__label']}>
          Email
          <input type="text" value={userData.email} onChange={e => handleInputChange(e, 'email')} />
        </label>
        <label className={styles['login-form__label']}>
          Password
          <input type="current-password" value={userData.password} onChange={e => handleInputChange(e, 'password')} />
        </label>
        <label className={styles['login-form__label']}>
          Remember me <input type="checkbox" />
        </label>
        {fieldError && <p>{fieldError}</p>}
        <Link className={styles['login-form__link']} href={'/login'}>
          Forgot password?
        </Link>
        <Button type="submit">Sign in</Button>
      </form>
      <Button type="button">Sign in with Google</Button>
      <p>
        Don't have an account? <Link href={'/login'}>Sign up</Link>
      </p>
      {formError && <p className={styles['login-form__form-error']}>{formError}</p>}
    </div>
  );
}
