import { useState } from 'react';
import axios from 'axios';

function useMongoUpdate(url, params = {}) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const updateData = async (updateBody) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.put(url, updateBody, { params }); // oder axios.patch, je nach API
      setData(response.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, updateData };
}

export default useMongoUpdate;