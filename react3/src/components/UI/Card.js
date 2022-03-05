import styles from './Card.module.css';

const Card = ({ givenStyle, children }) => {
  // console.log(givenStyle);
  return <div className={`${styles.card} ${givenStyle}`}>{children}</div>;
};

export default Card;
