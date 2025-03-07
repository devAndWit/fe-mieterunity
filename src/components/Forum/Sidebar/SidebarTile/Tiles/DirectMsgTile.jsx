import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../../../../contexts/AuthContext.jsx";
import { ForumContext } from "../../../../../contexts/ForumContext.jsx";
import { IoMdPerson } from "react-icons/io";

import styles from "./Tiles.module.css";

export const DirectMessages = () => {
  const [userList, setUserList] = useState([
    {
      _id: "67c72be2fdb058bd3a36f9a2",
      locations: ["67c72a19fcb9c2629f3efe4a", "67c72a8afcb9c2629f3efe54"],
      threads: [],
      role: "user",
      isFirstLogin: true,
      email: "andwit@test1050.de",
      lastLogin: null,
      isAccountDeleted: false,
      tokens: [],
      createdAt: "2025-03-04T16:35:46.706Z",
      updatedAt: "2025-03-04T21:45:15.891Z",
      __v: 0,
      firstName: "Andre",
      lastName: "Witt",
      username: "andwit",
    },
    {
      _id: "67ca1abbe83a664fdddda867",
      locations: [],
      threads: [],
      role: "user",
      isFirstLogin: true,
      email: "bahman@test.de",
      lastLogin: null,
      isAccountDeleted: false,
      tokens: [],
      createdAt: "2025-03-06T21:59:23.117Z",
      updatedAt: "2025-03-06T21:59:23.117Z",
      __v: 0,
      username: "bahpou",
    },
    {
      _id: "67ca1b1ae83a664fdddda86f",
      locations: [],
      threads: [],
      role: "user",
      isFirstLogin: true,
      email: "test@test.de",
      lastLogin: null,
      isAccountDeleted: false,
      tokens: [],
      createdAt: "2025-03-06T22:00:58.565Z",
      updatedAt: "2025-03-06T22:00:58.565Z",
      __v: 0,
      username: "tesest",
    },
  ]);

  const { activeTile, setActiveTile } = useContext(ForumContext);
  const { categoryId, setCategoryId } = useContext(ForumContext);

  const handleChangeId = (e) => {
    setActiveTile(3);
    setCategoryId(e.target.dataset.id);
  };

  return (
    <div className={styles.Tiles}>
      <h2>Direktnachrichten</h2>
      <ul>
        {userList.map(
          (
            value,
            index // Wichtig: Rückgabe mit Klammern
          ) => (
            <li key={index} data-id={value._id} onClick={handleChangeId}>
              <IoMdPerson size="2rem" />
              {value.username}
            </li>
          )
        )}
      </ul>
      
    </div>
  );
};

export default DirectMessages;
