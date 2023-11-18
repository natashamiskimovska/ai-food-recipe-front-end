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
    useColorModeValue,
    Select,
} from '@chakra-ui/react'
import React from 'react'
import { Field, Form, Formik } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { API } from "../network";
import { string } from 'yup';

export default function InitialFocus() {
    const initialValues = {
        type: "breakfast",
        include_only: false,
        can_include: null,
        limit_calories: null,
    };

    const navigate = useNavigate();
    const [loading, setLoading] = useState<boolean>(false);

    const [type, setType] = useState<any>();

    return (
        <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('white', 'gray.800')}>
            <Stack spacing={6} mx={'auto'} maxW={'lg'} py={6} px={6} align={'center'}>
                <Stack align={'center'}>
                    <Heading fontSize={'4xl'}>Create new recipe</Heading>
                </Stack>
                <Formik
                    initialValues={initialValues}
                    onSubmit={async (values, { resetForm }) => {
                        setLoading(true);
                        try {
                            const generatedMenuResponse = await API.User.postChat(type, values.include_only, values.can_include, values.limit_calories);
                            navigate("/generated_recipe", { state: { generatedMenu: generatedMenuResponse.data.data} });
                        
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
                            w='700px'
                            p={8}>
                            <Form onSubmit={handleSubmit}>
                                <Stack spacing={10}>
                                    <FormControl>
                                        <FormLabel>Meal type</FormLabel>
                                        <Select onChange={event => setType(event.target.value)}
                                            defaultValue={'breakfast'}
                                            id="type"
                                            name="type" >
                                            <option value='breakfast'>Breakfast</option>
                                            <option value='lunch'>Lunch</option>
                                            <option value='dinner'>Dinner</option>
                                            <option value='snack'>Snack</option>
                                        </Select>
                                    </FormControl>
                                    <FormControl>
                                        <FormLabel>Food included</FormLabel>
                                        <Field
                                            as={Input}
                                            id="can_include"
                                            name="can_include"
                                            type="text"
                                            size="lg"
                                            pl="1rem"
                                        />
                                    </FormControl>
                                    <Stack spacing={10}>
                                        <Stack
                                            direction={{ base: 'column', sm: 'row' }}
                                            align={'start'}
                                            justify={'space-between'}>
                                            <Checkbox id='include_only' name='include_only'>Only include this food</Checkbox>
                                        </Stack>
                                        <FormControl>
                                            <FormLabel>Limit calories</FormLabel>
                                            <Field
                                                as={Input}
                                                id="limit_calories"
                                                name="limit_calories"
                                                type="number"
                                                size="lg"
                                                pl="1rem"
                                            />
                                        </FormControl>
                                        <Button
                                            isLoading={loading}
                                            bg={'#cf898b'}
                                            color={'white'}
                                            _hover={{
                                                bg: 'pink',
                                            }}
                                            type="submit">
                                            Create
                                        </Button>
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