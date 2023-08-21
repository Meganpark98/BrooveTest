import { AddArtwork } from "../../public/img/addartwork";
import { UnderBar386 } from "../../public/img/underbar386";
import styles from "../../styles/Contents.module.css";
import { CaretDown } from "../../public/img/caretdown";
import { PlusIcon } from "../../public/img/plus";
import { UnderBar196 } from "../../public/img/underbar196";
import { UnderBar446 } from "../../public/img/underbar446";
import { Magnifying } from "../../public/img/magnifying";
import { Question } from "../../public/img/question";

export default function TracksUploadComponent() {
  return (
    <>
      <div className={styles.uploadbackground}>
        <div className={styles.uploadtextbox}>
          <div className={styles.uploadtitle}>트랙 업로드 하기</div>
          <div className={styles.uploadsubtitle}>
            트랙 혹은 아트워크를 판매 및 라이센싱하기 위해 창작물을 <br />
            블록체인 상에 업로드하여 저작권리를 기록하고 시장에 공개합니다.
          </div>
        </div>

        <div className={styles.uploadbox}>
          <div className={styles.uploadboxtitle}>파일 올리기</div>
          <div className={styles.uploadboxcontents}>
            <div className={styles.uploadboxupload}>
              <AddArtwork />
              <div className={styles.uploadboxinsidetext}>
                <div className={styles.uploadinput}>
                  NFT로 민팅하여 블록체인에 등록하고자
                </div>
                <div className={styles.uploadinput}>
                  하는 창작물을 올려주세요!
                </div>
              </div>
            </div>
            <div className={styles.uploadexplainbox}>
              <div className={styles.uploadname}>제목</div>
              <div className={styles.uploadnameinput}>20자 이내</div>
              <UnderBar446 />

              <div className={styles.uploadexplain}>설명</div>
              <div className={styles.uploadexplaininput}>150자 이내</div>
              <UnderBar446 />
              <div className={styles.uploadexplaininput2}>설명!!</div>

              <UnderBar446 />
            </div>
          </div>
        </div>
        <div className={styles.trackdetailcontents}>
          <div className={styles.tracktypebox}>
            <div className={styles.tracktypetitle}>유형</div>
            <div className={styles.tracktypeselect}>
              비트
              <CaretDown />
            </div>
            <UnderBar196 />
          </div>
          <div className={styles.trackBPMbox}>
            <div className={styles.trackBPMtitle}>BPM</div>
            <div className={styles.tracktypeselect}>20자 이내</div>
            <UnderBar196 />
          </div>
          <div className={styles.trackkeywordbox}>
            <div className={styles.trackkeywordtitle}>키워드</div>
            <div className={styles.trackkeywordselect}>
              #Jersey Club, #몽환적, #Groove
              <PlusIcon />
            </div>
            <UnderBar446 />
          </div>
        </div>

        {/* 구분 */}
        <div className={styles.trackdetailcontents2}>
          <div className={styles.trackkeywordbox}>
            <div className={styles.trackkeywordtitle}>곡 레퍼런스</div>
            <div className={styles.trackkeywordselect}>
              <div className={styles.trackreference}>
                <Magnifying />
                <div className={styles.trackreferenceinput}>
                  유사한 곡을 입력하세요.
                </div>
              </div>
              <PlusIcon />
            </div>
            <UnderBar446 />
          </div>

          <div className={styles.howtoselltrackbox}>
            <div className={styles.howtoselltracktitle}>
              판매 방식
              <div className={styles.howtoselltracksubtitle}>
                (중복 선택 가능)
              </div>
            </div>
            <div className={styles.howtosellcheckboxcontents}>
              <div className={styles.howtosellcheckbox}></div>
              <div className={styles.howtosellcheckboxdetail}>
                판매(저작권 이전)
              </div>
              <div className={styles.howtosellcheckbox}></div>
              <div className={styles.howtosellcheckboxdetail}>라이센싱</div>
              <div className={styles.questionmark}>
                <Question />
              </div>
            </div>
          </div>
        </div>

        {/* 구분 */}

        <div className={styles.trackdetailcontents3}>
          <div className={styles.trackkeywordbox}>
            <div className={styles.trackkeywordtitle}>발행 가격</div>
            <div className={styles.trackkeywordselect}>
              <div className={styles.trackreference}>판매 가격</div>
              0원
            </div>

            <UnderBar446 />
          </div>
        </div>
      </div>
    </>
  );
}
