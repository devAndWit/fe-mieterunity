import styles from "./Profile.module.css";
const ProfileSection = (children) => {
  return (
    <section className={styles.profileSection}>
      <div className={styles.headlineContainer}>{children}</div>
    </section>
  );
};

export default ProfileSection;
