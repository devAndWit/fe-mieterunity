import { useState, useMemo } from "react";
import axios from "axios";

function useMongoDelete(url, params = {}) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const paramsString = useMemo(() => JSON.stringify(params), [params]);

  const deleteData = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.delete(url, { params });
      setData(response.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, deleteData };
}

export default useMongoDelete;
