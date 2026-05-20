import { Earning } from '../../types/dashboard.type';
import styles from './Earnings.module.scss';

interface Props {
  earnings: Earning[];
}

export function Earnings({ earnings }: Props) {
  return (
    <div className={styles['earnings']}>
      {earnings.map((item: Earning, index: number) => (
        <div key={index} className={styles['earnings__wrapper']}>
          <h2 className={styles['earnings__title']}>{item.statisticsDescription}</h2>
          <p className={styles['earnings__value']}>€{item.value}</p>
          <p className={styles['earnings__percentage']}>+{item.percentageChange}% this month</p>
        </div>
      ))}
    </div>
  );
}
