import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { loginAction } from '@/lib/auth-api';

export function useLoginForm() {
  const router = useRouter();
  const [userData, setUserData] = useState({ email: '', password: '' });
  const [formError, setFormError] = useState<string | null>(null);
  const [fieldError, setFieldError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, fieldName: string) => {
    setUserData(prev => ({ ...prev, [fieldName]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFieldError(null);
    setFormError(null);

    if (!userData.email || !userData.password) {
      setFieldError('Please fill out all fields');
      return;
    }

    if (!userData.email.includes('@')) {
      setFieldError('Email must contain @');
      return;
    }

    if (userData.password.length > 20) {
      setFieldError('Password must be max 20 characters');
      return;
    }

    setLoading(true);

    try {
      const response = await loginAction(userData.email, userData.password);
      if (response.success) {
        router.push('/');
        return;
      } else {
        setFormError(response.error || 'Login failed');
      }
    } catch (error) {
      if (error instanceof Error) {
        setFormError(error.message);
      } else {
        setFormError('An unexpected error occurred');
      }
      setLoading(false);
    }
  };

  return {
    userData,
    formError,
    fieldError,
    loading,
    handleInputChange,
    handleSubmit,
  };
}
