import { Button } from '@chakra-ui/button';
import { Text } from '@chakra-ui/layout';
import { VStack, StackDivider, Heading } from '@chakra-ui/react';
import React from 'react';
import { NavBar } from '../../components/navbar/NavBar';
import { useRouter } from 'next/router';

interface homeProps {
}

const Home: React.FC<homeProps> = ({ }) => {
    const router = useRouter()

    return (
        <div>
            <NavBar />
            <VStack
                spacing={6}
                align="center">

                <Heading fontSize="4xl">Simulate and model your ecommerce store!</Heading>

                <Text fontSize="2xl">Select the products and services you require for your online store to calculate
                the overall expenses and potential profit of your store </Text>

                <Button colorScheme="teal" size="lg" onClick={() => router.push('/views/platforms')}>Get Started</Button>
            </VStack>
        </div>
    );
}

export default Home;