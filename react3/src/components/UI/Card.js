import styles from './Card.module.css';

const Card = ({ className, children }) => {
  // console.log(className);
  return <div className={`${styles.card} ${className}`}>{children}</div>;
};

export default Card;
