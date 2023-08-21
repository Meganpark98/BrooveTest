import React, { useState } from 'react';
import styles from "../../styles/Navbar.module.css";

export default function SubNavbar() {
  const [showUploadOptions, setShowUploadOptions] = useState(false);

  const handleUploadMouseEnter = () => {
    setShowUploadOptions(true);
  };

  const handleUploadMouseLeave = () => {
    setShowUploadOptions(false);
  };
  return (
    <nav className={styles.subnavbar}>
      <div className={styles.subnavbarcontents}>
        <div className={styles.contents}>
          <a href="/tracks">
            <div className={styles.contentstext}>Tracks</div>
          </a>
        </div>
        <div className={styles.contents}>
          <a href="/artworks">
            <div className={styles.contentstext}>Artworks</div>
          </a>
        </div>


        <div
          className={`${styles.contents} ${styles.uploadContainer}`}
          onMouseEnter={handleUploadMouseEnter}
          onMouseLeave={handleUploadMouseLeave}
        >
          <div className={styles.uploadButton}>

              <div className={styles.contentstext}>Upload</div>

          </div>
          {showUploadOptions && (
            <div className={styles.uploadOptions}>
              <a href="/trackupload">Tracks</a>
            </div>
            
          )}
                    {showUploadOptions && (
            <div className={styles.uploadOptions}>
              <a href="/artworkupload">Artworks</a>
            </div>
            
          )}
        </div>

        {/* <div className={styles.contents}>
          <a href="/upload">
            <div className={styles.contentstext}>Upload</div>
          </a>
        </div> */}
        
        
        <div className={styles.contents}>
          <a href="/chain">
            <div className={styles.contentstext}>Chain</div>
          </a>
        </div>
      </div>
    </nav>
  );
}
