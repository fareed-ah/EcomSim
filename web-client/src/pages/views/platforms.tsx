import { VStack, Heading, Button, Text, HStack, Box, SimpleGrid } from '@chakra-ui/react';
import React from 'react'
import { NavBar } from '../../components/navbar/NavBar';
import { PlatformInfoCard } from '../../components/platform/platformInfoCard';

interface platformsProps {

}

const platforms: React.FC<platformsProps> = ({ }) => {
    return (
        <div>
            <NavBar />
            <VStack
                spacing={6}
                align="center">

                <Heading fontSize="xl">Select the ecommerce platform you wish to use!</Heading>

                <SimpleGrid columns={3} spacing={4}>

                    <PlatformInfoCard />
                    <PlatformInfoCard />
                    <PlatformInfoCard />
                    <PlatformInfoCard />
                    <PlatformInfoCard />
                    <PlatformInfoCard />
                    <PlatformInfoCard />
                    <PlatformInfoCard />
                    <PlatformInfoCard />

                </SimpleGrid>

                <Button colorScheme="teal" size="md">Continue</Button>
            </VStack>
        </div>
    );
}

export default platforms