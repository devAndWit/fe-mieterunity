import PropTypes from "prop-types";
import { useCategories } from "../../../../hooks/useCategories";
import styles from "./Dialogs.module.css";

export const CategoryDropdown = ({ handleChange }) => {
  const { data: categories, isLoading, error } = useCategories();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading categories: {error.message}</div>;
  }

  console.log("categories", categories);

  return (
    <select
      className={styles.CategoryDropdown}
      name="categoryId"
      onChange={handleChange}
      defaultValue="" // Default value set to an empty string
    >
      {/* Placeholder option */}
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
  );
};

// Define prop types for validation
CategoryDropdown.propTypes = {
  handleChange: PropTypes.func.isRequired, // Ensure handleChange is a required function
};
