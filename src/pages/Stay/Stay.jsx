import React from "react";
import PageHeader from "../../components/PageHeader/PageHeader";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import styles from "./stay.module.css";
import useFetchStays from "../../hooks/fetchStays";

function Stay() {
  const stays = useFetchStays(); // Use the custom hook to fetch stays data

  return (
    <>
      <PageHeader title="Vores ophold" />
      {/* Render a static header section with a title and description */}
      <Header
        header="Vi har ophold til enhver smag" // Header title
        text="Vores glampingophold er skabt til at tilbyde en kombination af eventyr og afslapning. Det er den ideelle flugt fra byens støj og stress, og det perfekte sted at genoplade batterierne i en naturskøn indstilling. Book dit ophold i dag og giv dig selv lov til at fordybe dig i naturen og nyde luksus i det fri. Vi ser frem tid at byde dig velkommen til en oplevelse fyldt med komfort, eventyr og skønhed."
        showImage={false} // Do not display an image in the header
      />
      {/* Render a list of stays */}
      <div className={styles.stayList}>
        {stays.stays.map((stay) => (
          <div key={stay._id}>
            {/* Display the stay's title, number of persons, and price */}
            <div className={styles.stayHeader}>
              <h1>{stay.title}</h1> {/* Title of the stay */}
              <label>{stay.numberOfPersons} personer</label>{" "}
              {/* Number of people the stay accommodates */}
              <label>Fra {stay.price},-</label> {/* Price of the stay */}
            </div>

            {/* Display an image for the stay */}
            <div className={styles.stayImage}>
              <img src={stay.image} alt={stay.image} />
              {/* Stay image with alt text */}
            </div>

            {/* Provide a link to view more details about the stay */}
            <div className={styles.stayFooter}>
              <a
                className={styles.btn}
                href={"http://localhost:5173/stay/" + stay._id}
              >
                Læs Mere
              </a>{" "}
              {/* Link to detailed stay page */}
            </div>
          </div>
        ))}
      </div>
      <Footer /> {/* Render the footer section at the bottom */}
    </>
  );
}

export default Stay;
