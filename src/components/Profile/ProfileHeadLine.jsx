import styles from "./Profile.module.css";

export const ProfileHeadLine = ({ headline }) => {
  
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
