import styles from "./Misc.module.css";

export const HeadLine = ({ children }) => {
  return (
    <>
      <div className={styles.HeadLine}>
        <h1>{children}</h1>
      </div>
    </>
  );
};

export default HeadLine;
