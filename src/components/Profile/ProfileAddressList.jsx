import styles from "./Profile.module.css";

export const ProfileAddressList = ({ addressData }) => {
  const addresses = addressData;
  return (
    <div className={styles.ProfileAddressList}>
      <ul>
        {addresses.map((value, index) => (
          <li key={"addressKey_" + index} className={styles.ProfileAddressItem}>
            <span>
              {value.street} {value.houseNumber}, {value.postalCode}{" "}
              {value.city}
            </span>
            <button>löschen</button>
          </li>
        ))}
      </ul>
      <button>neue Adresse hinzufügen</button>
    </div>
  );
};

export default ProfileAddressList;
