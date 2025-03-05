import styles from "./Misc.module.css";

export const Section = ({ children }) => {
  return (
    <>
      <section className={styles.Section}>{children}</section>
    </>
  );
};

export default Section;
