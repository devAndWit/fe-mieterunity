import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext.jsx";
import styles from "./Profile.module.css";

export const ProfileUserAddressList = (props) => {
  const { backendUrl, user } = useContext(AuthContext);
  let userId = user._id;

  const [locationList, setLocationList] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const handleClick = () => {
    props.neuRendern();
  };

  useEffect(() => {
    const loadLocations = async () => {
      try {
        const response = await axios.get(
          `${backendUrl}/users/getUserWithAddressesAndThreadsAndImages/${userId}`,
          {
            withCredentials: true,
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (response && response.data && response.status === 200) {
          setLocationList(response.data.data || null);
        } else if (response && response.status === 304) {
          // 304: Daten nicht geändert, verwende den aktuellen Zustand
          setIsLoading(false);
          return;
        } else {
          setIsError(true);
        }
      } catch (error) {
        console.error("Error fetching locations: ", error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    loadLocations();
  }, [backendUrl, userId]);

  if (isLoading) {
    return <div>Data Loading....</div>;
  }

  if (isError) {
    return (
      <div className={styles.errorcontainer}>Error at Locations Loading</div>
    );
  }

  if (!isLoading && !isError) {
    const locations = locationList.locations;
    return (
      <>
        <ul className={styles.AddressList}>
          {locations.length > 0 &&
            locations.map((value, index) => (
              <li className="" key={"location_" + index}>
                <span>{value.postalCode}&nbsp;</span>
                <span>{value.city}&nbsp;</span>
                <span>{value.street}&nbsp;</span>
                <span>{value.houseNr}&nbsp;</span>
                <button>löschen</button>
              </li>
            ))}
          <button onClick={handleClick}>Adresse hinzufügen</button>
        </ul>
      </>
    );
  }
};

export default ProfileUserAddressList;
