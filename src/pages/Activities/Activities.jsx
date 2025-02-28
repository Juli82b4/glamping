import React from "react";
import styles from "./activities.module.css"; // Import CSS module for styling
import Footer from "../../components/footer/Footer"; // Footer component
import PageHeader from "../../components/PageHeader/PageHeader"; // Page header component
import Header from "../../components/header/Header"; // Header component for the page
import useFetchActivities from "../../hooks/fetchActivities"; // Custom hook to fetch activities data

const activities = () => {
  const activities = useFetchActivities(); // Fetch activities data using the custom hook

  return (
    <>
      {/* Display a page header with a title */}
      <PageHeader title="Aktiviteter" />

      {/* Render the main header section with descriptive text */}
      <Header
        header="Ingen skal kede sig hos Gitte"
        text="Glamping er mere end blot en indkvartering - det er en mulighed for at fordybe dig i naturen og skabe minder, der varer livet ud. Uanset om du foretrækker en eventyrlig kanotur, en oplysende naturvandring, hjertevarm samvær omkring bålet, smagfulde oplevelser som vinsmagning eller morgenyoga, der giver dig indre ro og balance i naturens skød - vil vi hos Gittes Glamping imødekomme dine ønsker."
        showImage={false}
      />

      {/* Render the list of activities */}
      <div className={styles.activityList}>
        {activities.activities.map((activity) => (
          <div key={activity._id} className={styles.activityItem}>
            {/* Render activity header with title, description, date, and time */}
            <div className={styles.activityHeader}>
              <h1>{activity.title}</h1>
              <p>{activity.description}</p>
              <p>
                {activity.date} {activity.time}
              </p>
            </div>

            {/* Render activity image */}
            <div className={styles.activityImage}>
              <img src={activity.image} alt={activity.image} />
            </div>

            {/* Render activity footer with a "Read More" link */}
            <div className={styles.activityFooter}>
              <a href={"http://localhost:5173/activity/" + activity._id}>
                Læs Mere
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Render the footer component */}
      <Footer />
    </>
  );
};

export default activities;
