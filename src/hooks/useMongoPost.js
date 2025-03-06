import { useState, useMemo } from "react";
import axios from "axios";

function useMongoPost(url, params = {}) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const paramsString = useMemo(() => JSON.stringify(params), [params]);

  const postData = async (postBody) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(url, postBody, { params });
      setData(response.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, postData };
}

export default useMongoPost;
