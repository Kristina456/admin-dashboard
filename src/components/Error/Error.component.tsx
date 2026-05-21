import Image from 'next/image';
import styles from './Error.module.scss';

export function Error() {
  return (
    <div className={styles['error']}>
      <div className={styles['error__wrapper']}>
        <Image
          className={styles['error__image']}
          src="/images/exclamation.svg"
          alt="Exclamation image"
          width={100}
          height={100}
        />
        <p>Ups... Something went wrong</p>
        <p>Please try to refresh the page</p>
      </div>
    </div>
  );
}
