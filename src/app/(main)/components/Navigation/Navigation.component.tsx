import { logoutUser } from '@/lib/auth-actions';
import styles from './Navigation.module.scss';
import Image from 'next/image';
import { Button } from '../../../../components/Button/Button.component';

export function Navigation() {
  return (
    <nav className={styles['navigation']}>
      <Image src="/images/dashboard-logo.svg" alt="Company logo" width={30} height={30} />
      <div className={styles['navigation__user-wrapper']}>
        <Button className={styles['navigation__button']} variant="primary" onClick={logoutUser}>
          Log out
        </Button>
        <Image src="/images/user-profile-icon.svg" alt="User" width={30} height={30} />
      </div>
    </nav>
  );
}
