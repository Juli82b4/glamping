import React from "react";
import Navigation from "../navigation/Navigation";
import styles from "./pageheader.module.css";

function PageHeader({ image, title } = {}) {
  let imageUrl = "url(src/assets/images/stay.jpg)";
  if (image) {
    imageUrl = "url(" + image + ")";
  }

  return (
    <>
      <div className={styles.hero} style={{ backgroundImage: imageUrl }}>
        <div className={styles.navigationWrapper}>
          <Navigation />
        </div>

        <div className={styles.overlay}>
          <div className={styles.content}>
            <h1 className={styles.title}>{title}</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default PageHeader;
