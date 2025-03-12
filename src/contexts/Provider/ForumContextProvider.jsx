import { useContext, useMemo, useState } from "react";
import { AuthContext } from "../AuthContext";
import { ForumContext } from "../ForumContext";


export const ForumContextProvider = ({ children }) => {
  const { backendUrl, user } = useContext(AuthContext);
  const userId = user?._id || null;

  const [directMessageToUser, setDirectMessageToUser] = useState(null);

  const [currentThreadTitle, setCurrentThreadTitle] = useState(null);

  const [userData, setUserData] = useState({
    data: null,
    loading: false,
    error: null,
  });

  const [locationData, setLocationData] = useState({
    data: null,
    loading: false,
    error: null,
  });

  const [categoryData, setCategoryData] = useState({
    data: null,
    loading: false,
    error: null,
  });

  const [threadData, setThreadData] = useState({
    data: null,
    loading: false,
    error: null,
  });

  const [messageData, setMessageData] = useState({
    data: null,
    loading: false,
    error: null,
  });

  const [currentItems, setCurrentItems] = useState({
    location: null,
    category: null,
    thread: null,
    message: null,
    fromId: null,
    toId: null,
  });

  const [currentTaskData, setCurrentTaskData] = useState(null);

  const [reload, setReload] = useState(false);

  const value = useMemo(
    () => ({
      userId,
      backendUrl,
      users: userData,
      setUsers: (data) => setUserData(data),
      userLength: locationData.data?.length || 0,
      locations: locationData,
      setLocations: (data) => setLocationData(data),
      directMessageToUser,
      setDirectMessageToUser: (user) => setDirectMessageToUser(user),
      locationLength: locationData.data?.length || 0,
      currentLocation: currentItems.location,
      setCurrentLocation: (location) =>
        setCurrentItems((prev) => ({ ...prev, location })),
      categories: categoryData,
      setCategories: (data) => setCategoryData(data),
      categoryLength: categoryData.data?.length || 0,
      currentCategory: currentItems.category,
      setCurrentCategory: (category) =>
        setCurrentItems((prev) => ({ ...prev, category })),
      threads: threadData,
      setThreads: (data) => setThreadData(data),
      threadLength: threadData.data?.length || 0,
      currentThread: currentItems.thread,
      setCurrentThread: (thread) =>
        setCurrentItems((prev) => ({ ...prev, thread })),
      currentThreadTitle: currentThreadTitle,
      setCurrentThreadTitle: (title) => setCurrentThreadTitle(title),
      messages: messageData,
      setMessages: (data) => setMessageData(data),
      messagesLength: messageData.data?.length || 0,
      currentMessage: currentItems.message,
      setCurrentMessage: (message) =>
        setCurrentItems((prev) => ({ ...prev, message })),
      currentTask: currentTaskData,
      setCurrentTask: (data) => setCurrentTaskData(data),
      reload,
      setReload: () => setReload((prevReload) => !prevReload),
    }),
    [userId, backendUrl, userData, locationData, directMessageToUser, currentItems.location, currentItems.category, currentItems.thread, currentItems.message, categoryData, threadData, currentThreadTitle, messageData, currentTaskData, reload]
  );

  return (
    <ForumContext.Provider value={value}>{children}</ForumContext.Provider>
  );
};

export default ForumContextProvider;
