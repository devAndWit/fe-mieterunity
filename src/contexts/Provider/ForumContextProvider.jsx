import { useContext, useState, useMemo } from "react";
import { AuthContext } from "../AuthContext";
import { ForumContext } from "../ForumContext";

export const ForumContextProvider = ({ children }) => {
  const { backendUrl, user } = useContext(AuthContext);
  const userId = user?._id || null;

  const [locationData, setLocationData] = useState({ data: null, loading: false, error: null });
  const [categoryData, setCategoryData] = useState({ data: null, loading: false, error: null });
  const [threadData, setThreadData] = useState({ data: null, loading: false, error: null });
  const [messageData, setMessageData] = useState({ data: null, loading: false, error: null });

  const [currentItems, setCurrentItems] = useState({
    location: null,
    category: null,
    thread: null,
    message: null,
  });

  const value = useMemo(() => ({
    userId,
    backendUrl,
    locations: locationData,
    setLocations: (data) => setLocationData(data),
    locationLength: locationData.data?.length || 0,
    currentLocation: currentItems.location,
    setCurrentLocation: (location) => setCurrentItems((prev) => ({ ...prev, location })),
    categories: categoryData,
    setCategories: (data) => setCategoryData(data),
    categoryLength: categoryData.data?.length || 0,
    currentCategory: currentItems.category,
    setCurrentCategory: (category) => setCurrentItems((prev) => ({ ...prev, category })),
    threads: threadData,
    setThreads: (data) => setThreadData(data),
    threadLength: threadData.data?.length || 0,
    currentThread: currentItems.thread,
    setCurrentThread: (thread) => setCurrentItems((prev) => ({ ...prev, thread })),
    messages: messageData,
    setMessages: (data) => setMessageData(data),
    messagesLength: messageData.data?.length || 0,
    currentMessage: currentItems.message,
    setCurrentMessage: (message) => setCurrentItems((prev) => ({ ...prev, message })),
  }), [userId, backendUrl, locationData, categoryData, threadData, messageData, currentItems]);

  return <ForumContext.Provider value={value}>{children}</ForumContext.Provider>;
};

export default ForumContextProvider;