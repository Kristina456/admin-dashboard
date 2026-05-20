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
        return '/images/shopping-chart.svg';
      case 'registration':
        return '/images/user-plus.svg';
      case 'review':
        return '/images/star.svg';
      default:
        return '/images/star.svg';
    }
  };

  return (
    <div className={styles['last-activities']}>
      <h2 className={styles['last-activities__title']}>Last activities</h2>
      <div className={styles['last-activities__activity-wrapper']}>
        {activities.map((item: Activities) => (
          <div key={item.id} className={styles['last-activities__activity-card']}>
            <Image src={image(item.type)} alt="" width={40} height={40}></Image>
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
    </div>
  );
}
