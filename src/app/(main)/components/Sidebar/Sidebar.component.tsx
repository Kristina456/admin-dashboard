'use client';
import Link from 'next/link';
import styles from './Sidebar.module.scss';
import { useEffect, useState } from 'react';
import { Button } from '../../../../components/Button/Button.component';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useWindowDimension } from '../../hooks/useWindowDimension';

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const pathname = usePathname();
  const { width } = useWindowDimension();

  const navigation = [
    {
      label: 'Overview',
      href: '/',
    },
    {
      label: 'Tables',
      href: '/tables',
    },
    {
      label: 'Settings',
      href: '/settings',
    },
  ];

  const handleHideSidebar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (width && width < 768) {
      setIsOpen(false);
    } else setIsOpen(true);
  }, [width]);

  return (
    <nav className={`${styles['sidebar']} ${isOpen ? styles['sidebar--open'] : styles['sidebar--closed']}`}>
      {isOpen &&
        navigation.map(item => (
          <Link
            className={`${styles['sidebar__link']} ${pathname === item.href && styles['sidebar__link--active']}`}
            key={item.href}
            href={item.href}
          >
            {item.label}
          </Link>
        ))}
      <Button className={styles['sidebar__button']} variant="secondary" onClick={handleHideSidebar}>
        <Image src="/images/arrow.svg" alt="Close arrow" fill />
      </Button>
    </nav>
  );
}
