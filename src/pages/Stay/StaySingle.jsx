import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"; // Hook to access current URL location
import PageHeader from "../../components/PageHeader/PageHeader"; // Page header component
import Header from "../../components/header/Header"; // Header component
import Footer from "../../components/footer/Footer"; // Footer component
import styles from "./stay.module.css"; // CSS module for styling
import useFetchStays from "../../hooks/fetchStays"; // Custom hook for fetching stay data

function StaySingle() {
  // Use useLocation hook to get the current URL location
  const location = useLocation();
  
  // Extract the stay ID from the URL by splitting the path
  const urlId = location.pathname.split("/")[2];
  
  // Use the custom hook to fetch stay details based on the extracted ID
  const { stays, loading, error } = useFetchStays({ id: urlId });

  // Show loading message while the data is being fetched
  if (loading) {
    return <div>Loading...</div>;
  }

  // If an error occurred while fetching data, display the error message
  if (error) {
    return <div>Error: {error}</div>;
  }

  // If no stays are found, show a message indicating that no stay data was found for the given ID
  if (!stays || stays.length === 0) {
    return <div>No stay found for the given ID.</div>;
  }

  return (
    <>
      {/* Page header with image and title from the first stay object */}
      <PageHeader image={stays[0].image} title={stays[0].title} />
      
      {/* Header section with title and description of the stay */}
      <Header
        header={stays[0].title}
        text={stays[0].description}
        showImage={false} // No image displayed in the header
      />
      
      {/* Footer section */}
      <Footer />
    </>
  );
}

export default StaySingle;
