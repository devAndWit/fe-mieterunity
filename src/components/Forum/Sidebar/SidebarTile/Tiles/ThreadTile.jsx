import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import useMongoGet from "./../../../../../hooks/useMongoGet.js";

import { AuthContext } from "../../../../../contexts/AuthContext.jsx";
import { ForumContext } from "../../../../../contexts/ForumContext.jsx";

import styles from "./Tiles.module.css";

function Thread() {
  const { currentLocation, backendUrl, userId } = useContext(ForumContext);
  // const { data, loading, error } = useMongoGet(`${backendUrl}/users/${userId}`);

  return (
    <div className={styles.Tiles}>
      <h2>Themen</h2>
      <div>{}</div>
    </div>
  );
}

export default Thread;
