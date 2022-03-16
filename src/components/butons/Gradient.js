import styles from '../../styles/buttons.module.scss';

const GradientBtn = ({text, action}) => {
  return (
    <button className={styles.placeBid}>{text}</button>
  );
}

export default GradientBtn;