import styles from './LastActivities.module.scss';
import { Activities } from '../../types/dashboard.type';
import { Button } from '@/components/Button/Button.component';
import Image from 'next/image';

interface Props {
  activities: Activities[];
}

export function LastActivities({ activities }: Props) {
  const image = (type: string) => {
    switch (type) {
      case 'purchase':
        return {
          image: '/images/shopping-chart.svg',
          altText: 'Shopping chart',
        };
      case 'registration':
        return {
          image: '/images/user-plus.svg',
          altText: 'New user',
        };
      case 'review':
        return {
          image: '/images/star.svg',
          altText: 'Star',
        };
      default:
        return {
          image: '/images/star.svg',
          altText: 'Star',
        };
    }
  };

  return (
    <section className={styles['last-activities']}>
      <h2 className={styles['last-activities__title']}>Last activities</h2>
      <div className={styles['last-activities__activity-wrapper']}>
        {activities.map((item: Activities) => (
          <div key={item.id} className={styles['last-activities__activity-card']}>
            <Image src={image(item.type).image} alt={image(item.type).altText} width={40} height={40}></Image>
            <div>
              <p className={styles['last-activities__activity-description']}>{item.description}</p>
              <time>{item.date}</time>
            </div>
          </div>
        ))}
      </div>
      <div className={styles['last-activities__button']}>
        <Button variant="secondary">All activities</Button>
      </div>
    </section>
  );
}
