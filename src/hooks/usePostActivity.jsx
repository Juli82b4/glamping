import { useState } from "react";

// Custom hook to handle activity submission
const usePostActivity = ({
  title = "",
  date = "",
  time = "",
  description = "",
  image = "",
}) => {
  // State variables to manage loading, error, and success states
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  // Function to post activity data
  const postActivityData = async () => {
    const url = "http://localhost:3042/activity"; // URL to post activity data
    const activityData = { title, date, time, description }; // Activity data object
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzhmZjA1ZTZiZjJjOTI3ZjgwODIwNzkiLCJlbWFpbCI6Imp1bGl5YUBtZWRpYWNvbGxlZ2UuZGsiLCJuYW1lIjoiQSIsInBpY3R1cmUiOiJodHRwOi8vbG9jYWxob3N0OjMwNDIvdXNlcnMvbm8tdXNlci5qcGciLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3Mzc0OTQxMDMsImV4cCI6MTczNzU4MDUwM30.uiNQhw8nDb-DBCmn87n-Vq497Ah9mnX3L1yVFAbxS88"; // Hardcoded token

    try {
      setLoading(true); // Set loading state to true
      setError(null); // Reset error state
      setSuccess(false); // Reset success state

      // Make a POST request to the server with activity data
      const response = await fetch(url, {
        method: "POST", // HTTP method to use for the request
        headers: {
          "Content-Type": "application/json", // Specify the content type as JSON
          Authorization: `Bearer ${token}`, // Add Bearer token to headers for authentication
        },
        body: JSON.stringify(activityData), // Convert the activity data object to a JSON string for the request body
      });

      // Check if the response is not OK
      if (!response.ok) {
        throw new Error("Failed to post activity data"); // Throw an error if the request failed
      }

      setSuccess(true); // Set success state to true if the request was successful
    } catch (err) {
      setError(err.message); // Set error state with the error message
    } finally {
      setLoading(false); // Set loading state to false
    }
  };

  return { loading, error, success, postActivityData }; // Return state variables and function
};

export default usePostActivity;
