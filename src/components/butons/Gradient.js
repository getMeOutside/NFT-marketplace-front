import styles from '../../styles/buttons.module.scss';
import { useNavigate } from 'react-router-dom';

const GradientBtn = ({text, action}) => {
  const navigate = useNavigate();
  return (
    <button onClick={() => navigate('product/id')} className={styles.placeBid}>{text}</button>
  );
}

export default GradientBtn;