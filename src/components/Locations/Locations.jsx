import { useState } from "react";
import styles from "./Locations.module.css";
import { Modal } from "./Modal/Modal.jsx";

import AddressList from "./AddressList.jsx";

export const Locations = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [addressData, setAddressData] = useState({
    street: "",
    houseNr: "",
    postalCode: "",
    city: "",
    country: "Germany",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleInput = (e) => {
    const { name, value } = e.target;

    setAddressData((prevAddressData) => ({
      ...prevAddressData,
      [name]: value,
    }));
  };

  const handleSaveData = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("http://localhost:8000/addresses", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(addressData),
      });

      if (!response.ok) {
        throw new Error("Failed to save address");
      }

      const data = await response.json();
      console.log("Address saved successfully:", data);

      // Reset the form
      setAddressData({
        street: "",
        houseNr: "",
        postalCode: "",
        city: "",
        country: "Deutschland",
      });

      // Close the modal
      setModalOpen(false);
    } catch (error) {
      console.error("Error saving address:", error);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main>
      <h2>Themen:</h2>

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

          <form onSubmit={handleSaveData}>
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
              <label htmlFor="houseNr">Hausnummer:</label>
              <input
                type="text"
                name="houseNr"
                id="houseNr"
                value={addressData.housenr}
                onChange={handleInput}
              />
            </p>

            <p>
              <label htmlFor="postalCode">Postleitzahl:</label>
              <input
                type="text"
                name="postalCode"
                id="postalCode"
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

            {error && (
              <p className={styles.ErrorSend} style={{ color: "red" }}>
                {error}
              </p>
            )}

            <p>
              <button
                className={styles.Button}
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? "Speichern..." : "Speichern"}
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
