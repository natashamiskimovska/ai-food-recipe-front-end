'use client'

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
  Center,
} from '@chakra-ui/react'
import { useState } from 'react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import React from 'react'
import { object, string } from "yup";
import { useNavigate } from "react-router-dom";
import { Field, Form, Formik } from "formik";
import axios from "axios";
import { API } from "../network";

export default function SignupCard() {
  const [showPassword, setShowPassword] = useState(false)

  const navigate = useNavigate();

  const [loading, setLoading] = useState<boolean>(false);

  const initialValues = {
    email: "",
    password: "",
    first_name: "",
    type: 2,
    last_name: "",
    password_confirmation: "",
  };

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('white', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Sign up
          </Heading>
        </Stack>
        <Formik
          initialValues={initialValues}
          onSubmit={async (values, { resetForm }) => {
            setLoading(true);
            try {
              await API.Auth.register(values.first_name, values.last_name, values.type, values.email, values.password, values.password_confirmation);
              navigate("/");
            } catch (error) {
              if (axios.isAxiosError(error)) {
              }
            } finally {
              resetForm();
              setLoading(false);
            }
          }}
        >
          {({ handleSubmit }) => (
            <Box
              rounded={'lg'}
              boxShadow={'lg'}
              p={8}>
              <Form onSubmit={handleSubmit}>
                <Stack spacing={4}>
                  <HStack>
                    <Box>
                      <FormControl isRequired>
                        <FormLabel>First Name</FormLabel>
                        <Field
                          as={Input}
                          id="first_name"
                          name="first_name"
                          type="text"
                          size="lg"
                          pl="1rem"
                        />
                      </FormControl>
                    </Box>
                    <Box>
                      <FormControl>
                        <FormLabel>Last Name</FormLabel>
                        <Field
                          as={Input}
                          id="last_name"
                          name="last_name"
                          type="text"
                          size="lg"
                          pl="1rem"
                        />
                      </FormControl>
                    </Box>
                  </HStack>
                  <Box>
                    <FormControl isRequired>
                      <FormLabel>Email address</FormLabel>
                      <Field
                        as={Input}
                        id="email"
                        name="email"
                        type="email"
                        size="lg"
                        pl="1rem"
                      />
                    </FormControl>
                  </Box>
                  <Box>
                    <InputGroup>
                      <FormControl isRequired>
                        <FormLabel>Password</FormLabel>
                        <Field
                          as={Input}
                          id="password"
                          name="password"
                          type={showPassword ? 'text' : 'password'}
                          size="lg"
                          pl="1rem"
                        />
                        <InputGroup>
                          <InputRightElement h={'full'}>
                            <Button
                              variant={'ghost'}
                              onClick={() => setShowPassword((showPassword) => !showPassword)}>
                              {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                            </Button>
                          </InputRightElement>
                        </InputGroup>
                      </FormControl>
                    </InputGroup>
                  </Box>
                  <Box>
                    <InputGroup>
                      <FormControl isRequired>
                        <FormLabel>Password Confirmation</FormLabel>
                        <Field
                          as={Input}
                          id="password_confirmation"
                          name="password_confirmation"
                          type={showPassword ? 'text' : 'password'}
                          size="lg"
                          pl="1rem"
                        />
                        <InputGroup>
                          <InputRightElement h={'full'} >
                            <Button
                              variant={'ghost'}
                              onClick={() => setShowPassword((showPassword) => !showPassword)}>
                              {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                            </Button>
                          </InputRightElement>
                        </InputGroup>
                      </FormControl>
                    </InputGroup>
                  </Box>
                  <Stack spacing={10} pt={2}>
                    <Button
                      loadingText="Submitting"
                      size="lg"
                      bg={'#cf898b'}
                      color={'white'}
                      _hover={{
                        bg: 'pink',
                      }}
                      type="submit">
                      Sign up
                    </Button>
                  </Stack>
                  <Stack pt={6}>
                    <Text align={'center'}>
                      Already a user? <Link href={'/sign_in'} color={'#cf898b'}>Login</Link>
                    </Text>
                  </Stack>
                </Stack>
              </Form>
            </Box>
          )}
        </Formik>
      </Stack>
    </Flex>
  )
}