import AuthContext from "./../../../../contexts/AuthContext.jsx";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import ThreadItem from "./Items/ThreadItem.jsx";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import useMongoGet from "./../../../../hooks/useMongoGet.js";
import useMongoPost from "./../../../../hooks/useMongoPost.js";
import ForumContext from "../../../../contexts/ForumContext.jsx";
import { BACKEND_URL } from "../../../../const/urls.js";

import styles from "./List.module.css";

export const ThreadList = () => {
  const { currentThread, userId } = useContext(ForumContext);

  const [getUrl, setGetUrl] = useState(null);
  const [postUrl, setPostUrl] = useState(null);
  const [msgList, setMsgList] = useState(null);
  const [postResponse, setPostResponse] = useState(null);

  const [message, setMessage] = useState();
  const [fromUserId, setFromUserId] = useState(userId);
  const [thread, setThread] = useState(currentThread);
  const [params, setParams] = useState(null);

  const {
    data: getData,
    loading: getLoading,
    error: getError,
  } = useMongoGet(getUrl);

  const {
    data: postData,
    loading: postLoading,
    error: postError,
  } = useMongoPost(postUrl, params);

  // useEffect for GET Data
  useEffect(() => {
    if (!getLoading && getError === null) {
      setMsgList(getData);
    }

    const loadThreadList = () => {
      if (!currentThread && currentThread !== null) {
        setGetUrl(
          `${BACKEND_URL}/messages/allMessagesFromThreadId/${currentThread}`
        );
        return;
      }
      setGetUrl(null);
      console.log("CURRENT_THREAD : ", currentThread);
    };

    loadThreadList();
  }, [getData, getLoading, getError, setMsgList, getUrl, currentThread]);

  // useEffect for Post Data
  useEffect(() => {
    const sendingMessage = () => {
      if (postUrl === null || postUrl == "") return;

      if (!postLoading && postError === null && !postUrl) {
        setPostResponse(null);
        console.log("The Message was not sending");
        return;
      }

      if (postUrl) {
        setParams({ message, fromUserId, thread });
        console.log("Use Effect - sending Message : START", postUrl);
        setPostUrl(`${BACKEND_URL}/messages/`);
        console.log("Use Effect - sending Message : STOP", postUrl);
        setMessage("");
        setPostUrl("");
        return;
      }
    };
    sendingMessage();
  }, [
    postLoading,
    postError,
    setPostResponse,
    postUrl,
    message,
    fromUserId,
    thread,
  ]);

  console.log("MessageList : ", msgList || "Liste ist leer");

  const handleInput = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Message: ", message);
    console.log("From: ", fromUserId);
    console.log("Thread: ", thread);

    const isValid = message.trim();

    if (isValid) {
      setPostUrl(`${BACKEND_URL}/messages`);
      return;
    }
    console.log("message contain nothing");
  };

  /*-------------------------------------------------
  
      Output

  ---------------------------------------------------*/

  return (
    <>
      <div className={styles.ThreadList}>
        <div className={styles.ThreadListHeader}>
          <div className={styles.ThreadListHeaderItem}>
            <span>Test</span>
          </div>
          <div className={styles.ThreadListHeaderItem}>
            <span>
              <FaArrowRightArrowLeft />
            </span>
          </div>
          <div className={styles.ThreadListHeaderItem}>
            <span>Test</span>
          </div>
        </div>
        <div className={styles.ThreadListContent}>
          {msgList &&
            msgList.map((msg) => <ThreadItem key={msg._id} message={msg} />)}
        </div>
      </div>
      <div className={styles.ThreadInputWrapper}>
        <form action="" onSubmit={handleSubmit}>
          <input
            type="text"
            name="message"
            value={message}
            onChange={handleInput}
            placeholder="Nachricht eingeben"
          />
          <button type="submit" disabled={postLoading}>
            {postLoading ? "senden..." : "senden"}
          </button>
        </form>
      </div>
    </>
  );
};

export default ThreadList;
