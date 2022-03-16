import { useState, useEffect } from 'react';
import BidItem from '../components/BidItem';
import LiveAuctions from '../components/LiveAuctions';
import { 
  Box,
  Spinner, 
  Input, 
  InputGroup, 
  InputLeftElement,
  InputRightElement } from '@chakra-ui/react';
import { getProducts } from '../api/index';

import {ReactComponent as SearchIcon} from '../components/icons/Search.svg';
import {ReactComponent as VoiceIcon} from '../components/icons/Voice.svg';
import styles from '../styles/home.module.scss';

const App = () => {
  const [homeItems, setHomeItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    getProducts(10).then((res) => {
      console.log(res)
      setHomeItems(res);
      setIsLoading(false);
      console.log(homeItems);
    });
  }, []);

  return (
    <Box>
      <Box className={styles.title}>
        <p className={styles.firstLine}>Discover, collect, and sell</p>
        <p className={styles.secondLine}>Your Digital Art</p>
      </Box>

      <Box className={styles.content}>
        <InputGroup bg='#F0F0F0' borderRadius='8px' my='22px'>
          <InputLeftElement pointerEvents='none'>
            <SearchIcon />
          </InputLeftElement>
          <Input className={styles.input} placeholder='Search items, collections, and accounts' />
          <InputRightElement children={<VoiceIcon color='green.500' />} />
        </InputGroup>

        {isLoading ? 
          <Spinner size='xl' /> : 
          <>
            <BidItem />
            <LiveAuctions />
          </>
        }

      </Box>
    </Box>
  );
}

export default App;
