import { Navigation } from '@/components/Navigation/Navigation.component';
import { Sidebar } from '@/components/Sidebar/Sidebar.component';
import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import styles from './page.module.scss';

export const metadata: Metadata = {
  title: 'Dashboard layout',
  description: 'Dashboard layout for project',
};

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const token = cookieStore.get('access_token')?.value;

  if (!token) {
    redirect('/login');
  }

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
