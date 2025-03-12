import { useContext } from 'react';
import ForumContext from '../../../../../contexts/ForumContext.jsx';
import styles from './ThreadItem.module.css';


// Beispiel: Hier könnte eine API-Aufruf zum Abrufen von Threads erfolgen
export function ThreadItem({ msg }) {
  const { users } =
    useContext(ForumContext);  
    
  const fromUser = msg.fromUserId._id;

  const user = users.find((user) => user._id === fromUser);
  console.log("user", user) 
  console.log("users", users)
  const createdAt = msg.createdAt ? new Date(msg.createdAt).toLocaleDateString() : 'Unbekannte Zeit';

  return (
    <>
      <div className={styles.thread_item}>
        <div className={styles.thread_item__infos}>
          <p>{user.firstName}</p>
          <p>{createdAt}</p>
        </div>
        <div className={styles.thread_item__message}>
          {msg.message}
        </div>
      </div>
    </>
  );
}

export default ThreadItem; // Standard-Export
