import { Button, FormControl, Box, FormLabel, Heading, Input, Textarea, VStack } from '@chakra-ui/react';
import { Formik, Form, Field } from 'formik';
import React from 'react'

interface FormValues {
    email: string;
    password: string;
}

interface AddProductFormProps {

}

export const AddProductForm: React.FC<AddProductFormProps> = ({ }) => {
    const initialValues: FormValues = { email: '', password: '' };
    return (
        <Box>
            <Heading fontSize="xl">Add Product</Heading>
            <Formik
                initialValues={initialValues}
                onSubmit={(values, actions) => {
                    console.log({ values, actions });
                    alert(JSON.stringify(values, null, 2));
                    actions.setSubmitting(false);
                }}
            >
                <Form>
                    <FormControl id="productName">
                        <FormLabel>Product Name</FormLabel>
                        <Input type="text" />
                    </FormControl>

                    <FormControl id="productPrice">
                        <FormLabel>Product Price</FormLabel>
                        <Input type="number" />
                    </FormControl>

                    <FormControl id="quantity">
                        <FormLabel>Quantity</FormLabel>
                        <Input type="number" />
                    </FormControl>

                    <FormControl id="descripton">
                        <FormLabel>Product Description</FormLabel>
                        <Textarea placeholder="Add a product description" />
                    </FormControl>

                    <Button mt={4} colorScheme="teal" type="submit">
                        Submit
                     </Button>
                </Form>
            </Formik>
        </Box>
    );
}