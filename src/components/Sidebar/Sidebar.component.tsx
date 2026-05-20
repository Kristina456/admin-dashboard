'use client';
import Link from 'next/link';
import styles from './Sidebar.module.scss';
import { useState } from 'react';
import { Button } from '../Button/Button.component';
import Image from 'next/image';

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
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
      label: 'Charts',
      href: '/charts',
    },
  ];

  const handleHideSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`${styles['sidebar']} ${isOpen ? styles['sidebar--open'] : styles['sidebar--closed']}`}>
      {isOpen &&
        navigation.map(item => (
          <Link className={styles['sidebar__link']} key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      <Button className={styles['sidebar__button']} variant="secondary" onClick={handleHideSidebar}>
        <Image src="/images/arrow.svg" alt="Arrow image" fill />
      </Button>
    </nav>
  );
}
