import { Earning } from '../../types/dashboard.type';
import styles from './Earnings.module.scss';

interface Props {
  earnings: Earning[];
}

export function Earnings({ earnings }: Props) {
  return (
    <section className={styles['earnings']}>
      {earnings.map((item: Earning, index: number) => (
        <div key={index} className={styles['earnings__wrapper']}>
          <p className={styles['earnings__title']}>{item.statisticsDescription}</p>
          <div className={styles['earnings__value']}>€{item.value}</div>
          <p className={styles['earnings__percentage']}>+{item.percentageChange}% this month</p>
        </div>
      ))}
    </section>
  );
}
