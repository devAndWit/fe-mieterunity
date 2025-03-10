import { useMutation } from "@tanstack/react-query";
import { useContext, useState } from "react";
import { BACKEND_URL } from "../../../../const/urls.js";
import { ForumContext } from "../../../../contexts/ForumContext.jsx";
import { CategoryDropdown } from '../../Content/Dialogs/CategoriesDropdown.jsx';

const NewThread = () => {
  const { userId, currentLocation } = useContext(ForumContext);

  const [formData, setFormData] = useState({
    addressId: currentLocation,
    categoryId: "",
    createdFromUserId: userId,
    title: "",
    closedAt: "",
  });

  // Define the mutation function
  const createThreadMutation = useMutation({
    mutationFn: async (data) => {
      const response = await fetch(`${BACKEND_URL}/threads`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error("Failed to create thread");
      }
      return response.json();
    },
    onSuccess: (data) => {
      console.log("Thread created successfully:", data);
      alert("Thread created successfully!");
      // Optionally clear the form or refetch queries
      setFormData({
        addressId: "",
        categoryId: "",
        createdFromUserId: "",
        title: "",
        closedAt: "",
      });
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
    createThreadMutation.mutate(formData); // Trigger the mutation with form data
  };

  console.log("Form Data:", formData);

  return (
    <form onSubmit={handleSubmit}>
      {/* Address ID */}
      {/* <div>
        <label htmlFor="addressId">Address ID:</label>
        <input
          type="text"
          id="addressId"
          name="addressId"
          placeholder={currentLocation}
          value={currentLocation}
          onChange={handleChange}
          required
        />
      </div> */}

      {/* Category ID */}
      <CategoryDropdown handleChange={handleChange} />
      {/* <div>
        <label htmlFor="categoryId">Category ID:</label>
        <input
          type="text"
          id="categoryId"
          name="categoryId"
          value={formData.categoryId}
          onChange={handleChange}
          required
        />
      </div> */}

      {/* Created From User ID */}
      {/* <div>
        <label htmlFor="createdFromUserId">Created From User ID:</label>
        <input
          type="text"
          id="createdFromUserId"
          name="createdFromUserId"
          value={formData.createdFromUserId}
          onChange={handleChange}
          required
        />
      </div> */}

      {/* Title */}
      <div>
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

      {/* Closed At (optional) */}
      {/* <div>
        <label htmlFor="closedAt">Closed At (optional):</label>
        <input
          type="datetime-local"
          id="closedAt"
          name="closedAt"
          value={formData.closedAt}
          onChange={handleChange}
        />
      </div> */}

      {/* Submit Button */}
      <button type="submit" disabled={createThreadMutation.isLoading}>
        {createThreadMutation.isLoading ? "Creating..." : "Create Thread"}
      </button>

      {/* Error Message */}
      {createThreadMutation.isError && (
        <div style={{ color: "red" }}>
          Error: {createThreadMutation.error.message}
        </div>
      )}
    </form>
  );
};

export default NewThread;
