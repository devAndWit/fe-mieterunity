import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useContext, useState } from "react";
import { BACKEND_URL } from "../../../../const/urls.js";
import { ForumContext } from "../../../../contexts/ForumContext.jsx";
import { CategoryDropdown } from "../../Content/Dialogs/CategoriesDropdown.jsx";

import styles from "./Dialogs.module.css";

const NewThread = () => {
  const {
    userId,
    currentLocation,
    setCurrentThread,
    setCurrentTask,
    setReload,
  } = useContext(ForumContext);

  const [formData, setFormData] = useState({
    addressId: currentLocation,
    categoryId: "",
    createdFromUserId: userId,
    title: "",
    closedAt: "",
  });

  const queryClient = useQueryClient();

  // Define the mutation function
  const createThreadMutation = useMutation({
    mutationFn: async (data) => {
      const response = await fetch(`${BACKEND_URL}/threads`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        credentials: "include",
      });
      if (!response.ok) {
        throw new Error("Failed to create thread");
      }
      return response.json();
    },
    onSuccess: (data) => {
      console.log("Thread created successfully:", data);
      // Optionally clear the form or refetch queries
      setFormData({
        addressId: "",
        categoryId: "",
        createdFromUserId: "",
        title: "",
        closedAt: "",
      });
      console.log("NEW THREAD:", data._id);
      queryClient.invalidateQueries(["threads"]); // Invalidate the 'threads' query
    },
    onError: (error) => {
      console.error("Error creating thread:", error);
      alert(`Error creating thread: ${error.message}`);
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!currentLocation) {
      alert("Es ist kein Standort ausgesucht!");
    }
    console.log(currentLocation);

    // createThreadMutation.mutate(formData); // Trigger the mutation with form data
  };

  console.log("Form Data:", formData);

  return (
    <>
      <div className={styles.NewThread}>
        <form className={styles.NewThreadForm} onSubmit={handleSubmit}>
          <div className={styles.FormRow}>
            <div className={styles.SelectWrapper}></div>
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
            <button type="submit" disabled={createThreadMutation.isLoading}>
              {createThreadMutation.isLoading
                ? "Creating..."
                : "Neues Thema hinzufügen"}
            </button>
          </div>

          {createThreadMutation.isError && (
            <div style={{ color: "red" }}>
              Error: {createThreadMutation.error.message}
            </div>
          )}
        </form>
      </div>
    </>
  );
};

export default NewThread;
