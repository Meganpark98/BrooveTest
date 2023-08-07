import { ConnectButton } from "@rainbow-me/rainbowkit";
import styles from "../../styles/Navbar.module.css";
import SearchBar from "../search/searchbar";
import KaikasConnect from "../kaikas/kaikasconnect";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContents}>
        <a href="https://alchemy.com/?a=create-web3-dapp" target={"_blank"}>
          <img
            className={styles.broove_logo}
            src="/img/Broove_width.png"
          ></img>
        </a>
        <SearchBar/>
        <KaikasConnect/>


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
