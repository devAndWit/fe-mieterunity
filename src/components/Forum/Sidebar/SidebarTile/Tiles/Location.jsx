import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";

import { ForumContext } from "../../../../../contexts/ForumContext.jsx";
import { BACKEND_URL } from "../../../../../const/urls.js";

import styles from "./Tiles.module.css";

export const LocationTile = () => {
  const {
    userId,
    setLocations,
    currentLocation,
    setCurrentLocation,
    locations,
  } = useContext(ForumContext);

  const {
    data: dataResponse,
    isLoading: loading,
    error,
  } = useQuery({
    // queryKey: ["some-query"],
    queryKey: [userId],
    queryFn: async () => {
      const response = await fetch(
        `${BACKEND_URL}/users/allUserInformationsById/${userId}`
      );
      const result = await response.json();

      if (result.data) {
        setLocations(result.data.locations);
      }
      return result;
    },
  });

  console.log("LOCATIONS:", locations);

  const handleChange = (id) => {
    if (id !== currentLocation) {
      setCurrentLocation(id);
    }
  };

  /*------------------------------------------------*/
  // Output
  /*------------------------------------------------*/

  if (loading) {
    return <div>Daten werden geladen...</div>;
  }

  if (error) {
    return <div>Fehler beim Laden der Standorte: {error.message}</div>;
  }

  if (locations) {
    return (
      <>
        <div className={styles.SelectWrapper}>
          {console.log(locations)}
          <>
            <label htmlFor="idLocation">Standort:</label>

            <select name="location" id="idLocation">
              {Array.isArray(locations) &&
                locations.map((location, index) => {
                  // console.log("LOCATION", location);
                  const name = `${location.street} ${location.houseNr}, ${location.city}`;
                  return (
                    <option
                      key={index}
                      onClick={() => handleChange(location._id)}
                      style={{ cursor: "pointer" }}
                    >
                      {name}
                    </option>
                  );
                })}
            </select>
          </>
        </div>
      </>
    );
  }

  return <div>Keine Standorte verfügbar.</div>;
};

export default LocationTile;
