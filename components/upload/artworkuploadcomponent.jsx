import { AddArtwork } from "../../public/img/addartwork";
import { UnderBar386 } from "../../public/img/underbar386";
import styles from "../../styles/Contents.module.css";
import { CaretDown } from "../../public/img/caretdown";
import { PlusIcon } from "../../public/img/plus";
import { UnderBar196 } from "../../public/img/underbar196";
import { UnderBar446 } from "../../public/img/underbar446";

export default function ArtworksUploadComponent() {
  return (
    <>
      <div className={styles.uploadbackground}>
        <div className={styles.uploadtextbox}>
          <div className={styles.uploadtitle}>아트워크 업로드 하기</div>
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

              <div className={styles.uploadkeyword}>
                키워드
                <div className={styles.uploadkeywordoption}>(최대 3개)</div>
              </div>
              <div className={styles.uploadoptioninput}>
                <div className={styles.uploadoptioninputtext}>
                  #Digital, #몽환적, #Vivid
                </div>
                <PlusIcon />
              </div>
              <UnderBar446 />
              <div className={styles.uploadtypebox}>
                <div className={styles.uploadtypecontent}>
                  <div className={styles.uploadtype}>유형</div>
                  <div className={styles.uploadtypeinput}>
                    <div className={styles.uploadtypeinputtext}>아트워크</div>
                    <CaretDown />
                  </div>
                  <UnderBar196 />
                </div>
                <div className={styles.uploadtypecontent2}>
                  <div className={styles.uploadcustom}>커스텀 가능 여부</div>
                  <div className={styles.uploadcustomboxcontent}>
                    <div className={styles.uploadcustomcheckbox}></div>
                    <div className={styles.uploadcustomcheckboxexplain}>
                      커스텀 가능
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
          <div className={styles.sellcostbox}>
          <div className={styles.sellcostboxunit}>
            <div className={styles.trackoptionboxtitle}>
              발행가격
            </div>

            <div className={styles.trackoptioninput}>
              <div className={styles.sellcostinputtext}>판매 가격</div>
              원
            </div>
            <UnderBar446 />
          </div>
          <div className={styles.sellcostboxunit}>
            <div className={styles.trackoptionboxtitle}>장르</div>

            <div className={styles.trackoptioninput}>
              <div className={styles.sellcostinputtext}>
                커스텀 추가비용
              </div>
              원
            </div>
            <UnderBar446 />
          </div>
        </div>
      </div>
    </>
  );
}
