import Link from 'next/link';
import styles from './Sidebar.module.scss';

export function Sidebar() {
  const navigation = [
    {
      label: 'Home',
      href: '/',
    },
    {
      label: 'Charts',
      href: '/charts',
    },
    {
      label: 'Tables',
      href: '/tables',
    },
  ];

  return (
    <nav className={styles['sidebar']}>
      {navigation.map(item => (
        <Link className={styles['sidebar__link']} key={item.label} href={item.href}>
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
