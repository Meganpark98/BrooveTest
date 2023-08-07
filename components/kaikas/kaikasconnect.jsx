import styles from "../../styles/Navbar.module.css";
import { Wallet } from "../../public/img/wallet";

export default function KaikasConnect() {
  return (
    <div className={styles.KaikasConnect}>
      <div className="wallet">
        <Wallet className="vector" alt="Vector" src="vector.svg" />
      </div>
      Connect Wallet
    </div>
  );
}
