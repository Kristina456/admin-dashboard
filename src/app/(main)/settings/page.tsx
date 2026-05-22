'use client';
import styles from './page.module.scss';
import { Button } from '@/components/Button/Button.component';
import { ErrorModal } from '@/components/ErrorModal/ErrorModal.component';
import { useFailure } from '@/app/(main)/settings/hooks/useFailure';

export default function SettingsPage() {
  const { error, simulateFailure, setError } = useFailure();

  return (
    <section className={styles['settings-page']}>
      <h1 className={styles['settings-page__title']}>Settings page</h1>
      <Button className={styles['settings-page__button']} variant="secondary" onClick={simulateFailure}>
        Simulate failure
      </Button>
      {error && <ErrorModal errorAction={() => setError(undefined)} />}
    </section>
  );
}
