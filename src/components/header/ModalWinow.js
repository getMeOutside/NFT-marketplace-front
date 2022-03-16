import {
  Box,
  Flex,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  Link,
  ModalFooter
} from '@chakra-ui/react';
import GradientBtn from '../butons/Gradient';

import styles from '../../styles/header.module.scss';
import {ReactComponent as Logo} from '../icons/Logo.svg';
import {ReactComponent as Search} from '../icons/Search.svg';
import {ReactComponent as Close} from '../icons/Close.svg';

const ModalWindow = ({isOpen, onClose}) => {
  return (
    <Modal onClose={onClose} size='full' isOpen={isOpen}>
      <ModalOverlay />

      <ModalContent>
        <Flex className={styles.modalContainer}>
          <ModalHeader w='100%'>
            <Flex className={styles.headerElements}>
              <Logo/>
              <Flex align='center' className={styles.icons}>
                <Search/>
                <Close onClick={onClose}/>
              </Flex>
            </Flex>
          </ModalHeader>
          <ModalBody mt='95'>
            <Flex className={styles.modalLinks}>
              <Link to='/about'>About OpenArt</Link>
              <Link to='/blog'>Blog</Link>
              <Link to='/help'>Help</Link>
              <Link to='/contact'>Contact</Link>
            </Flex>
          </ModalBody>
          <ModalFooter bg='none' maxW='308' mt='180'>
            <GradientBtn text={'Connect wallet'}/>
          </ModalFooter>
        </Flex>
      </ModalContent>
    </Modal>
  );
}

export default ModalWindow;