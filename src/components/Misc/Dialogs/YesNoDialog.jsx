import { useEffect } from "react";
import styles from "./Dialogs.module.css";

export const YesNoDialog = ({ title, question, closeDialog }) => {
  const handleClick = (result) => {
    closeDialog(result);
  };
  return (
    <>
      <div className={`${styles.YesNoDialog} blue`}>
        <div className={styles.DialogContainer}>
          <div className={styles.DialogTitle}>{title}</div>
          <div className={styles.DialogText}>{question}</div>
          <div className={styles.DialogControl}>
            <button
              onClick={() => {
                handleClick(true);
              }}
            >
              Ja
            </button>
            <button
              onClick={() => {
                handleClick(false);
              }}
            >
              Nein
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default YesNoDialog;

// const [isShowDialog, setIsShowDialog] = useState(false);
//   const [title, setTitle] = useState("");
//   const [question, setQuestion] = useState("");

//   useEffect(() => {
//     setTitle("Cola");
//     setQuestion("Ist die Cola noch verschlossen?");
//   }, [question, title]);

//   const showDialog = () => {
//     setIsShowDialog(true);
//   };

//   const closeDialog = (result) => {

//     setIsShowDialog(false);
//   };

// {isShowDialog ? (
//     <>
//       <YesNoDialog
//         title={title}
//         question={question}
//         closeDialog={closeDialog}
//       />
//     </>
//   ) : (
//     <button
//       onClick={() => {
//         showDialog();
//       }}
//     >
//       Dialog öffnen
//     </button>
//   )}
