'use client'

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
  InputGroup
} from '@chakra-ui/react'
import React from 'react'
import { Field, Form, Formik } from "formik";
import { object, string } from "yup";
import { API } from "../network";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function SignIn() {
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = object().shape({
    email: string().email().required("Required"),
    password: string().min(6).required("Required"),
  });
  const navigate = useNavigate();

  const [loading, setLoading] = useState<boolean>(false);
  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('white', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Sign in to your account</Heading>
        </Stack>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={async (values, { resetForm }) => {
            setLoading(true);
            try {
              await API.Auth.login(values.email, values.password);
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
                  <InputGroup>
                    <FormControl>
                      <FormLabel>Email address</FormLabel>
                      <Field
                        as={Input}
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Your email"
                        size="lg"
                        pl="1rem"
                      />
                    </FormControl>
                  </InputGroup>
                  <InputGroup>
                    <FormControl>
                      <FormLabel>Password</FormLabel>
                      <Field
                        as={Input}
                        id="password"
                        name="password"
                        type="password"
                        placeholder="Your password"
                        size="lg"
                        pl="1rem"
                      />
                    </FormControl>
                  </InputGroup>
                  <Stack spacing={10}>
                    <Stack
                      direction={{ base: 'column', sm: 'row' }}
                      align={'start'}
                      justify={'space-between'}>
                      <Checkbox>Remember me</Checkbox>
                      <Text color={'#cf898b'}>Forgot password?</Text>
                    </Stack>
                    <Button
                      isLoading={loading}
                      bg={'#cf898b'}
                      color={'white'}
                      _hover={{
                        bg: 'pink',
                      }}
                      type="submit">
                      Sign in
                    </Button>
                  </Stack>
                  <Stack pt={6}>
                    <Text align={'center'}>
                      Don't have account? <Link href={'/sign_un'} color={'#cf898b'}>Sign Up</Link>
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