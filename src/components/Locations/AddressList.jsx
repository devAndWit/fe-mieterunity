import { AddressItem } from "./AddressItem.jsx";
import { addressData } from "../../mock/addressData.js";

import styles from "./AddressList.module.css";

export const AddressList = () => {
  return (
    <div className={styles.AddressList}>
      {addressData.map((val, ind) => (
        <AddressItem key={ind} props={val} />
      ))}
    </div>
  );
};

export default AddressList;
