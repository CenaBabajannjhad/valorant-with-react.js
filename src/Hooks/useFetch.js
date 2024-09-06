import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true; // To prevent updating state after unmount

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        };

        const result = await response.json();
        if (isMounted) {
          setData(result.data); // Set data if component is still mounted
          setError(null); // Clear any previous errors
        };

      } catch (err) {
        if (isMounted) {
          setError(err.message); // Set error if component is still mounted
        }
      } finally {
        if (isMounted) {
          setLoading(false); // Always stop loading once fetch completes
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false; // Cleanup on component unmount
    };
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
