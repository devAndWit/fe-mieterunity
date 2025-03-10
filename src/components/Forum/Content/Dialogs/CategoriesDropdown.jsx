import { useCategories } from "../../../../hooks/useCategories";

export const CategoryDropdown = ({ handleChange }) => {
  const { data: categories, isLoading, error } = useCategories();

  // const handleChange = (event) => {
  //   const selectedId = event.target.value;
  //   setCategoryId(selectedId);
  // };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading categories: {error.message}</div>;
  }

  console.log("categories", categories)

  return (
    <select name="categoryId" onChange={handleChange}>
      <option value="" disabled>
        Select a category
      </option>
      {categories.map((category) => (
        <option key={category._id} value={category._id}>
          {category.title}
        </option>
      ))}
    </select>
  );
};

