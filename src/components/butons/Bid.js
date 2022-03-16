import { 
  Flex, 
  Box, 
  Text
} from '@chakra-ui/react';
import styles from '../../styles/buttons.module.scss';

const BidBtn = () => {
  return (
    // <Box className={styles.sold}>Sold for <b>2.00 ETH</b></Box>
    <Box className={styles.active}>
      <Box className={styles.boxLeft}> 
        <Box>
          <Flex align="center" lineHeight='1rem'>
            <span className={styles.activeDot}>•</span>
            <Text>Current bid</Text>
          </Flex>
          <Text pl='8px' className={styles.bid}>2.00 ETH</Text>
        </Box>
      </Box>
      <Box className={styles.boxRight}>
        <Text lineHeight='1rem'>Ending in</Text>
        <Text className={styles.bid}>27m 30s</Text>
      </Box>
    </Box>
  );
}

export default BidBtn;