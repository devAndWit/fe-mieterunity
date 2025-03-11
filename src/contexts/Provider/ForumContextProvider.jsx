import { useContext, useMemo, useState } from "react";
import { AuthContext } from "../AuthContext";
import { ForumContext } from "../ForumContext";


export const ForumContextProvider = ({ children }) => {
  const { backendUrl, user } = useContext(AuthContext);
  const userId = user?._id || null;

  const [directMsgData, setDirectMsgData] = useState({
    fromId: null,
    toId: null,
  });

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

      directMsg: directMsgData,

      setDirectMsgFromId: (fromId) =>
        setDirectMsgData((prev) => ({ ...prev, fromId })),
      setDirectMsgToId: (toId) =>
        setDirectMsgData((prev) => ({ ...prev, toId })),

      setUsers: (data) => setUserData(data),
      userLength: locationData.data?.length || 0,
      locations: locationData,
      setLocations: (data) => setLocationData(data),
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
    [
      userId,
      backendUrl,
      locationData,
      userData,
      categoryData,
      threadData,
      messageData,
      currentItems,
      currentTaskData,
      reload,
      setReload,
      directMsgData,
    ]
  );

  return (
    <ForumContext.Provider value={value}>{children}</ForumContext.Provider>
  );
};

export default ForumContextProvider;
