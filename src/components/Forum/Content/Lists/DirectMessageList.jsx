// import AuthContext from "../../../contexts/AuthContext";
import { useContext } from "react";
import styles from "./List.module.css";

export const DirectMessageList = () => {
  const { user } = useContext;

  const {
    data: dataResponse,
    isLoading: loading,
    error,
  } = useQuery({
    queryKey: [user._id],
    queryFn: async () => {
      const response = await fetch(
        // /allMessagesFromTo/:fromUserId/:toUserId
        `${BACKEND_URL}/allMessagesFromTo/:fromUserId/:toUserId`
      );
      const result = await response.json();

      if (result.data) {
        console.log("TYPEOF", typeof result.data);
        setUsers(result.data);
      }
      return result;
    },
  });

  return (
    <>
      <div className={styles.DirectMsgList}></div>
    </>
  );
};

export default DirectMessageList;
