'use client'

import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
} from '@chakra-ui/react'
import React from 'react'

export default function CallToActionWithVideo() {
  const token = localStorage.getItem('token');

  return (
    <Container maxW={'7xl'}>
      <Stack
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: 'column', md: 'row' }}>
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}>
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: '30%',
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: '#cf898b',
                zIndex: -1,
              }}>
              Welcome to RecipeGenius:
            </Text>
            <br />
            <Text as={'span'} color={'red.400'}>
              Your Ultimate Culinary Assistant to Unleash your Creativity!
            </Text>
          </Heading>
          <Text color={'gray.500'}>
            Say farewell to mealtime dilemmas and embrace a world of delicious, health-conscious possibilities.
            With RecipeGenius, you're in charge of your culinary destiny. Enter your favorite ingredients, and even your desired calorie limits,
            and watch as we craft nutritious, mouthwatering recipes tailored to your preferences. Whether you're a kitchen newbie or a seasoned pro,
            our app is your trusted companion in the kitchen, helping you create wholesome, flavorful dishes. Unleash the joy of healthy cooking with RecipeGenius!
          </Text>
          <Stack spacing={{ base: 4, sm: 6 }} direction={{ base: 'column', sm: 'row' }} align="center" justify="center">
            {token ? <Button
              as={'a'}
              href={'/my_recipes'}
              rounded={'full'}
              size={'lg'}
              fontWeight={'normal'}
              px={6}
              colorScheme={'red'}
              bg={'#cf898b'}
              _hover={{ bg: 'pink' }}>
              My recipes
            </Button> : <Button
              as={'a'}
              href={'/sign_up'}
              rounded={'full'}
              size={'lg'}
              fontWeight={'normal'}
              px={6}
              colorScheme={'red'}
              bg={'#cf898b'}
              _hover={{ bg: 'pink' }}>
              Get started
            </Button>}
          </Stack>
        </Stack>
        <Flex
          flex={1}
          justify={'center'}
          align={'center'}
          position={'relative'}
          w={'full'}>
          <Box
            position={'relative'}
            height={'500px'}
            rounded={'2xl'}
            boxShadow={'2xl'}
            width={'full'}
            overflow={'hidden'}>
            <Image
              alt={'Hero Image'}
              fit={'cover'}
              align={'center'}
              w={'100%'}
              h={'100%'}
              src={
                'https://img.freepik.com/premium-vector/mother-cooking-illustration-design-concept_108061-1088.jpg?size=338&ext=jpg&ga=GA1.1.1880011253.1699228800&semt=ais'
              }
            />
          </Box>
        </Flex>
      </Stack>
    </Container>
  )
}