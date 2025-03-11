import { useCategories } from "../../../../hooks/useCategories";
import styles from "./Dialogs.module.css";

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

  console.log("categories", categories);

  return (
    <>
      <select
        className={styles.CategoryDropdown}
        name="categoryId"
        onChange={handleChange}
      >
        <option className={styles.CategoryDropdownOption} value="" disabled>
          Kategorieauswahl
        </option>
        {categories.map((category) => (
          <option
            className={styles.CategoryDropdownOption}
            key={category._id}
            value={category._id}
          >
            {category.title}
          </option>
        ))}
      </select>
    </>
  );
};
