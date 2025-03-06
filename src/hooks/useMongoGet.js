import { useState, useEffect, useMemo } from "react";
import axios from "axios";

function useMongoGet(url, params = {}) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const paramsString = useMemo(() => JSON.stringify(params), [params]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await axios.get(url, { params });
        setData(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, paramsString, params]); // paramsString und params hinzugefügt

  return { data, loading, error };
}

export default useMongoGet;
