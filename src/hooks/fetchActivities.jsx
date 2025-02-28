import { useEffect, useState } from "react";

const useFetchActivities = ({ id } = {}) => {
  // State to hold fetched activities
  const [activities, setActivities] = useState([]);
  
  // State to manage the loading state
  const [loading, setLoading] = useState(true);
  
  // State to store error messages, if any
  const [error, setError] = useState(null);

  // Function to fetch activities data
  const fetchActivities = async () => {
    // Default API endpoint for fetching all activities
    let url = "http://localhost:3042/activities";

    // If an `id` is provided, fetch a single activity by ID
    if (id) {
      url = `http://localhost:3042/activity/${id}`;
    }

    try {
      setLoading(true); // Set loading state to true before the request
      
      const response = await fetch(url); // Fetch data from the API

      // Check if the response is not OK (e.g., 404 or 500 status codes)
      if (!response.ok) {
        throw new Error("Failed to fetch activities");
      }

      const data = await response.json(); // Parse the JSON response
      
      // Update the activities state with the fetched data
      setActivities(data.data || []);
    } catch (err) {
      // Handle errors by setting the error state and resetting activities
      setError(err.message);
      setActivities([]);
    } finally {
      // Ensure loading state is set to false after the request is complete
      setLoading(false);
    }
  };

  // Fetch activities whenever the component mounts or `id` changes
  useEffect(() => {
    fetchActivities();
  }, [id]);

  // Return the activities, loading state, and error for use in the component
  return { activities, loading, error };
};

export default useFetchActivities;
