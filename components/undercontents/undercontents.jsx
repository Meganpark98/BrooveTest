import styles from "../../styles/Contents.module.css";
import { UnderLine } from "../../public/img/underline";

export default function UnderContents() {
  return (
    <div className={styles.main}>
      {/* Subscribe */}
      <div className={styles.subscribebox}>
        <div className={styles.text}>
          브루브의 새로운 소식과 창작물 거래 및 저작권 관련 유용한 정보를 받고
          싶다면?
        </div>
        <div className={styles.subscribe}>
          <div className={styles.emailpart}>
            <div className={styles.emailparttext}>Your email address</div>
          </div>
          <div className={styles.buttonpart}>
            <div className={styles.buttonparttext}>Subscribe</div>
          </div>
        </div>
      </div>

      {/* About us */}
      <div className={styles.aboutusbox}>
        <div className={styles.headlinebox}>
          <div className={styles.headtext1}>ABOUT US</div>
          <div className={styles.headtext2}>USEFUL LINK</div>
          <div className={styles.headtext3}>CONTACT</div>
        </div>
        <UnderLine />
        <div className={styles.aboutuscontents}>
          <div className={styles.aboutusaboutus}>
            <img
              className={styles.broove_logo}
              src="/img/Broove_width_white.png"
            ></img>
            <div className={styles.aboutusaboutustext}>
              Trade and License your music component safely and easily. <br />
              The most innovative keeps your right for own creation.
              <br />
              <br /> Copyright 2023@
            </div>
          </div>

          <div className={styles.aboutuslink}>
            <div className={styles.linkfloor}>
              <div className={styles.linkelement}>Home</div>
              <div className={styles.linkelement}>Chain</div>
            </div>
            <div className={styles.linkfloor}>
              <div className={styles.linkelement}>Tracks</div>
              <div className={styles.linkelement}>Sign up</div>
            </div>
            <div className={styles.linkfloor}>
              <div className={styles.linkelement}>Artworks</div>
            </div>
            <div className={styles.linkfloor}>
              <div className={styles.linkelement}>Upload</div>
            </div>
          </div>
          <div className={styles.aboutuscontact}>
            <div className={styles.aboutuscontacttext}>
              Contact us and we’ll get <br />
              back to you within 24 hours. <br />
              <br />
              O2 Building 82 Uisadang- <br />
              daero Seoul, Korea <br />
              <br />
              alvin@hanul.io
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
