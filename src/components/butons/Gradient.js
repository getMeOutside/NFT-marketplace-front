import styles from '../../styles/buttons.module.scss';
import { useNavigate } from 'react-router-dom';

const GradientBtn = ({text, action}) => {
  const navigate = useNavigate();
  return (
    <button className={styles.placeBid}>{text}</button>
  );
}

export default GradientBtn;