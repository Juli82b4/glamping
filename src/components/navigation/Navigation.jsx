import React, { useState } from "react";
import styles from "./navigation.module.css";

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <a href="/">
          <img src="src/assets/images/logo.png" />
        </a>
      </div>

      <div className={styles.burgerArea}>
        <button className={styles.burger} onClick={toggleMenu}>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </button>
      </div>

      <div
        className={`${styles.fullscreenMenu} ${
          isMenuOpen ? styles.showMenu : ""
        }`}
      >
        <button className={styles.closeButton} onClick={toggleMenu}>
          &times;
        </button>
        <ul className={styles.menuLinks}>
          <li>
            <a href="/stay" onClick={toggleMenu}>
              Ophold
            </a>
          </li>
          <li>
            <a href="/contact" onClick={toggleMenu}>
              Kontakt
            </a>
          </li>
          <li>
            <a href="/activities" onClick={toggleMenu}>
              Aktiviteter
            </a>
          </li>
          <li>
            <a href="/my-list" onClick={toggleMenu}>
              Min liste
            </a>
          </li>
          <li>
            <a href="/backoffice" onClick={toggleMenu}>
              Backoffice
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
