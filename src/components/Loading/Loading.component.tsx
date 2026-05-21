import styles from './Loading.module.scss';
import Image from 'next/image';

export function Loading() {
  return (
    <div className={styles['loading']}>
      <div className={styles['loading__wrapper']}>
        <Image
          className={styles['loading__image']}
          src="/images/loading.svg"
          alt="Loading image"
          width={100}
          height={100}
        />
        <p>Loading...</p> <p>Please wait...</p>
      </div>
    </div>
  );
}
