import { useState, useMemo, useEffect } from "react";
import axios from "axios";

function useMongoPost(postUrl, params) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // console.log("UseMongoPost - Init");
  // console.log("UseMongoPost - URL", postUrl);
  // console.log("UseMongoPost - Params", params);

  const queryParams = useMemo(() => JSON.stringify(params), [params]);

  useEffect(() => {
    async function postData() {
      console.log("POST_URL : ", postUrl);

      if (!postUrl || postUrl === null || postUrl === "null") {
        console.log("ERROR: get null as param");
        setData(null);
        setError({ msg: "keine Url" });
        setLoading(false);
        return [data, loading, error];
      }

      ("Start Post Process");
      setLoading(true);
      setError(null);

      try {
        const response = await axios.post(postUrl, {
          params,
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response.status >= 200 && response.status < 300) {
          setData(response.data);
        } else {
          // Unerwarteter Statuscode
          setError({
            message: `Unerwarteter Statuscode: ${response.status}`,
            status: response.status,
          });
        }
      } catch (err) {
        if (err.response) {
          // Server hat mit einem Fehlerstatuscode geantwortet
          setError({
            message: `Serverfehler: ${err.response.status} - ${
              err.response.data.message || "Keine detaillierte Fehlermeldung"
            }`,
            status: err.response.status,
          });
        } else if (err.request) {
          // Keine Antwort vom Server erhalten
          setError({
            message: "Keine Antwort vom Server erhalten",
            status: null,
          });
        } else {
          // Fehler beim Erstellen der Anfrage
          setError({
            message: `Fehler beim Senden der Anfrage: ${err.message}`,
            status: null,
          });
        }
      } finally {
        setLoading(false);
      }
    }
    postData();
  }, [postUrl, queryParams]);

  return { data, loading, error };
}

export default useMongoPost;
