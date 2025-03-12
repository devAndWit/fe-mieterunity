import { useContext, useState } from "react";
import { BACKEND_URL } from "../../../../const/urls.js";
import { ForumContext } from "../../../../contexts/ForumContext.jsx";
import { CategoryDropdown } from "../../Content/Dialogs/CategoriesDropdown.jsx";
import styles from "./Dialogs.module.css";

const NewThread = () => {
  const { userId, currentLocation, categoryId } = useContext(ForumContext);

  const [formData, setFormData] = useState({
    addressId: currentLocation,
    categoryId: categoryId,
    createdFromUserId: userId,
    title: "",
    closedAt: "",
  });

  const isValidForm = !!formData.title && !!formData.categoryId && !!formData.addressId && !!formData.createdFromUserId;
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!currentLocation) {
      alert("Es ist kein Standort ausgesucht!");
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(`${BACKEND_URL}/threads`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
        credentials: "include",
      });

      if (!response.ok) {
        throw new Error("Failed to create thread");
      }

      const data = await response.json();
      // console.succes("Thread created successfully:", data);
      setFormData({
        addressId: "",
        categoryId: "",
        createdFromUserId: "",
        title: "",
        closedAt: "",
      });
      // You might want to add some state update or callback here to refresh the thread list
    } catch (error) {
      console.error("Error creating thread:", error);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.NewThread}>
      <form className={styles.NewThreadForm} onSubmit={handleSubmit}>
        <div className={styles.FormRow}>
          <label htmlFor="categoryId">Kategorie:</label>
          <CategoryDropdown handleChange={handleChange} />
        </div>

        <div className={styles.FormRow}>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.FormRow}>
          <button type="submit" disabled={isLoading || !isValidForm}>
            {isLoading ? "Creating..." : "Neues Thema hinzufügen"}
          </button>
        </div>

        {error && <div style={{ color: "red" }}>Error: {error}</div>}
      </form>
    </div>
  );
};

export default NewThread;
