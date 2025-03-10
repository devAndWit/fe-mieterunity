import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";

import { BACKEND_URL } from "../../../../../const/urls.js";
import { ForumContext } from "../../../../../contexts/ForumContext.jsx";

import styles from "./Tile.module.css";

const Location = () => {
  const {
    userId,
    setLocations,
    currentLocation,
    setCurrentLocation,
    setCurrentThread,
    locations,
  } = useContext(ForumContext);

  const { isLoading: loading, error } = useQuery({
    queryKey: ["location", userId],
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

  const handleChange = (event) => {
    const selectedId = event.target.value;
    console.log("Selected ID:", selectedId);
    setCurrentLocation(selectedId); // Update current location
    setCurrentThread(null);
  };

  /*------------------------------------------------*/
  // Output
  /*------------------------------------------------*/

  if (loading) {
    return <div className={styles.Tile}>Daten werden geladen...</div>;
  }

  if (error) {
    return (
      <div className={styles.Tile}>
        Fehler beim Laden der Standorte: {error.message}
      </div>
    );
  }

  if (locations) {
    return (
      <>
        <div className={styles.Tile}>
          <div className={styles.SelectWrapper}>
            <label htmlFor="idLocation">Standort:</label>

            <select
              className={styles.TilesSelect}
              name="location"
              id="idLocation"
              value={currentLocation || ""}
              onChange={handleChange}
            >
              <option value="" disabled>
                Bitte wählen Sie einen Standort
              </option>
              {Array.isArray(locations) &&
                locations.map((location, index) => {
                  const name = `${location.street} ${location.houseNr}, ${location.city}`;
                  return (
                    <option key={index} value={location._id}>
                      {name}
                    </option>
                  );
                })}
            </select>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className={styles.Tile}>
        <div>Keine Standorte verfügbar.</div>;
      </div>
    </>
  );
};

export default Location;
