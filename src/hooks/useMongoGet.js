import { useState, useMemo, useEffect } from "react";
import axios from "axios";

export function useMongoGet(method, url, params = {}) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  console.log("UseMongoGet - Init");
  const queryParams = useMemo(() => JSON.stringify(params), [params]);

  useEffect(() => {
    if (method == "GET") {
      async function fetchData() {
        console.log("GETTING URL : ", url);

        if (!url || url === null || url === "null") {
          console.log("ERROR: get null as param");
          setData(null);
          setError({ msg: "keine Url" });
          setLoading(false);
          return [data, loading, error];
        }

        ("Start Get Process");
        setLoading(true);
        setError(null);

        try {
          const response = await axios.get(url, {
            params: queryParams,
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
      fetchData();
    }
  }, [url, queryParams]);

  return { data, loading, error };
}

export default useMongoGet;
