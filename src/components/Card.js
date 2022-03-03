import { 
  Flex, 
  Avatar,
  AvatarBadge,
  Image, 
  Box, 
  Text
} from '@chakra-ui/react';
import {ReactComponent as LikeIcon} from '../components/icons/Like.svg';
import styles from '../styles/card.module.scss';

const Card = () => {
  return (
    <Box className={styles.card}>
      <Box className={styles.imageBox}>
      <Image 
        src='https://www.cointribune.com/app/uploads/2021/09/bayc2.jpg?nowebp'
        alt='NFT'
        className={styles.cardImage}
      />
      </Box>

      <Text className={styles.cardTitle}>
        Digital Art
      </Text>

      <Flex alignItems='center' justifyContent='space-between'>
        <Box className={styles.userInfo}>
          <Avatar src='https://bit.ly/dan-abramov' alt='Dan Abramov'>
            <AvatarBadge className={styles.badge} />
          </Avatar>
          <Box ml='3' align='left'>
            <Text fontWeight='bold'>
              Segun Adebayo
            </Text>
            <Text fontSize='sm' color='#555555'>Creator</Text>
          </Box>
        </Box>
        <Box mr='8px'>
          <LikeIcon />
        </Box>
      </Flex>
    </Box>
  );
}

export default Card;