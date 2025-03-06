import { useState } from "react";
import { Modal } from "./Modal/Modal.jsx";
import styles from "./Locations.module.css";

import AddressList from "./AddressList.jsx";

export const Locations = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [addressData, setAddressData] = useState({
    street: "",
    housenr: "",
    postalcode: "",
    city: "",
    country: "Germany",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;

    setAddressData((prevAddressData) => ({
      ...prevAddressData,
      [name]: value,
    }));
    
  };

  const handleSaveData = (e) => {
    e.preventDefault();
    
  };

  return (
    <main>
      <h1>Standort</h1>

      <div>
        <h2>Adressliste:</h2>
        <AddressList />
      </div>

      <div className="">
        <button
          type="button"
          onClick={() => setModalOpen(true)}
          className={styles.Button}
        >
          Open Modal
        </button>

        <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
          <h2>Neue Adresse</h2>

          <form action="">
            <p>
              <label htmlFor="street">Straße:</label>
              <input
                type="text"
                name="street"
                id="street"
                value={addressData.street}
                onChange={handleInput}
              />
            </p>

            <p>
              <label htmlFor="housenr">Hausnummer:</label>
              <input
                type="text"
                name="housenr"
                id="housenr"
                value={addressData.housenr}
                onChange={handleInput}
              />
            </p>

            <p>
              <label htmlFor="postalcode">Postleitzahl:</label>
              <input
                type="text"
                name="postalcode"
                id="postalcode"
                value={addressData.postalcode}
                onChange={handleInput}
              />
            </p>

            <p>
              <label htmlFor="city">Ort:</label>
              <input
                type="text"
                name="city"
                id="city"
                value={addressData.city}
                onChange={handleInput}
              />
            </p>

            <p>
              <label htmlFor="country">Land:</label>
              <input
                type="text"
                name="country"
                id="country"
                value="Deutschland"
                disabled
              />
            </p>

            <p>
              <button
                className={styles.Button}
                type="submit"
                onClick={handleSaveData}
              >
                Speichern
              </button>
              <button
                type="button"
                className={styles.Button}
                onClick={() => setModalOpen(false)}
              >
                Close
              </button>
            </p>
          </form>
        </Modal>
      </div>
    </main>
  );
};

export default Locations;
