import Image from 'next/image';
import styles from './page.module.scss';
import { Earnings } from './components/Earnings/Earnings.component';
import { LastActivities } from './components/LastActivities/LastActivities.component';

export default function DashboardPage() {
  return (
    <div className={styles['dashboard-page']}>
      <header className={styles['dashboard-page__header']}>
        <p>Wednesday, 20 May 2026.</p>
        <h1>Business overview</h1>
      </header>
      <section className={styles['dashboard-page__earnings']}>
        <Earnings
          earnings={[
            { statisticsDescription: 'Total earnings', value: 1.4, percentageChange: 8.3 },
            { statisticsDescription: 'Products sold', value: 400, percentageChange: 5.4 },
            { statisticsDescription: 'Total users', value: 1600, percentageChange: 2 },
            { statisticsDescription: 'Average order', value: 3000, percentageChange: 2.3 },
          ]}
        />
      </section>
      <div className={styles['dashboard-page__activities']}>
        <section className={styles['dashboard-page__activity-chart']}>
          <Image src="/images/chart-sales-by-month.svg" alt="Chart sale" fill sizes="40px" />
        </section>
        <section className={styles['dashboard-page__activities-list']}>
          <LastActivities
            activities={[
              { id: 1, description: 'Ivan bought laptop', date: 'Today, 18:35', type: 'purchase' },
              { id: 2, description: 'New registration: Ivana Knežević', date: 'Today, 13:35', type: 'registration' },
              { id: 3, description: 'Maja both speaker', date: 'Today, 10:20', type: 'purchase' },
              { id: 4, description: 'Marko left review', date: 'Yesterday, 13:35', type: 'review' },
            ]}
          />
        </section>
      </div>
    </div>
  );
}
