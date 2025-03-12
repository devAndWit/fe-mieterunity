import { useAddresses } from "../../mock/useUserAddress.js";
import { AddressItem } from "./AddressItem.jsx";

import styles from "./AddressList.module.css";

export const AddressList = () => {
  const { data: addresses} = useAddresses();

  console.log("useAddresses", addresses)

  if (!addresses) {
    return null
  }

  return (
    <div className={styles.AddressList}>
      <i>gefundene Adressen: {addresses.data.length}</i>

      {addresses.data.map((val, ind) => (
        <AddressItem key={ind} props={val} />
      ))}
    </div>
  );
};

export default AddressList;
