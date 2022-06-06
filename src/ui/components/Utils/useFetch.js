import { useState, useEffect } from "react";
const useFetch = (
  BASE_URL = "",
  error_msg = "An error has ocurred getting the data"
) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(BASE_URL);
        if (!response.ok) {
          throw new Error(`Http status ${response.status}`);
        }
        const data = await response.json();
        setData(data.data);
      } catch (error) {
        console.error(error.message);
        setError(error_msg);
      }
      setLoading(false);
    };
    fetchData();
  }, [BASE_URL]);
  return { data, loading, error };
};

export default useFetch;
