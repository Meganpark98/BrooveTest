import styles from "../../styles/Contents.module.css";
import { Magnifying } from "../../public/img/magnifying";
import { PlusIcon } from "../../public/img/plus";
import { CaretDown } from "../../public/img/caretdown";
import { UnderBar386 } from "../../public/img/underbar386";
import { UnderBar878 } from "../../public/img/underbar878";

export default function TrackSearch() {
  return (
    <>
      <div className={styles.tracksearchbackground}>
        <div className={styles.trackbox}>
          <div className={styles.trackboxtitle}>트랙 찾기</div>
          <div className={styles.trackboxsubtitle}>곡 레퍼런스</div>
          <div className={styles.tracksearchbox}>
            <Magnifying />
            <div className={styles.tracksearchinput}>
              원하는 트랙과 유사한 곡을 입력하세요!
            </div>
          </div>
        </div>
        {/* 분리 */}

        <div className={styles.trackoptionbox}>
          <div className={styles.trackoptionboxunit}>
            <div className={styles.trackoptionboxtitle}>
              키워드
              <div className={styles.trackoptionboxsubtitle}>
                (선택, 최대 3개)
              </div>
            </div>

            <div className={styles.trackoptioninput}>
              <div className={styles.trackoptioninputtext}></div>
              <PlusIcon />
            </div>
            <UnderBar386 />
          </div>
          <div className={styles.trackoptionboxunit}>
            <div className={styles.trackoptionboxtitle}>장르</div>

            <div className={styles.trackoptioninput}>
              <div className={styles.trackoptioninputtext}>
                장르를 선택하세요!
              </div>
              <CaretDown />
            </div>
            <UnderBar386 />
          </div>
        </div>
      </div>
      <div className={styles.trackoptionbox2}>
        <div className={styles.trackoptionboxunit}>
          <div className={styles.trackoptionboxtitle}>유형</div>

          <div className={styles.trackoptioninput}>
            <div className={styles.trackoptioninputtext}>비트</div>
            <CaretDown />
          </div>
          <UnderBar386 />
        </div>
        <div className={styles.trackoptionboxunit}>
          <div className={styles.trackoptionboxtitle}>
            KEY <div className={styles.trackoptionboxsubtitle}>(선택사항)</div>
          </div>

          <div className={styles.trackoptioninput}>
            <div className={styles.trackoptioninputtext}>
              Cm KEY
            </div>
            <CaretDown />
          </div>
          <UnderBar386 />
        </div>

        {/* <CaretDown /> */}
        {/* <UnderBar878 /> */}
      </div>

        {/* 분리 */}

      <div className={styles.trackoptionbox2}>
        <div className={styles.trackoptionboxunit2}>
          <div className={styles.trackoptionboxtitle}>가격</div>

          <div className={styles.trackoptioninput}>
            <div className={styles.trackoptioninputtext2}>00,000원 ~ 00,000원</div>
            <CaretDown />
         
          </div>
          
        <UnderBar878 />

          {/* <UnderBar386 /> */}
        </div>


        {/* <CaretDown /> */}
        {/* <UnderBar878 /> */}
      </div>

        {/* 분리 */}

    </>
  );
}
