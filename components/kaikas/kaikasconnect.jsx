import styles from "../../styles/Navbar.module.css";
import { Wallet } from "../../public/img/wallet";

export default function KaikasConnect() {

//   if (typeof window.klaytn !== "undefined") {
//     try {
//       const accounts = await klaytn.enable();
//       const address = accounts[0];
//     } catch (error) {
//       // Handle error. Likely the user rejected the login
//       console.error(error);
//     }
// }

if (typeof window.klaytn !== "undefined") {
  // Kaikas user detected. You can now use the provider.
  const provider = window["klaytn"];
  if (klaytn._kaikas.isEnabled()) {
    const address = provider.selectedAddress;
  }
}
  return (
    <div className={styles.KaikasConnect}>
      <div className="wallet">
        <Wallet className="vector" alt="Vector" src="vector.svg" />
      </div>
      Connect Wallet
      <div>
        {/* `${address}` */}
      </div>
    </div>
  );
}
