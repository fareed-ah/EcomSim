import { Box, Flex, HStack, Stack, VStack } from '@chakra-ui/react';
import React from 'react'
import { NavBar } from '../../components/navbar/NavBar';
import { AddProductForm } from '../../components/products/AddProductForm';
import { Marketing } from '../../components/storeDetails/Marketing';
import { TargetAudience } from '../../components/storeDetails/TargetAudience';

interface productsProps {

}

export const products: React.FC<productsProps> = ({ }) => {
    return (
        <Box>
            <NavBar />
            <Flex direction="row">
                <Stack direction="column" width="30%">
                    <AddProductForm />
                </Stack>

                <Stack direction="column" width="70%">
                    <Marketing />
                    <TargetAudience />
                </Stack>
            </Flex>
        </Box>
    );
}

export default products