import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


function CategoryContent() {
  const { categoryId } = useParams();
  const [categoryData, setCategoryData] = useState(null);

  useEffect(() => {
    // Hier eine echte API-URL verwenden
    fetchCategoryData(categoryId).then((data) => setCategoryData(data));
  }, [categoryId]);

  return (
    <div>
      <h2>Category {categoryId}</h2>
      {categoryData ? (
        <p>{categoryData.description}</p>
      ) : (
        <p>Loading category data...</p>
      )}
    </div>
  );
}

export default CategoryContent;
