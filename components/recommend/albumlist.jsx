import React, { useEffect } from "react";
import { AuthMark } from "../../public/img/authmark";

import styles from "../../styles/Home.module.css";

export default function AlbumList() {
  return (
    <div className={styles.recommend}>
      <div className={styles.recommendTitle}>브루브 추천 앨범아트</div>
      <div className={styles.recommendContentsBox}>
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
              <div className={styles.smartContractDenote}>smart contracted<AuthMark /></div>
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
              <div className={styles.smartContractDenote}>smart contracted<AuthMark /></div>
              <div className={styles.contentsPrice}>9,999 KLAY</div>
            </div>
          </div>
        </div>        <div className={styles.recommendContents}>
          <div className={styles.contentsImage}>
            <img
              className={styles.contentsImg}
              alt="contentsImage"
              src="img/RectangleRecommendIMG.png"
            />
            <div className={styles.artName}>HIT ME UP</div>
            <div className={styles.creatorName}>Tae woo</div>
            <div className={styles.contentsDetail}>
              <div className={styles.smartContractDenote}>smart contracted<AuthMark /></div>
              <div className={styles.contentsPrice}>9,999 KLAY</div>
            </div>
          </div>
        </div>        <div className={styles.recommendContents}>
          <div className={styles.contentsImage}>
            <img
              className={styles.contentsImg}
              alt="contentsImage"
              src="img/RectangleRecommendIMG.png"
            />
            <div className={styles.artName}>HIT ME UP</div>
            <div className={styles.creatorName}>Tae woo</div>
            <div className={styles.contentsDetail}>
              <div className={styles.smartContractDenote}>smart contracted<AuthMark /></div>
              <div className={styles.contentsPrice}>9,999 KLAY</div>
            </div>
          </div>
        </div>        <div className={styles.recommendContents}>
          <div className={styles.contentsImage}>
            <img
              className={styles.contentsImg}
              alt="contentsImage"
              src="img/RectangleRecommendIMG.png"
            />
            <div className={styles.artName}>HIT ME UP</div>
            <div className={styles.creatorName}>Tae woo</div>
            <div className={styles.contentsDetail}>
              <div className={styles.smartContractDenote}>smart contracted<AuthMark /></div>
              <div className={styles.contentsPrice}>9,999 KLAY</div>
            </div>
          </div>
        </div>        <div className={styles.recommendContents}>
          <div className={styles.contentsImage}>
            <img
              className={styles.contentsImg}
              alt="contentsImage"
              src="img/RectangleRecommendIMG.png"
            />
            <div className={styles.artName}>HIT ME UP</div>
            <div className={styles.creatorName}>Tae woo</div>
            <div className={styles.contentsDetail}>
              <div className={styles.smartContractDenote}>smart contracted<AuthMark /></div>
              <div className={styles.contentsPrice}>9,999 KLAY</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
