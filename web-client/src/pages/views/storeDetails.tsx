import { Button } from '@chakra-ui/button';
import { Center, HStack, Text, VStack } from '@chakra-ui/layout'
import router from 'next/router';
import React from 'react'
import { NavBar } from '../../components/navbar/NavBar'
import { Demographics } from '../../components/storeDetails/Demographics';
import { Marketing } from '../../components/storeDetails/Marketing';
import { ProductCategories } from '../../components/storeDetails/ProductCategories';
import { TargetAudience } from '../../components/storeDetails/TargetAudience';

interface storeDetailsProps {

}

export const storeDetails: React.FC<storeDetailsProps> = ({ }) => {
    return (
        <div>
            <NavBar />
            <HStack width="100%">
                <VStack width="50%">
                    <ProductCategories />
                    <Demographics />
                </VStack>

                <VStack width="50%">
                    <Marketing />
                    <TargetAudience />
                </VStack>
            </HStack>
            <Center>
                <Button colorScheme="teal" size="md" onClick={() => router.push('/views/products')}>Continue</Button>
            </Center>
        </div>
    );
}

export default storeDetails