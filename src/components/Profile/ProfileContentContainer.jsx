import styles from "./Profile.module.css";

export const ProfileContentContainer = ({ title, children }) => {
  return (
    <>
      <section className={styles.profileSection}>
        <article className={styles.profileArticle}>
          <div className={styles.sectionContentText}>
            <h2>{title}</h2>
            {children}
          </div>
        </article>
      </section>
    </>
  );
};

export default ProfileContentContainer;
