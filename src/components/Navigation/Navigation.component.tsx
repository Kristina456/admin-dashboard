import styles from './Navigation.module.scss';
import Image from 'next/image';

export function Navigation() {
  return (
    <nav className={styles['navigation']}>
      <Image src="/images/dashboard-logo.svg" alt="Company logo" width={30} height={30} />
      <Image src="/images/user-profile-icon.svg" alt="Company logo" width={30} height={30} />
    </nav>
  );
}
