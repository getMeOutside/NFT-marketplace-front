import React from 'react'
import styles from '../../styles/login.module.scss' 
import { Input, Text } from '@chakra-ui/react'

export default function Login() {
  return (
    <div className={styles.loginWrapper}>
      <div className={styles.formElement}>
        <div className={styles.element}>
          <Text fontSize='xl'>Enter your details</Text>
        </div>
        <div className={styles.element}>
          <Input placeholder='Name' size='lg' />
        </div>
        <div className={styles.element}>
          <Input placeholder='User Name' size='lg' />
        </div>
      </div>
      <div className={styles.formElement}>
        <div className={styles.element}>
          <Text fontSize='xl'>Enter your email</Text>
        </div>
        <div className={styles.element}>
          <Input placeholder='Email' size='lg' />
        </div>
      </div>
    </div>
  )
}
