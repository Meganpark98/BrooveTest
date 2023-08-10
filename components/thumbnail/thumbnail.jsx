import styles from "../../styles/Home.module.css";

export default function ThumbNail() {
  return (
    <nav className={styles.thumbnail}>
      {/* <div className={styles.thumbnailcontents}> */}
        <div className={styles.thumbnailcontentsimg}>
          <div className={styles.thumbnailtextdiv}>
            <div className={styles.thumbnailtext}>
              블록체인이 증명하는 최초의 트랙 및 아트워크 거래 플랫폼!
            </div>
          </div>
        </div>
      {/* </div> */}
    </nav>
  );
}
