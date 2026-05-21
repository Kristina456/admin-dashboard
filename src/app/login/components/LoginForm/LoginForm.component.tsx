'use client';
import { Button } from '@/components/Button/Button.component';
import { useLoginForm } from '@/hooks/useLoginForm';
import Link from 'next/link';
import styles from './LoginForm.module.scss';
import Image from 'next/image';
import { Loading } from '@/components/Loading/Loading.component';

export function LoginForm() {
  const { userData, formError, fieldError, loading, handleInputChange, handleSubmit } = useLoginForm();

  if (loading) {
    return <Loading />;
  }

  return (
    <div className={styles['login-form']}>
      <div className={styles['login-form__title-wrapper']}>
        <h1 className={styles['login-form__title']}>Log in to your account</h1>
        <p className={styles['login-form__description']}>Welcome back! Please enter your details.</p>
      </div>
      <form className={styles['login-form__form']} onSubmit={handleSubmit}>
        <div className={styles['login-form__inputs-wrapper']}>
          <label className={styles['login-form__label']}>
            Email
            <input type="text" value={userData.email} onChange={e => handleInputChange(e, 'email')} />
          </label>
          <label className={styles['login-form__label']}>
            Password
            <input type="current-password" value={userData.password} onChange={e => handleInputChange(e, 'password')} />
          </label>
          <div className={styles['login-form__label-wrapper']}>
            <label className={styles['login-form__label-remember-me']}>
              <input type="checkbox" />
              Remember me
            </label>
            <Link className={styles['login-form__forgot-pass']} href={'/login'}>
              Forgot password
            </Link>
          </div>
          {fieldError && <p className={styles['login-form__field-error']}>{fieldError}</p>}
        </div>
        <Button variant="ternary" type="submit">
          Sign in
        </Button>
      </form>
      <Button type="button">
        <Image
          className={styles['login-form__google']}
          src="/images/google.svg"
          alt="Google icon"
          width={20}
          height={20}
        />
        Sign in with Google
      </Button>
      <p className={styles['login-form__sign-up']}>
        Don't have an account?
        <Link className={styles['login-form__sign-up-link']} href={'/login'}>
          Sign up
        </Link>
      </p>
      {formError && <p className={styles['login-form__form-error']}>{formError}</p>}
    </div>
  );
}
