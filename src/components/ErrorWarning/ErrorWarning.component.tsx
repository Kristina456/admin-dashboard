import styles from './ErrorWarning.module.scss';

interface Props {
  errorAction?: () => void;
}

export function ErrorWarning({ errorAction }: Props) {
  return (
    <div className={styles['error-warning']} onClick={errorAction}>
      <div className={styles['error-warning__wrapper']}>
        <div>x</div>
        <div>
          <p>Something went wrong!</p>
          <p>Please try to refresh the page</p>
          <p>or contact support</p>
        </div>
      </div>
    </div>
  );
}
