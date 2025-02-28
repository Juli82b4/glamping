import { useState } from "react";

// Custom hook to handle form submission
const usePostForm = ({ name = "", email = "", inquire = "", message = "" }) => {
  // State variables to manage loading, error, and success states
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  // Function to post form data
  const postFormData = async () => {
    const url = "http://localhost:3042/contact"; // URL to post form data
    const formData = { name, email, inquire, message }; // Form data object

    try {
      setLoading(true); // Set loading state to true
      setError(null); // Reset error state
      setSuccess(false); // Reset success state

      // Make a POST request to the server with form data
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      // Check if the response is not OK
      if (!response.ok) {
        throw new Error("Failed to post form data"); // Throw an error if the request failed
      }

      setSuccess(true); // Set success state to true if the request was successful
    } catch (err) {
      setError(err.message); // Set error state with the error message
    } finally {
      setLoading(false); // Set loading state to false after the request completes
    }
  };

  // Return the state variables and the postFormData function
  return {
    postFormData,
    loading,
    error,
    success,
  };
};

export default usePostForm;
