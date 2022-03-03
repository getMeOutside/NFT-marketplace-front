import BidItem from '../components/BidItem';
import LiveAuctions from '../components/LiveAuctions';
import { 
  Box,
  Text, 
  Input, 
  InputGroup, 
  InputLeftElement,
  InputRightElement } from '@chakra-ui/react';
import {ReactComponent as SearchIcon} from '../components/icons/Search.svg';
import {ReactComponent as VoiceIcon} from '../components/icons/Voice.svg';
import styles from '../styles/home.module.scss';

function App() {
  return (
    <Box>
      <Text className={styles.title}>
        <p className={styles.firstLine}>Discover, collect, and sell</p>
        <p className={styles.secondLine}>Your Digital Art</p>
      </Text>

      <Box className={styles.content}>
        <InputGroup bg='#F0F0F0' borderRadius='8px' my='22px'>
          <InputLeftElement pointerEvents='none'>
            <SearchIcon />
          </InputLeftElement>
          <Input className={styles.input} placeholder='Search items, collections, and accounts' />
          <InputRightElement children={<VoiceIcon color='green.500' />} />
        </InputGroup>

        <BidItem />
        <LiveAuctions />
      </Box>
    </Box>
  );
}

export default App;
