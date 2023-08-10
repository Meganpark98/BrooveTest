import styles from "../../styles/Navbar.module.css";
import { Magnifying } from "../../public/img/magnifying";
import { Vector } from "../../public/img/vector";

export default function SearchBar() {
  return (
    <div className={styles.searchbar}>
      <div className={styles.searchbarMagnifying}>
        <Magnifying/>
      </div>
      <div className={styles.searchbarText}>
      What are you looking for?
      </div>
      <div className={styles.vector2}>
        <Vector />
      </div>
      <div className={styles.searchbarSelect}>
        Tracks
      </div>
    </div>  
  );
}
