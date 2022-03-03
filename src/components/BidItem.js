import Card from './Card';
import { 
  Flex, 
  Box, 
  Text
} from '@chakra-ui/react';
import PlaceBidBtn from './butons/PlaceBid';
import ViewWorkBtn from './butons/ViewWork';
import styles from '../styles/bidItem.module.scss';

const BidItem = () => {
  return (
    <Box mb='89px'>
      <Card />

      <Flex alignItems='center' my='12px'>
        <Text className={styles.priceItem} fontSize='md'>Reverve Price</Text>
        <Text className={styles.priceItem} fontSize='2xl' fontWeight='bold'>1.5 ETH</Text>
        <Text className={styles.priceItem} fontSize='md' fontWeight='bold' color='#888888'>$2,683.73</Text>
      </Flex>

      <PlaceBidBtn />
      <ViewWorkBtn />
    </Box>
  );
};

export default BidItem;