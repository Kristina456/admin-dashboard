import Link from 'next/link';
import styles from './ErrorWarning.module.scss';
import Image from 'next/image';

export function ErrorWarning() {
  return (
    <div className={styles['error-warning']}>
      <div className={styles['error-warning__wrapper']}>
        <Image
          className={styles['error-warning__image']}
          src="/images/exclamation.svg"
          alt="Exclamation image"
          width={100}
          height={100}
        />
        <p>Ups... Something went wrong</p>
        <p>Please refresh the page</p>
        <Link className={styles['error-warning__link']} href="/">
          Go back home
        </Link>
      </div>
    </div>
  );
}
