import { useState, useEffect } from "react";
import styles from "../../styles/Navbar.module.css";
import { Wallet } from "../../public/img/wallet";

export default function KaikasConnect() {
  const [address, setAddress] = useState(null);
  // const [balancePEB, setBalancePEB] = useState(null);
  const [balance, setBalance] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (window.klaytn && window.klaytn._kaikas) {
      const kaikas = window.klaytn._kaikas;
      if (kaikas.wallet) {
        // Check for kaikas.wallet instead of kaikas
        if (kaikas.wallet.isEnabled()) {
          // Use kaikas.wallet.isEnabled() instead of kaikas.isEnabled()
          kaikas.wallet.enable().then(([selectedAddress]) => {
            setAddress(selectedAddress);
            kaikas.wallet
              .getBalance(selectedAddress)
              .then((bal) => setBalance(bal));
          });
        } else {
          setAddress(null);
        }
      } else {
        setAddress(null);
        setBalance(null);
      }
    }
  }, []);

  const handleConnectButtonClick = async () => {
    console.log("function test: start");

    if (typeof window.klaytn !== "undefined") {
      const accounts = await klaytn.enable();
      setAddress(accounts[0]);
      const balancePromise = caver.klay.getBalance(accounts[0]);
      balancePromise.then((result) => {
        setBalance((result * 0.000000000000000001).toFixed(2));
      });
      console.log("account: ", accounts[0]);
      console.log("balancePEB: ", caver.klay.getBalance(accounts[0]));
      console.log("balance: ", balance);
    }
    // 카이카스 설치 필요 안내 후 페이지로 이동하기
    else {
      alert("kaikas를 설치해주세요");
    }
  };

  const handleDisconnectButtonClick = () => {
    setAddress(null);
    setBalance(null);
  };

  const sign = async () => {
    console.log("hi");
    if (address) {
      console.log("address: ", address)
      try {
          console.log("try challenge fetch");
          const challenge = await fetch(
          `http://localhost:8080/challenge/${address}`
        );
        if (challenge.status === 401) {
          console.log("try address 401");

          throw new Error("This address is not registered");
        }
      } catch (error) {
        console.log("try address error");

        if (error instanceof Error) {
          setError(`Something went wrong: ${error.message}`);
          console.log("error: ", error);
        }
      }
    }
  };

  return (
    <div className={styles.KaikasConnect}>
      <div className="wallet">
        <Wallet />
      </div>
      {address ? (
        <div>
          {balance} KLAY
          <button onClick={handleDisconnectButtonClick}>Disconnect</button>
          <button onClick={() => sign()}>
            <span>Authenticate</span>
          </button>
        </div>
      ) : (
        <button onClick={handleConnectButtonClick}>Connect Wallet</button>
      )}
    </div>
  );
}
