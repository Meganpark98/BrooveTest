import React from "react";
import styles from "../../styles/Modal.module.css";
import { UnderBar952 } from "../../public/img/underbar878";
import { CopyImg } from "../../public/img/copyimg";
import { CopyImgBlack } from "../../public/img/copyimg_black";

function BuyModal({ showModal, closeModal }) {
  return (
    <div className={styles.modalOverlay} onClick={closeModal}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        {/* 여기부터 시작 */}
        <div className={styles.modalHeader}>트랙 구매하기</div>
        <UnderBar952 />

        <div className={styles.modalContentsBox}>
          <div className={styles.modalLeftBox}>
            <div className={styles.modalSubHeader}>저작권 정보</div>
            <div className={styles.modalAddress}>
            0x0ed55aee0399064cfe51dd3cc10d99734bb796c
            <CopyImgBlack />

            </div>

          </div>
          <div className={styles.modalRightBox}>asdf</div>
        </div>
      </div>
    </div>
  );
}

export default BuyModal;
