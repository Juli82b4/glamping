import { useCallback, useEffect, useState } from "react";
import { useAuthContext } from "../../context/useAuthContext";
import Swal from "sweetalert2";

const useFetchReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { token } = useAuthContext();

  // Fetch all reviews
  const fetchReviews = useCallback(async () => {
    setError(null);
    setIsLoading(true);
    try {
      const response = await fetch("http://localhost:3042/reviews");
      const data = await response.json();
      setReviews(data.data);
    } catch (error) {
      setError(error.message);
      console.error("Error fetching reviews:", error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Refetch function
  const refetch = useCallback(() => {
    fetchReviews();
  }, [fetchReviews]);

  // Create review
  const createReview = async (formData) => {
    try {
      const response = await fetch("http://localhost:3042/review", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });
      if (!response.ok) {
        throw new Error("Error creating review");
      }

      const result = await response.json();
      return result;
    } catch (error) {
      console.error("Error creating review:", error);
      throw error;
    }
  };

  // Update review
  const updateReview = async (formData) => {
    try {
      const response = await fetch("http://localhost:3042/review", {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });
      if (!response.ok) {
        throw new Error("Error updating review");
      }

      const result = await response.json();
      return result;
    } catch (error) {
      console.error("Error updating review:", error);
      throw error;
    }
  };

  // Delete review
  const deleteReview = async (params) => {
    const { isConfirmed } = await Swal.fire({
      title: "Er du sikker?",
      text: "Du kan ikke fortryde denne handling",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ja, slet den",
    });

    if (!isConfirmed) {
      return;
    }
    
    await fetch(`http://localhost:3042/review/${params}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    /* Filter all the reviews without the matching ID. */
    const filteredArray = reviews.filter((review) => review._id !== params);

    setReviews(filteredArray);
  };

  // Fetch review by ID
  const fetchReviewById = async (id) => {
    setError(null);
    setIsLoading(true);

    try {
      const response = await fetch(`http://localhost:3042/review/${id}`);

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Failed to fetch review: ${errorText}`);
      }

      const review = await response.json();
      return review.data[0];
    } catch (error) {
      setError(error.message);
      console.error("Error fetching review:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  return {
    reviews,
    createReview,
    deleteReview,
    setReviews,
    fetchReviews,
    fetchReviewById,
    updateReview,
    isLoading,
    refetch,
    error,
  };
};

export { useFetchReviews };
