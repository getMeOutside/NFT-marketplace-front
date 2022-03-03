import { Flex, Spacer, Box } from '@chakra-ui/react';
import styles from '../styles/footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Box className={styles.footerContent}>
        This is the Box
      </Box>
    </footer>
  );
};

export default Footer;