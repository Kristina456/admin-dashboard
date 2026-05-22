import styles from './ErrorModal.module.scss';

interface Props {
  errorAction?: () => void;
}

export function ErrorModal({ errorAction }: Props) {
  return (
    <div className={styles['error-modal']} onClick={errorAction}>
      <div className={styles['error-modal__wrapper']}>
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
