import styles from './ErrorWarning.module.scss';

export function ErrorWarning() {
  return (
    <div className={styles['error-warning']}>
      <div className={styles['error-warning__wrapper']}>
        <p>Something went wrong!</p>
        <p>Please try to refresh the page</p>
        <p>or contact support</p>
      </div>
    </div>
  );
}
