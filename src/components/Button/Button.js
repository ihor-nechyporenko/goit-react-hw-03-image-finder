import styles from './Button.module.css';

const Button = ({ onClick }) => (
  <div className={styles.wrapper}>
    <button type="button" className={styles.button} onClick={onClick}>
      Load more
    </button>
  </div>
);

export default Button;
