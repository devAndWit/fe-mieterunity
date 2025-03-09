import axios from "axios";

const loadMongoGet = async (url, params) => {
  let stringyParams = JSON.stringify(params);
  
  let data = null;
  let loading = true;
  let error = null;

  try {
    const response = await axios.get(`${url}`, stringyParams, {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response && response.data && response.status === 200) {
      data = response.data || null;
    } else if (response && response.status === 304) {
      // 304: Daten nicht geändert, verwende den aktuellen Zustand
      loading = false;
      return;
    } else {
      error = new Error("Error in Loading Data", error);
    }
  } catch (err) {
    error = ("Error in Loading Data", err);
  } finally {
    loading = false;
  }
  return [data, error];
};
export default loadMongoGet;
