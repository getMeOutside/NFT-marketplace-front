import Card from './Card';
import {
  Box, 
  Text
} from '@chakra-ui/react';
import BidBtn from './butons/Bid';
import styles from '../styles/auctions.module.scss';

const LiveAuctions = () => {
  return (
    <Box mb='89px'>
      <Box className={styles.boxTitle}>
        <span className={styles.activeDot}>•</span>
        <Text className={styles.cardTitle}>
          Live auctions
        </Text>
      </Box>

      <Card />
      <BidBtn />

      <Card />
      <BidBtn />
    </Box>
  );
};

export default LiveAuctions;