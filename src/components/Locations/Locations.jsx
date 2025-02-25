import { useState } from "react";

import AddressList from "./AddressList.jsx";

export const Locations = () => {
  const [showNewEntry, setShowNewEntry] = useState(false);

  function handleNewEntryClick() {
    setShowNewEntry(!showNewEntry);
  }

  return (
    <main>
      <h1>Standort</h1>
      <div>
        <h2>Adressliste:</h2>
        <AddressList />
      </div>

      <div>
        <button onClick={handleNewEntryClick}>+ neue Adresse</button>

        <form action="" className={showNewEntry ? "" : "hidden"}>
          <p>
            <label htmlFor="street">Straße:</label>
            <input type="text" name="street" id="street" />
          </p>

          <p>
            <label htmlFor="number">Hausnummer:</label>
            <input type="text" name="number" id="number" />
          </p>

          <p>
            <label htmlFor="postalcode">Postleitzahl:</label>
            <input type="text" name="postalcode" id="postalcode" />
          </p>

          <p>
            <label htmlFor="city">Ort:</label>
            <input type="text" name="city" id="city" />
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
            <button type="submit">Speichern</button>
            <button type="submit">Close</button>
          </p>
        </form>
      </div>
    </main>
  );
};

export default Locations;
