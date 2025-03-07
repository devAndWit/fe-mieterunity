import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { AuthContext } from "../../../../../contexts/AuthContext.jsx";
import { DashboardContext } from "../../../../../contexts/DashboardContext.jsx";

import styles from "./Tiles.module.css";

function Category() {
  const { backendUrl, user } = useContext(AuthContext);

  const [categoryList, setCategoryList] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const { activeTile, setActiveTile } = useContext(DashboardContext);
  const { categoryId, setCategoryId } = useContext(DashboardContext);

  const handleChangeId = (e) => {
    setActiveTile(1);
    setCategoryId(e.target.dataset.id);
  };

  useEffect(() => {
    // API-Daten holen
    const loadCategories = async () => {
      try {
        const response = await axios.get(`${backendUrl}/categories`, {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response && response.data && response.status === 200) {
          setCategoryList(response.data.data || null);
        } else if (response && response.status === 304) {
          // 304: Daten nicht geändert, verwende den aktuellen Zustand
          setIsLoading(false);
          return;
        } else {
          setIsError(true);
        }
      } catch (error) {
        console.error("Error fetching Category: ", error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    loadCategories();
  }, [activeTile, setActiveTile, backendUrl]);

  console.log("isLoading");
  if (isLoading) {
    return <div>Data Loading....</div>;
  }

  console.log("isError");
  if (isError) {
    return <div>Error at Category Loading</div>;
  }
  if (!isLoading && !isError) {
    return (
      <div className={styles.Tiles}>
        <h2>Kategorien</h2>
        <ul>
          {categoryList.map((value, index) => (
            <li key={index} data-id={value._id} onClick={handleChangeId}>
              {value.title}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Category;
