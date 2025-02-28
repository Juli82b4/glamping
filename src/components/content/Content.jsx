import React from "react";
import styles from "./content.module.css";

const Content = () => {
  return (
    <>
      <div className={styles.contentContainer}>
        <h1 className={styles.contentHeading}>Vores Gæster udtaler</h1>

        <div className={styles.tesimonies}>
          <div className={styles.tesimony}>
            <h3 className={styles.tesimonyHeader}>Lise, 34 år</h3>
            <p className={styles.tesimonySubline}>
              Har været på romantisk getaway
            </p>

            <div className={styles.tesimonyContent}>
              Min kæreste og jeg fejrede vores årsdag med et ophold ved Gittes
              Glamping. Det vil vi helt sikkert gøre igen. personalet var
              virkelig søde og servicemindede, og maden og stemningen var i top.
            </div>
          </div>

          <div className={styles.tesimony}>
            <h3 className={styles.tesimonyHeader}>Johanne, 22 år</h3>
            <p className={styles.tesimonySubline}>Har været på weekendtur</p>

            <div className={styles.tesimonyContent}>
              Jeg blev inviteret med af min veninde. Det var første gang jeg
              prøvede glamping. Jeg var lidt skeptisk, da jeg ikke bryder mig om
              at sove udenfor. Men jeg blev positivt overraket. Sengene var
              gode, og det var slet ikke ubehageligt at vågne op i teltet, som
              det ellers plejer at være i et normalt telt.
            </div>
          </div>

          <div className={styles.tesimony}>
            <h3 className={styles.tesimonyHeader}>Benjamin, 42 år</h3>
            <p className={styles.tesimonySubline}>Har været på Familiepakken</p>

            <div className={styles.tesimonyContent}>
              Top karakter til Gittes Glamping herfra! Perfekt blanding af
              primitivt og luksuriøst. Og ungerne elskede det!
            </div>
          </div>

          <div className={styles.tesimony}>
            <h3 className={styles.tesimonyHeader}>Peter, 61 år</h3>
            <p className={styles.tesimonySubline}>Har været på Weekendtur</p>

            <div className={styles.tesimonyContent}>
              Jeg havde en rigtig hyggelig weekend, og maden er i særdeleshed en
              oplevelse værd. Min hustru synes kanoturen var rigtig idyllisk.
              Jeg er dog ikke så vild med at sejle.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
