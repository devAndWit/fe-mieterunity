import styles from "./Profile.module.css";

export const ProfilEntry = ({ name, value }) => {
  return (
    <>
      <p className={styles.test}>
        <span className={styles.name}>{name}:</span>
        <span className={styles.value}>{value}</span>
      </p>
    </>
  );
};

export default ProfilEntry;
