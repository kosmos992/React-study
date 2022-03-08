import ReactDOM from 'react-dom';
import Card from './Card';
import Button from './Button';

import styles from './ErrorModal.module.css';

const Backdrop = ({ onConfirm }) => (
  <div className={styles.backdrop} onClick={onConfirm} />
);

const ModalOverlay = ({ title, message, onConfirm }) => (
  <Card className={styles.modal}>
    <header className={styles.header}>
      <h2>{title}</h2>
    </header>
    <div className={styles.content}>
      <p>{message}</p>
    </div>
    <footer className={styles.actions}>
      <Button onClick={onConfirm}>Confirm</Button>
    </footer>
  </Card>
);

const ErrorModal = props => (
  <>
    {ReactDOM.createPortal(
      <Backdrop onConfirm={props.onConfirm} />,
      document.getElementById('backdrop-root')
    )}
    {ReactDOM.createPortal(
      <ModalOverlay
        title={props.title}
        message={props.message}
        onConfirm={props.onConfirm}
      />,
      document.getElementById('overlay-root')
    )}
  </>
);

export default ErrorModal;
