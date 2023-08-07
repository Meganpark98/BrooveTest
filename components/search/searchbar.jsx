import styles from "../../styles/Navbar.module.css";
import { Magnifying } from "../../public/img/magnifying";

export default function SearchBar() {
  return (
    <div className={styles.searchbar}>
      <div className="screen">
        <Magnifying className="vector" alt="Vector" src="vector.svg" />
      </div>
      What are you looking for? || Tracks
    </div>  
  );
}
