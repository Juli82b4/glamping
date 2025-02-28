import React from "react";
import styles from "./header.module.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

import tentImage from "../../assets/images/tent.jpg";
import stayImage from "../../assets/images/stay.jpg";
import tentLightImage from "../../assets/images/tentlights.jpg";
import weekednImage from "../../assets/images/weekend.jpg";

const Header = ({ header, text, showImage }) => {
  const images = [tentImage, stayImage, tentLightImage, weekednImage];
  return (
    <div className={styles.container}>
      <h1>{header}</h1>
      <p>{text}</p>

      {showImage && (
        <>
          <Swiper
            modules={[Autoplay]}
            slidesPerView={1}
            autoplay={{ delay: 1000, disableOnInteraction: false }}
            loop={true}
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <img className={styles.slide} src={image} />
              </SwiperSlide>
            ))}
          </Swiper>

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
