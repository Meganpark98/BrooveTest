import React, { useState } from "react";
import { AuthMark } from "../../public/img/authmark";
import styles from "../../styles/Home.module.css";
import BuyModal from "../modal/buymodal";

export default function TrackList() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  }

  const closeModal = () => {
    setIsModalOpen(false);
  };


  return (
    <div className={styles.recommend}>
      <div className={styles.recommendTitle}>브루브 추천 트랙리스트</div>
      <div className={styles.recommendContentsBox}>
        {/* modal test*/}
        <div 
          className={styles.recommendContents}
          onClick={toggleModal}
        >
          <div className={styles.contentsImage}>
            <img
              className={styles.contentsImg}
              alt="contentsImage"
              src="img/RectangleRecommendIMG.png"
            />
            <div className={styles.artName}>Modal Example</div>
            <div className={styles.creatorName}>Tae woo</div>
            <div className={styles.contentsDetail}>
              <div className={styles.smartContractDenote}>
                smart contracted
                <AuthMark />
              </div>
              <div className={styles.contentsPrice}>9,999 KLAY</div>
            </div>
          </div>
        </div>
        <div className={styles.recommendContents}>
          <div className={styles.contentsImage}>
            <img
              className={styles.contentsImg}
              alt="contentsImage"
              src="img/RectangleRecommendIMG.png"
            />
            <div className={styles.artName}>HIT ME UP</div>
            <div className={styles.creatorName}>Tae woo</div>
            <div className={styles.contentsDetail}>
              <div className={styles.smartContractDenote}>
                smart contracted
                <AuthMark />
              </div>
              <div className={styles.contentsPrice}>9,999 KLAY</div>
            </div>
          </div>
        </div>{" "}
        <div className={styles.recommendContents}>
          <div className={styles.contentsImage}>
            <img
              className={styles.contentsImg}
              alt="contentsImage"
              src="img/RectangleRecommendIMG.png"
            />
            <div className={styles.artName}>HIT ME UP</div>
            <div className={styles.creatorName}>Tae woo</div>
            <div className={styles.contentsDetail}>
              <div className={styles.smartContractDenote}>
                smart contracted
                <AuthMark />
              </div>
              <div className={styles.contentsPrice}>9,999 KLAY</div>
            </div>
          </div>
        </div>{" "}
        <div className={styles.recommendContents}>
          <div className={styles.contentsImage}>
            <img
              className={styles.contentsImg}
              alt="contentsImage"
              src="img/RectangleRecommendIMG.png"
            />
            <div className={styles.artName}>HIT ME UP</div>
            <div className={styles.creatorName}>Tae woo</div>
            <div className={styles.contentsDetail}>
              <div className={styles.smartContractDenote}>
                smart contracted
                <AuthMark />
              </div>
              <div className={styles.contentsPrice}>9,999 KLAY</div>
            </div>
          </div>
        </div>{" "}
        <div className={styles.recommendContents}>
          <div className={styles.contentsImage}>
            <img
              className={styles.contentsImg}
              alt="contentsImage"
              src="img/RectangleRecommendIMG.png"
            />
            <div className={styles.artName}>HIT ME UP</div>
            <div className={styles.creatorName}>Tae woo</div>
            <div className={styles.contentsDetail}>
              <div className={styles.smartContractDenote}>
                smart contracted
                <AuthMark />
              </div>
              <div className={styles.contentsPrice}>9,999 KLAY</div>
            </div>
          </div>
        </div>{" "}
        <div className={styles.recommendContents}>
          <div className={styles.contentsImage}>
            <img
              className={styles.contentsImg}
              alt="contentsImage"
              src="img/RectangleRecommendIMG.png"
            />
            <div className={styles.artName}>HIT ME UP</div>
            <div className={styles.creatorName}>Tae woo</div>
            <div className={styles.contentsDetail}>
              <div className={styles.smartContractDenote}>
                smart contracted
                <AuthMark />
              </div>
              <div className={styles.contentsPrice}>9,999 KLAY</div>
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <BuyModal showModal={isModalOpen} closeModal={closeModal}/>
      )}
    </div>
  );
}
