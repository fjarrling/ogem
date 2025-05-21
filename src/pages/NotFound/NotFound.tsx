import styles from './NotFound.module.scss'
import Header from "@/components/Header/Header.tsx";
import Footer from "@/components/Footer/Footer.tsx";

export default function NotFound() {

  return (
    <>
      <Header/>
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
      <Footer/>
    </>
  );
}