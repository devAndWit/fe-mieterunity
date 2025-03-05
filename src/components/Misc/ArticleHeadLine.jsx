import styles from "./Misc.module.css";

export const ArticleHeadLine = ({ children }) => {
  return (
    <>
      <div className={styles.ArticleHeadLine}>
        <h2>{children}</h2>
      </div>
    </>
  );
};

export default ArticleHeadLine;
