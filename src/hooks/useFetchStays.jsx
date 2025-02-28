import { useCallback, useEffect, useState } from "react";
import { useAuthContext } from "../context/useAuthContext";
import Swal from "sweetalert2";

const useFetchStays = () => {
  const [stays, setStays] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { token } = useAuthContext();

  // Fetch all stays
  const fetchStays = useCallback(async () => {
    setError(null);
    setIsLoading(true);
    try {
      const response = await fetch("http://localhost:3042/stays");
      const data = await response.json();
      setStays(data.data);
    } catch (error) {
      setError(error.message);
      console.error("Error fetching stays:", error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Refetch function
  const refetch = useCallback(() => {
    fetchStays();
  }, [fetchStays]);

  // Create stay
  const createStay = async (formData) => {
    try {
      const response = await fetch("http://localhost:3042/stay", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });
      if (!response.ok) {
        throw new Error("Error creating stay");
      }

      const result = await response.json();
      return result;
    } catch (error) {
      console.error("Error creating stay:", error);
      throw error;
    }
  };

  // Update stay
  const updateStay = async (formData) => {
    try {
      const response = await fetch("http://localhost:3042/stay", {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });
      if (!response.ok) {
        throw new Error("Error updating stay");
      }

      const result = await response.json();
      return result;
    } catch (error) {
      console.error("Error updating stay:", error);
      throw error;
    }
  };

  // Delete stay
  const deleteStay = async (params) => {
    const result = await Swal.fire({
      title: "Er du sikker?",
      text: "Du kan ikke fortryde denne handling",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Ja, slet",
      cancelButtonText: "Annuller",
    });

    if (!result.isConfirmed) {
      return;
    }

    await fetch(`http://localhost:3042/stay/${params}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    /* Filter all the stays without the matching ID. */
    const filteredArray = stays.filter((stay) => stay._id !== params);

    setStays(filteredArray);
  };

  // Fetch stay by ID
  const fetchStayById = async (id) => {
    setError(null);
    setIsLoading(true);

    try {
      const response = await fetch(`http://localhost:3042/stay/${id}`);

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Failed to fetch stay: ${errorText}`);
      }

      const stay = await response.json();
      return stay.data[0];
    } catch (error) {
      setError(error.message);
      console.error("Error fetching stay:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchStays();
  }, []);

  return {
    stays,
    createStay,
    deleteStay,
    setStays,
    fetchStays,
    fetchStayById,
    updateStay,
    isLoading,
    refetch,
    error,
  };
};

export { useFetchStays };
