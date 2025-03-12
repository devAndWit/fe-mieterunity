import styles from "./Modal.module.css";

export const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div id="frame" className={styles.ModalFrame}>
      <div id="dialog" className={styles.ModalContent}>
        <button onClick={onClose} className={styles.ModalCloseButton}></button>
        {children}
      </div>
    </div>
  );
};

export default { Modal };
