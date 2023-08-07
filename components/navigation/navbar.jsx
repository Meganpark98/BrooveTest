import { ConnectButton } from "@rainbow-me/rainbowkit";
import styles from "../../styles/Navbar.module.css";
import SearchBar from "../search/searchbar";
export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContents}>
        <a href="https://alchemy.com/?a=create-web3-dapp" target={"_blank"}>
          <img
            className={styles.alchemy_logo}
            src="/img/Broove_width.png"
          ></img>
        </a>
		<SearchBar></SearchBar>
        <ConnectButton></ConnectButton>
      </div>
    </nav>
  );
}
