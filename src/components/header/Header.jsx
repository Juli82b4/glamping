import React from "react";
import styles from "./header.module.css";

const Header = ({ header, text, showImage }) => {
  return (
    <div className={styles.container}>
      <h1>{header}</h1>
      <p>{text}</p>

      {showImage && (
        <>
          <img
            className={styles.gittePic}
            src="src/assets/images/gitte.jpg"
            alt="Gitte"
          />
          <button className={styles.headerButton}>SE VORES OPHOLD</button>
        </>
      )}
    </div>
  );
};

export default Header;
