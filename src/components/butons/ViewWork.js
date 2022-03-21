import { useNavigate } from 'react-router-dom';
import styles from '../../styles/buttons.module.scss';

const ViewWorkBtn = () => {
  const navigate = useNavigate();
  return (
    <button onClick={() => navigate('product/id')} className={styles.viewArtwork}>View Artwork</button>
  );
}

export default ViewWorkBtn;