import styles from './page.module.scss';

export default function Home() {
  return (
    <div className={styles['home']}>
      <main className={styles['home__main-section']}>Hallo world</main>
    </div>
  );
}
