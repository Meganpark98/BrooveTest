import React, { useEffect } from "react";

import styles from "../../styles/Navbar.module.css";
import { Mypage } from "../../public/img/mypage";


export default function MypageButton() {

  return (
    <div className={styles.mypage}>
      <div className="mypage">
        <Mypage className="vector" alt="Vector" src="vector.svg" />
      </div>
    </div>
  );
}
