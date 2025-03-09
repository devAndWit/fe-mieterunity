import { useState, useEffect } from "react";
import axios from "axios"; // Empfohlen für bessere Fehlerbehandlung und Konfiguration

export function useMongoGet(url, queryParams = {}) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(url, { params: queryParams }); // Verwendung von axios mit Query-Parametern
        setData(response.data); // Daten aus der axios-Antwort extrahieren
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [url, JSON.stringify(queryParams)]); // Abhängigkeiten für useEffect

  return { data, loading, error };
}

export default useMongoGet;
