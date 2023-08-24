import { AddArtwork } from "../../public/img/addartwork";
import { UnderBar386 } from "../../public/img/underbar386";
import styles from "../../styles/Contents.module.css";
import { CaretDown } from "../../public/img/caretdown";
import { PlusIcon } from "../../public/img/plus";
import { UnderBar196 } from "../../public/img/underbar196";
import { UnderBar446 } from "../../public/img/underbar446";
import { UnderBar1260 } from "../../public/img/underbar1260";
import { UnderBar1260_1px } from "../../public/img/underbar1260_1px";
import { Magnifying } from "../../public/img/magnifying";
import { Question } from "../../public/img/question";
import { BrooveButtonBlack } from "../../public/img/broove_button_black";
import { CopyImg } from "../../public/img/copyimg";

export default function ChainSearch() {
  return (
    <>
      <div className={styles.chainsearchbackground}>
        <div className={styles.chain}>
          <div className={styles.chainboxtitle}>블록체인 탐색하기</div>
          <div className={styles.chainboxsubtitle}>
            내가&nbsp;
            <div className={styles.chainboxsubtitleemp}>
              구매한 트랙과 아트워크의 거래 내역
            </div>
            &nbsp;및&nbsp;
            <div className={styles.chainboxsubtitleemp}>저작권 증명내역</div>을
            블록체인에서 확인하세요!
          </div>
        </div>
        <div className={styles.chainsearchboxcontents}>
          <div className={styles.chainsearchbox}>
            <Magnifying />
            <div className={styles.chainsearchboxinput}>
              트랜잭션 코드 혹은 컨트랙트 주소를 입력하세요
            </div>
          </div>
          <div className={styles.chainsearchbutton}>
            <div className={styles.chainsearchbuttontext}>SEARCH</div>
            <BrooveButtonBlack />
          </div>
        </div>
      </div>
      <div className={styles.chainsearchresultbox}>
        <div className={styles.chainsearchresulttitle}>탐색 결과</div>
        <UnderBar1260 />

        <div className={styles.NFTbox}>
          {/* 텍스트 들어갈 자리*/}

          <div className={styles.NFTText}>
            <div className={styles.NFTtitle}>NFT</div>
            <div className={styles.NFTAddressbox}>
              <div className={styles.NFTAddress}>
                0x0ed55aee0399064cfe51dd3cc10d99734bb796c
              </div>
              <div className={styles.NFTAddressCopyButton}>
                <CopyImg />
                COPY
              </div>
            </div>
            <div className={styles.NFTtitle}>OVERVIEW</div>
            <div className={styles.NFTDetailUnit}>
              <div className={styles.NFTDetailHead}>기본 정보</div>
              <div className={styles.NFTDetail}>Blue # 2 (Artwork)</div>
            </div>
            <div className={styles.NFTDetailUnit}>
              <div className={styles.NFTDetailHead}>기본 정보</div>
              <div className={styles.NFTDetail}>Blue # 2 (Artwork)</div>
            </div>
            <div className={styles.NFTDetailUnit}>
              <div className={styles.NFTDetailHead}>최초 생성일</div>
              <div className={styles.NFTDetail}>
                2023년 06월 17일 18시 56분 22초
              </div>
            </div>
            <div className={styles.NFTDetailUnit}>
              <div className={styles.NFTDetailHead}>최초 생성자(저작권자)</div>
              <div className={styles.NFTDetail}>
                0x0ed55aee039... (@Daeyun Kim)
              </div>
            </div>
            <div className={styles.NFTDetailUnit}>
              <div className={styles.NFTDetailHead}>발행 가격</div>
              <div className={styles.NFTDetail}>150,000 BRIT</div>
            </div>
            <div className={styles.NFTDetailUnit}>
              <div className={styles.NFTDetailHead}>현재 소유자(저작권자)</div>
              <div className={styles.NFTDetail}>0x2962ee039... (@taewooet)</div>
            </div>
            <div className={styles.NFTDetailUnit}>
              <div className={styles.NFTDetailHead}>현재 가격</div>
              <div className={styles.NFTDetail}>160,000 BRIT</div>
            </div>
            <div className={styles.NFTDetailUnit}>
              <div className={styles.NFTDetailHead}>라이센스 소유자</div>
              <div className={styles.NFTDetail}>
                0x561ndoff8... (@Mosap) 외 7명
              </div>
              <div className={styles.NFTAddressDetailButton}>
                <CopyImg />
                DETAIL
              </div>
            </div>
          </div>

          {/* 이미지 들어갈 자리*/}

          <div className={styles.NFTImg}>
            <img src="/img/artworkexample.png" />
          </div>
        </div>

        <div className={styles.UnderBarMargin}>
          <UnderBar1260 />
        </div>
        <div className={styles.NFTtitle}>HISTORY</div>
        <div className={styles.historyChart}>
          <div className={styles.historyChartHead}>
            <div className={styles.historyChartHeadContent}>트랜잭션 주소</div>
            <div className={styles.historyChartHeadContent}>블록 넘버</div>
            <div className={styles.historyChartHeadContent}>생성 시간</div>
            <div className={styles.historyChartHeadContent}>FROM</div>
            <div className={styles.historyChartHeadContent}>TO</div>
            <div className={styles.historyChartHeadContent}>유형</div>
            <div className={styles.historyChartHeadContent}>거래 금액</div>
            <div className={styles.historyChartHeadContent}>수수료</div>
          </div>
          <UnderBar1260 />

          <div className={styles.historyChartDetail}>
            <div className={styles.historyChartDetailContentLink}>
              0x12425aed38...
            </div>
            <div className={styles.historyChartDetailContentLink}>
              407548248...
            </div>
            <div className={styles.historyChartDetailContent}>1 Days ago</div>
            <div className={styles.historyChartDetailContentLink}>
              0x03125aed38...
            </div>
            <div className={styles.historyChartDetailContentLink}>
              0x0ed45ae538...
            </div>
            <div className={styles.historyChartDetailContent}>저작권 양도</div>
            <div className={styles.historyChartDetailContent}>160,000 BRIT</div>
            <div className={styles.historyChartDetailContent}>수수료</div>
          </div>

          <UnderBar1260_1px />
          <div className={styles.historyChartDetail}>
            <div className={styles.historyChartDetailContentLink}>
              0x12425aed38...
            </div>
            <div className={styles.historyChartDetailContentLink}>
              407548248...
            </div>
            <div className={styles.historyChartDetailContent}>1 Days ago</div>
            <div className={styles.historyChartDetailContentLink}>
              0x03125aed38...
            </div>
            <div className={styles.historyChartDetailContentLink}>
              0x0ed45ae538...
            </div>
            <div className={styles.historyChartDetailContent}>저작권 양도</div>
            <div className={styles.historyChartDetailContent}>160,000 BRIT</div>
            <div className={styles.historyChartDetailContent}>수수료</div>
          </div>

          <UnderBar1260_1px />
          <div className={styles.historyChartDetail}>
            <div className={styles.historyChartDetailContentLink}>
              0x12425aed38...
            </div>
            <div className={styles.historyChartDetailContentLink}>
              407548248...
            </div>
            <div className={styles.historyChartDetailContent}>1 Days ago</div>
            <div className={styles.historyChartDetailContentLink}>
              0x03125aed38...
            </div>
            <div className={styles.historyChartDetailContentLink}>
              0x0ed45ae538...
            </div>
            <div className={styles.historyChartDetailContent}>저작권 양도</div>
            <div className={styles.historyChartDetailContent}>160,000 BRIT</div>
            <div className={styles.historyChartDetailContent}>수수료</div>
          </div>

          <UnderBar1260_1px />
          <div className={styles.historyChartDetail}>
            <div className={styles.historyChartDetailContentLink}>
              0x12425aed38...
            </div>
            <div className={styles.historyChartDetailContentLink}>
              407548248...
            </div>
            <div className={styles.historyChartDetailContent}>1 Days ago</div>
            <div className={styles.historyChartDetailContentLink}>
              0x03125aed38...
            </div>
            <div className={styles.historyChartDetailContentLink}>
              0x0ed45ae538...
            </div>
            <div className={styles.historyChartDetailContent}>저작권 양도</div>
            <div className={styles.historyChartDetailContent}>160,000 BRIT</div>
            <div className={styles.historyChartDetailContent}>수수료</div>
          </div>
          <UnderBar1260 />
        </div>
      </div>
    </>
  );
}
