import type { Metadata } from 'next';
import styles from './page.module.scss';
import { Navigation } from '@/components/Navigation/Navigation.component';
import { Sidebar } from '@/components/Sidebar/Sidebar.component';

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
      <div className={styles['dashboard-layout__navigation']}>
        <Navigation />
      </div>
      <div className={styles['dashboard-layout__main']}>
        <div className={styles['dashboard-layout__sidebar']}>
          <Sidebar />
        </div>
        <main className={styles['dashboard-layout__main-section']}>{children}</main>
      </div>
    </div>
  );
}
