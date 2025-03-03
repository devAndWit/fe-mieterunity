import styles from "./Profile.module.css";

export const ProfileHeadLine = ({ headline }) => {
  console.log("HIER");
  return (
    <>
      <section className={styles.profileSection}>
        <div className={styles.headlineContainer}>
          <span className={styles.headlineSpan}>{headline}</span>
        </div>
      </section>
    </>
  );
};
export default ProfileHeadLine;
