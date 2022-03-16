import {
  useDisclosure,
  Box,
} from '@chakra-ui/react';
import ModalWindow from './ModalWinow';
import styles from '../../styles/header.module.scss';
import {ReactComponent as Logo} from '../icons/Logo.svg';
import {ReactComponent as MenuIcon} from '../icons/Menu.svg';

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <header>
      <Box className={styles.headerElements}>
        <Logo />
        <MenuIcon onClick={onOpen}/>
        <ModalWindow isOpen={isOpen} onClose={onClose}/>
      </Box>
    </header>
  );
};

export default Header;