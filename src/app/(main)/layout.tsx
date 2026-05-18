import type { Metadata } from 'next';
import styles from './page.module.scss';

export const metadata: Metadata = {
  title: 'Dashboard layout',
  description: 'Dashboard layout for project',
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={styles['dashboard-layout']}>
      <nav className={styles['dashboard-layout__navigation']}>Navigation</nav>
      <div className={styles['dashboard-layout__main']}>
        <aside className={styles['dashboard-layout__sidebar']}>Sidebar</aside>
        <main className={styles['dashboard-layout__main-section']}>{children}</main>
      </div>
    </div>
  );
}
