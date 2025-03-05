import styles from "./Profile.module.css";

export const ProfileContentContainer = ({ title, children }) => {
  return (
    <>
      <section className={styles.section}>
        <div className={styles.dataContainer}>
          <h2>{title}</h2>
          {children}
        </div>
      </section>
    </>
  );
};

export default ProfileContentContainer;
