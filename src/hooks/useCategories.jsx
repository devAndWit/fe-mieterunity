import { useQuery } from "@tanstack/react-query";
import { BACKEND_URL } from "../const/urls.js";

export const useCategories = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const response = await fetch(`${BACKEND_URL}/categories`);
      if (!response.ok) {
        throw new Error("Failed to fetch categories");
      }
      const result = await response.json();
      return result.data || [];
    },
  });

  return { data, isLoading, error };
};
