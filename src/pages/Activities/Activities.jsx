import React from "react";
import styles from "./activities.module.css";
import Footer from "../../components/footer/Footer";
import PageHeader from "../../components/PageHeader/PageHeader";
import Header from "../../components/header/Header";
import useFetchActivities from "../../hooks/fetchActivities";

const activities = () => {
  const activities = useFetchActivities();

  return (
    <>
      <PageHeader title="Aktiviteter" />
      <Header
        header="Ingen skal kede sig hos Gitte"
        text="Glamping er mere end blot en indkvartering - det er en mulighed for at fordybe dig i naturen og skabe minder, der varer livet ud. Uanset om du foretrækker en eventyrlig kanotur, en oplysende naturvandring, hjertevarm samvær omkring bålet, smagfulde oplevelser som vinsmagning eller morgenyoga, der giver dig indre ro og balance i naturens skød - vil vi hos Gittes Glamping imødekomme dine ønsker."
        showImage={false}
      />
      <div className={styles.activityList}>
        {activities.activities.map((activity) => (
          <div key={activity._id} className={styles.activityItem}>
            <div className={styles.activityHeader}>
              <h1>{activity.title}</h1>
              <p>{activity.description}</p>
              <p>
                {activity.date} {activity.time}
              </p>
            </div>
            <div className={styles.activityImage}>
              <img src={activity.image} alt={activity.image} />
            </div>
            <div className={styles.activityFooter}>
              <a href={"http://localhost:5173/activity/" + activity._id}>
                Læs Mere
              </a>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default activities;
