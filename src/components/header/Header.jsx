import React from "react";
import styles from "./header.module.css";
import gitteImage from "../../assets/images/gitte.jpg"; 
const Header = ({ header, text, showImage }) => {
  return (
    <div className={styles.container}>
      <h1>{header}</h1>
      <p>{text}</p>

      {showImage && (
        <>
          <img
            className={styles.gittePic}
            src={gitteImage}
            alt="Gitte"
          />
          <button className={styles.headerButton}>SE VORES OPHOLD</button>
        </>
      )}
    </div>
  );
};

export default Header;
