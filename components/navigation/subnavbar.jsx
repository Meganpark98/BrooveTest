import styles from "../../styles/Navbar.module.css";

export default function SubNavbar() {
  return (
    <nav className={styles.subnavbar}>
      <div className={styles.subnavbarcontents}>
        <div className={styles.contents}>Tracks</div>
        <div className={styles.contents}>Artworks</div>
        <div className={styles.contents}>Upload</div>
        <div className={styles.contents}>Chain</div>
      </div>
    </nav>
  );
}
