import { AddressItem } from "./AddressItem.jsx";
import { useUserAddress } from "../../mock/addressData.js";

import styles from "./AddressList.module.css";

export const AddressList = () => {
  const userAddresses = useUserAddress();

  return (
    <div className={styles.AddressList}>
      <i>gefundene Adressen: {userAddresses.count}</i>

      {userAddresses.addresses.map((val, ind) => (
        <AddressItem key={ind} props={val} />
      ))}
    </div>
  );
};

export default AddressList;
