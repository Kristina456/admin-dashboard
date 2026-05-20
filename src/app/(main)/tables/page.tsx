import { Table } from './components/Table/Table.component';
import styles from './page.module.scss';

export default function TablesPage() {
  return (
    <div className={styles['tables-page']}>
      <h1 className={styles['tables-page__title']}>Table page</h1>
      <section className={styles['tables-page__data']}>
        <Table />
      </section>
    </div>
  );
}
