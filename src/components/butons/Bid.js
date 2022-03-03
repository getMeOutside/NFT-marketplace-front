import { 
  Flex, 
  Box, 
  Text
} from '@chakra-ui/react';
import styles from '../../styles/buttons.module.scss';

const BidBtn = () => {
  return (
    // <button className={styles.sold}>Sold for <b>2.00 ETH</b></button>
    <button className={styles.active}>
      <Box className={styles.boxLeft}> 
        <span className={styles.activeDot}>•</span>
        <Box className={styles.textLeft}>
          <Text>Current bid</Text>
          <Text>2.00 ETH</Text>
        </Box>
      </Box>
      <Box className={styles.boxRight}>
        <Text>Current bid</Text>
        <Text>2.00 ETH</Text>
      </Box>
    </button>
  );
}

export default BidBtn;