import styles from "./Profile.module.css";

export const ProfileHeadLine = ({ headline }) => {
  console.log("HIER");
  return (
    <>
      <section className={styles.section}>
        <div className={styles.container}>
          <span className={styles.headline}>{headline}</span>
        </div>
      </section>
    </>
  );
};
export default ProfileHeadLine;
