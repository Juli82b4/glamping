import React, { useState } from "react";
import PageHeader from "../../components/PageHeader/PageHeader"; // Page header component
import Footer from "../../components/footer/Footer"; // Footer component
import Header from "../../components/header/Header"; // Header component
import styles from "./contact.module.css"; // CSS module for styling
import usePostForm from "../../hooks/usePostForm"; // Custom hook for form submission

const Contact = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    name: "Besked Sendt (figma)", // Pre-filled value for name
    email: "", // User's email
    inquire: "", // Inquiry type
    message: "", // Message content
  });

  // Destructure values from the custom hook to handle form submission
  const { loading, error, success, postFormData } = usePostForm(formData);

  // Handle input field changes
  const handleChange = (e) => {
    const { name, value } = e.target; // Get field name and value
    setFormData((prevState) => ({
      ...prevState, // Keep other fields intact
      [name]: value, // Update the changed field
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    await postFormData(); // Submit form data using the custom hook
  };

  return (
    <>
      {/* Render the page header */}
      <PageHeader title="Kontakt Gitte" />
      
      {/* Main content container */}
      <div className={styles.kontaktContent}>
        {/* Header section with descriptive text */}
        <Header
          header="Vil du booke et ophold? Eller har du et spørgsmål?"
          text="Så tøv ikke med at tage kontakt til os herunder. 
        Vi bestræber os på at svare på henvendelser indenfor 24 timer, men op til ferier kan der være travlt, og svartiden kan derfor være op til 48 timer."
          showImage={false}
        />

        {/* Contact form */}
        <form onSubmit={handleSubmit} className={styles.contactForm}>
          {/* Name input field */}
          <div className={styles.formGroup}>
            <label htmlFor="navn">Navn</label>
            <input
              type="text"
              id="navn"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className={styles.formInput}
            />
          </div>

          {/* Email input field */}
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className={styles.formInput}
            />
          </div>

          {/* Inquiry type input field */}
          <div className={styles.formGroup}>
            <label htmlFor="henvendelse">
              Hvad drejer henvendelsen sig om?
            </label>
            <input
              type="text"
              id="henvendelse"
              name="inquire"
              value={formData.inquire}
              onChange={handleChange}
              required
              className={styles.formInput}
            />
          </div>

          {/* Message textarea */}
          <div className={styles.formGroup}>
            <label htmlFor="besked">
              Besked (skriver dato'er, hvis det drejer sig om booking)
            </label>
            <textarea
              id="besked"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              className={styles.formInput}
            ></textarea>
          </div>

          {/* Submit button */}
          <button type="submit" className={styles.submitBtn} disabled={loading}>
            Insend
          </button>
        </form>

        {/* Error and success messages */}
        {error && <p>{error}</p>}
        {success && <p>Form submitted successfully!</p>}
      </div>

      {/* Footer component */}
      <Footer />
    </>
  );
};

export default Contact;
