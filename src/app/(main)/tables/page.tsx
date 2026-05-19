import { Table } from './components/Table/Table.component';
import styles from './page.module.scss';

export default function TablesPage() {
  return (
    <div className={styles['tables-page']}>
      <h1>Table page</h1>
      <Table />
    </div>
  );
}
