import { useEffect, useContext, useState, useCallback } from "react";
import { ForumContext } from "../../../../../contexts/ForumContext.jsx";
import { useMongoGet } from "./../../../../../hooks/useMongoGet.js";

import styles from "./Tiles.module.css";

export const LocationTile = () => {
  const { setLocations, locations, backendUrl, userId } =
    useContext(ForumContext);
  const [url, setUrl] = useState(null);

  const { data, loading, error } = useMongoGet(url);

  const checkId = useCallback(() => {
    if (userId) {
      setUrl(`${backendUrl}/users/allUserInformationsById/${userId}`);
    }
  }, [userId, backendUrl]);

  useEffect(() => {
    checkId();
  }, [checkId]);

  useEffect(() => {
    if (!loading && error === null && data && data.locations) {
      console.log(data);
      setLocations(data);
    }
  }, [data, loading, error, setLocations]);

  if (loading) {
    return <div>Daten werden geladen...</div>;
  }

  if (error) {
    return <div>Fehler beim Laden der Standorte: {error.message}</div>;
  }

  if (locations && locations.data) {
    return (
      <div>
        Standorte geladen:
        <ul>
          {locations.data.map((location, index) => (
            <li key={index}>{location.name}</li>
          ))}
        </ul>
      </div>
    );
  }

  return <div>Keine Standorte verfügbar.</div>;
};

export default LocationTile;
