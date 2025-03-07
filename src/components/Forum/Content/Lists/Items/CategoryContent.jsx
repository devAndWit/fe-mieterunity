import { useEffect, useState, useContext } from "react";

import { AuthContext } from "../../../../../contexts/AuthContext.jsx";
import { ForumContext } from "../../../../../contexts/ForumContext.jsx";
import { useMongoGet } from "../../../../../hooks/useMongoGet.js";

function CategoryContent() {
  const { backendUrl } = useContext(AuthContext);
  const { categoryId, setCategoryId } = useContext(ForumContext);

  const { data, loading, error } = useMongoGet(
    `${backendUrl}/categories/${categoryId}`
  );

  console.log(data);

  useEffect(() => {}, []);

  if (loading) {
    return <p>Laden...</p>;
  }

  if (error) {
    return <p>Fehler: {error.message}</p>;
  }

  if (data) {
    return (
      <>
        <div>{categoryId}</div>
        {}
      </>
    );
  }
  return null;
}

export default CategoryContent;
