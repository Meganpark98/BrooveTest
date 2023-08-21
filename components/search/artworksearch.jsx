import styles from "../../styles/Contents.module.css";
import { Magnifying } from "../../public/img/magnifying";
import { PlusIcon } from "../../public/img/plus";
import { CaretDown } from "../../public/img/caretdown";
import { UnderBar386 } from "../../public/img/underbar386";
import { UnderBar878 } from "../../public/img/underbar878";
import { AddArtwork } from "../../public/img/addartwork";

export default function ArtworkSearch() {
  return (
    <>
      <div className={styles.artworksearchbackground}>
        <div className={styles.artwork}>
          <div className={styles.artworkboxtitle}>아트워크 찾기</div>
          <div className={styles.artworkboxsubtitle}>아트워크 레퍼런스</div>
          <div className={styles.artworksearchbox}>
            <AddArtwork />
            <div className={styles.artworksearchboxinsidetext}>
              <div className={styles.artworksearchinput}>원하는 아트워크와</div>
              <div className={styles.artworksearchinput2}>
                유사한 이미지를 올려주세요!
              </div>
            </div>
          </div>
        </div>
        {/* 분리 */}
      </div>

      {/* 분리 */}
      <div className={styles.artworkoptionbox}>
        <div className={styles.artworkoptionboxunit}>
          <div className={styles.artworkoptionboxtitle}>가격</div>
          <div className={styles.artworkoptioninput}>
            <div className={styles.artworkoptioninputtext}>비트</div>
            <CaretDown />
          </div>
          <UnderBar878 />
        </div>
      </div>

      {/* 분리 */}
    </>
  );
}
