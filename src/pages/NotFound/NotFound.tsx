import styles from './NotFound.module.scss'

export default function NotFound() {

  return (
    <main>
      <div className={styles.notfound}>
        <div className={`${styles.notfoundContainer} container`}>
          <div className={styles.notfoundInner}>
            <h2 className={styles.notfoundTitle}>
              404
            </h2>
            <p className={styles.notfoundSubtitle}>Not Found</p>
          </div>
        </div>
      </div>
    </main>
  );
}