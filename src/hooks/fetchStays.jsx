import { useEffect, useState } from "react";

// Custom hook to fetch stays data from the API
const useFetchStays = ({ id } = {}) => {
  const [stays, setStays] = useState([]); // State to store the list of stays
  const [loading, setLoading] = useState(true); // State to manage loading status
  const [error, setError] = useState(null); // State to capture any errors

  // Function to fetch stays from the API
  const fetchStays = async () => {
    let url = "http://localhost:3042/stays"; // Default API endpoint for all stays

    if (id) {
      // If an ID is provided, update the endpoint to fetch a specific stay
      url = `http://localhost:3042/stay/${id}`;
    }

    try {
      setLoading(true); // Set loading state to true before the fetch
      const response = await fetch(url); // Make the API request

      if (!response.ok) {
        // Handle HTTP errors if the response is not OK
        throw new Error("Failed to fetch stays");
      }

      const data = await response.json(); // Parse the JSON response
      setStays(data.data || []); // Update state with the fetched stays
    } catch (err) {
      setError(err.message); // Capture any error messages
      setStays([]); // Reset stays data in case of an error
    } finally {
      setLoading(false); // End the loading state
    }
  };

  // Fetch stays when the component mounts or when the ID changes
  useEffect(() => {
    fetchStays();
  }, [id]);

  // Return the stays data, loading state, and any errors
  return { stays, loading, error };
};

export default useFetchStays;
