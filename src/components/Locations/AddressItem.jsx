import { useContext } from "react";
import { IoTrash } from "react-icons/io5";
import { AuthContext } from "../../contexts/AuthContext";
import styles from "./AddressItem.module.css";

export const AddressItem = (val) => {
  const { _id, street, houseNr, postalCode, city, country } = val.props;
  const { user } = useContext(AuthContext);

  // const currentUser = users.find((user) => user._id === userId);
  console.log("AUTH:::: user", user);
  const updateUserLocations = async (newLocation) => {
    try {
      const response = await fetch(`http://localhost:8000/users/${user._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          locations: [...user.locations, newLocation],
        }),
      });

      if (response.ok) {
        const updatedUser = await response.json();
        console.log("User locations updated successfully:", updatedUser);
        return updatedUser;
      } else {
        throw new Error("Failed to update user locations");
      }
    } catch (error) {
      console.error("Error updating user locations:", error);
      throw error;
    }
  };

  const removeUserLocation = async (locationIdToRemove) => {
    try {
      console.log("locations", user.locations);
      console.log("removeUserLocation", locationIdToRemove);
      const response = await fetch(`http://localhost:8000/users/${user._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          locations: user.locations.filter(
            (location) => location !== locationIdToRemove
          ),
        }),
      });

      if (response.ok) {
        const updatedUser = await response.json();
        console.log("User location removed successfully:", updatedUser);
        return updatedUser;
      } else {
        throw new Error("Failed to remove user location");
      }
    } catch (error) {
      console.error("Error removing user location:", error);
      throw error;
    }
  };

  const handleClick = () => {
    updateUserLocations(_id);
  };

  const handleRemove = () => {
    removeUserLocation(_id);
  };

  return (
    <div className={styles.addressItem}>
      <div className={styles.addressItemContent} onClick={handleClick}>
        <div>
          {street} {houseNr}, {postalCode} {city}, {country}
        </div>
      </div>
      <div className={styles.addressItemControl}>
        <button
          className={styles.removeUserLocation}
          type="button"
          value={_id}
          onClick={handleRemove}
        >
          <IoTrash size={"1.5rem"} color="red" />
        </button>
      </div>
    </div>
  );
};

export default AddressItem;
