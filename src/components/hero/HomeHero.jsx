import React from "react";
import Navigation from "../navigation/Navigation";
import styles from "./hero.module.css";
import logoImage from "../../assets/images/logo.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

import tentImage from "../../assets/images/tent.jpg";
import stayImage from "../../assets/images/stay.jpg";
import tentLightImage from "../../assets/images/tentlights.jpg";
import weekendImage from "../../assets/images/weekend.jpg";

const images = [tentImage, stayImage, tentLightImage, weekendImage];

function HomeHero() {
  return (
    <div className={styles.hero}>
      {/* Swiper for background images */}
      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        slidesPerView={1}
        slidesPerGroup={1}
        className={styles.swiper}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div
              className={styles.slide}
              style={{
                backgroundImage: `url(${image})`, // Apply background image to slide
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation and overlay content */}
      <div className={styles.navigationWrapper}>
        <Navigation />
      </div>
      <div className={styles.overlay}>
        <div className={styles.content}>
          <img src={logoImage} alt="Logo" className={styles.logo} />
          <h1 className={styles.title}>
            Gittes <br />
            <span>Glamping</span>
          </h1>
          <button className={styles.bookButton}>BOOK NOW</button>
        </div>
      </div>
    </div>
  );
}

export default HomeHero;
