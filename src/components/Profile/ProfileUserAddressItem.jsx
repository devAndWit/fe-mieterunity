import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext.jsx";
import { useUser } from "../../hooks/useUser.jsx";
import styles from "./Profile.module.css";

export const ProfileUserAddressItem = () => {
  const { backendUrl, user } = useContext(AuthContext);
  const userId = user._id;

  const [editMode, setEditMode] = useState(false);
  const [firstName, setFirstName] = useState("And");
  const [lastName, setLastName] = useState("Wit");

  const [oldValue, setOldValue] = useState({
    oldFirstName: "",
    oldLastName: "",
  });

  const handleEdit = (e) => {
    setOldValue({
      oldFirstName: document.getElementById("idFirstName").value,
      oldLastName: document.getElementById("idLastName").value,
    });

    setEditMode(true);
  };

  const handleAbort = (e) => {
    setFirstName(oldValue.oldFirstName);
    setLastName(oldValue.oldLastName);

    setEditMode(false);
  };

  const handleSave = async (e) => {
    const dataForUpdate = {
      firstName: firstName.trim(),
      lastName: lastName.trim(),
    };

    const update = async () => {
      try {
        const response = await axios.put(
          `${backendUrl}/users/${userId}`,
          dataForUpdate,
          {
            withCredentials: true,
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        
        if (!response) {
          throw Error("Error: No Response from Update");
        }
        return true;
      } catch (err) {
        console.log(err, "Error: Error in Updateprocess.");
      }
      return false;
    };

    console.log(await update());
    setEditMode(false);
    
  };

  useEffect(() => {}, [firstName, lastName, editMode, oldValue]);

  return (
    <>
      <div className={styles.data}>
        <div className={styles.datarow}>
          <input
            type="text"
            name="firstName"
            id="idFirstName"
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
            placeholder="Vorname"
            disabled={!editMode}
          />
        </div>
        <div className={styles.datarow}>
          <input
            type="text"
            name="lastName"
            id="idLastName"
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
            placeholder="Nachname"
            disabled={!editMode}
          />
        </div>
        <div className={styles.datacontrol}>
          {editMode ? (
            <>
              <button name="save" onClick={handleSave}>
                speichern
              </button>
              <button name="abort" onClick={handleAbort}>
                abbrechen
              </button>
            </>
          ) : (
            <>
              <button name="edit" onClick={handleEdit}>
                bearbeiten
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default ProfileUserAddressItem;
