import React from "react";
import Navigation from "../navigation/Navigation";
import styles from "./hero.module.css";

function HomeHero() {
  return (
    <>
      <div
        className={styles.hero}
        style={{ backgroundImage: `url(src/assets/images/tent.jpg)` }}
      >
        <div className={styles.navigationWrapper}>
          <Navigation />
        </div>

        <div className={styles.overlay}>
          <div className={styles.content}>
            <img
              src="src/assets/images/logo.png"
              alt="Logo"
              className={styles.logo}
            />

            <h1 className={styles.title}>
              Gittes <br />
              <span>Glamping</span>
            </h1>

            <button className={styles.bookButton}>BOOK NOW</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeHero;
