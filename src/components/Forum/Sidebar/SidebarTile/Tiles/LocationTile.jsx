import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { BACKEND_URL } from "../../../../../const/urls";
import { ForumContext } from "../../../../../contexts/ForumContext";

export const LocationTile = () => {
  const {
    setLocations,
    currentLocation,
    setCurrentLocation,
    locations,
    userId,
  } = useContext(ForumContext);

  const {
    data: dataResponse,
    isLoading: loading,
    error,
  } = useQuery({
    queryKey: ["some-query"],
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

  const handleClick = (id) => {
    console.log("handleClick", id);
    setCurrentLocation(id);
  };

  if (loading) {
    return <div>Daten werden geladen...</div>;
  }

  if (error) {
    return <div>Fehler beim Laden der Standorte: {error.message}</div>;
  }

  if (locations) {
    return (
      <div>
        Standorte geladen:
        <ul>
          {Array.isArray(locations) &&
            locations.map((location, index) => {
              console.log("LOCATION", location);
              const name = `${location.street} ${location.houseNr}, ${location.city}`;
              return (
                <li
                  key={index}
                  onClick={() => handleClick(location._id)}
                  style={{ cursor: "pointer" }}
                >
                  {name}
                </li>
              );
            })}
        </ul>
      </div>
    );
  }

  return <div>Keine Standorte verfügbar.</div>;
};

export default LocationTile;
