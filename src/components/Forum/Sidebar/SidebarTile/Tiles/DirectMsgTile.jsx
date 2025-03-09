import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../../../../contexts/AuthContext.jsx";
import { ForumContext } from "../../../../../contexts/ForumContext.jsx";
import { IoMdPerson } from "react-icons/io";
import useMongoGet from "./../../../../../hooks/useMongoGet.js";

import styles from "./Tiles.module.css";

export const DirectMessages = () => {
  const { currentLocation, backendUrl, userId } = useContext(ForumContext);

  return (
    <>
      <div className={styles.Tiles}>
        <h2>Nachrichten</h2>

        <div>{userId}</div>
      </div>
    </>
  );
};

export default DirectMessages;
