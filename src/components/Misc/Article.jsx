import styles from "./Misc.module.css";

export const Article = ({ children }) => {
  return (
    <>
      <article className={styles.Article}>{children}</article>
    </>
  );
};

export default Article;
