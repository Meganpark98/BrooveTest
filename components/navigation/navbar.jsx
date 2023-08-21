import { ConnectButton } from "@rainbow-me/rainbowkit";
import styles from "../../styles/Navbar.module.css";
import SearchBar from "../search/searchbar";
import KaikasConnect from "../kaikas/kaikasconnect";
import MypageButton from "../mypage/mypage";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>

      <div className={styles.navbarContents}>
        <a href="/">
          <img
            className={styles.broove_logo}
            src="/img/Broove_width.png"
          ></img>
        </a>
        <div className={styles.logo_right}>
        <SearchBar/>
        <KaikasConnect/>
        <MypageButton/>
        </div>




        {/* <button
          onClick={() => {
            klaytn.enable();
          }}
        >
          connects
        </button> */}
      </div>
    </nav>
  );
}
