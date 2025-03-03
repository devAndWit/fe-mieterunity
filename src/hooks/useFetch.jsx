import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [fetchData, setFetchData] = useState(null);
  const [fetchLoading, setFetchLoading] = useState(true);
  const [fetchError, setFetchError] = useState(null);

  useEffect(() => {
    const fetch = async () => {
      setFetchLoading(true);

      try {
        const response = await axios.get(url);
        setFetchData(response.data);
        console.log("fetchDATA : ", fetchData);
        setFetchError(null);
      } catch (err) {
        setFetchError(err);
        setFetchData(null);
      } finally {
        setFetchLoading(false);
      }
    };

    fetch();
  }, [url, fetchData]);

  return { fetchData, fetchLoading, fetchError };
};

export default useFetch;
