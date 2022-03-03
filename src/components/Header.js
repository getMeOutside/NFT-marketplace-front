import { Box } from '@chakra-ui/react';
import styles from '../styles/header.module.scss';
import {ReactComponent as Logo} from './icons/Logo.svg';
import {ReactComponent as CloseIcon} from './icons/Close.svg';
import {ReactComponent as SearchIcon} from './icons/Search.svg';

const Header = () => {
  return (
    <header>
      <Box className={styles.headerElements}>
        <Logo />

        <Box className={styles.icons}>
        <SearchIcon />
          <CloseIcon />
        </Box>
      </Box>
    </header>
  );
};

export default Header;