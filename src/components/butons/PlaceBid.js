import { useNavigate } from 'react-router-dom';
import styles from '../../styles/buttons.module.scss';

const PlaceBidBtn = () => {
  const history = useNavigate();
  const handleCheckAuth = () => {
    console.log(1);
    true &&  history('/login');
  }

  return (
    <button onClick={() => handleCheckAuth()} className={styles.placeBid}>Place a bid</button>
  );
}

export default PlaceBidBtn;