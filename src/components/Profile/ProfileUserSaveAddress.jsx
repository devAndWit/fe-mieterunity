import { useState } from "react";
import styles from "./Profile.module.css";

const ProfileUserSaveAddress = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const [formData, setFormData] = useState({
    street: "",
    houseNr: "",
    postalCode: "",
    city: "",
    country: "",
  });

  const handleSave = (e) => {
    console.log("test");
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    
    setFormData((prevValues) => ({ ...prevValues, [name]: value }));
  };

  if (!isOpen) {
    return <button onClick={openModal}>Modal öffnen</button>;
  }

  return (
    <div className={styles.SaveAddress}>
      <div className={styles.FormFrame}>
        <h2>neue Adresse hinzufügen</h2>
        <div className={styles.FormContainer}>
          <span>Straße:</span>
          <input
            type="text"
            name="street"
            id="street"
            placeholder="Straße"
            onChange={handleInput}
            value={formData.street}
          />
          <span>Hausnummer:</span>
          <input
            type="text"
            name="houseNr"
            id="houseNr"
            placeholder="Hausnummer"
            onChange={handleInput}
            value={formData.houseNr}
          />
          <span>Postleitzahl:</span>
          <input
            type="text"
            name="postalCode"
            id="postalCode"
            placeholder="Postleitzahl"
            onChange={handleInput}
            value={formData.postalCode}
          />
          <span>City:</span>
          <input
            type="text"
            name="city"
            id="city"
            placeholder="Stadt/Region"
            onChange={handleInput}
            value={formData.city}
          />
          <span>Country:</span>
          <input
            type="text"
            name="country"
            id="country"
            placeholder="Land"
            value="Deutschland"
            disabled
          />
        </div>
        <div className={styles.FormControl}>
          <button>speichern</button>
          <button onClick={closeModal}>abbrechen</button>
        </div>
      </div>
    </div>
  );
};

export default ProfileUserSaveAddress;
