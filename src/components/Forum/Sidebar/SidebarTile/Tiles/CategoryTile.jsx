import { useEffect, useState, useContext } from "react";

import useMongoGet from "../../../../../hooks/useMongoGet.js";

import { ForumContext } from "../../../../../contexts/ForumContext.jsx";

import styles from "./Tiles.module.css";

function Category() {
  return (
    <div className={styles.Tiles}>
      <h2>Kategorien</h2>
      <ul>
        <li>Kategorie</li>
      </ul>
    </div>
  );
}

export default Category;
