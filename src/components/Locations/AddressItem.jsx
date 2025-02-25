import { IoTrash } from "react-icons/io5";
import styles from "./AddressItem.module.css";

export const AddressItem = (val) => {
  const { _id, street, houseNr, postalCode, city, country } = val.props;
  return (
    <div className={styles.addressItem}>
      <div className={styles.addressItemContent}>
        <span>
          {street} {houseNr}, {postalCode} {city}, {country}
        </span>
      </div>
      <div className={styles.addressItemControl}>
        <button value={_id}>
          <IoTrash size={"1.5rem"} color="red" />
        </button>
      </div>
    </div>
  );
};

export default AddressItem;
