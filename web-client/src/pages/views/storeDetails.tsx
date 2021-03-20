import { HStack, Text, VStack } from '@chakra-ui/layout'
import React from 'react'
import { NavBar } from '../../components/navbar/NavBar'

interface storeDetailsProps {

}

export const storeDetails: React.FC<storeDetailsProps> = ({ }) => {
    return (
        <div>
            <NavBar />
            <HStack width="100%">
                <VStack width="50%">
                    <Text>Left</Text>
                    <Text>Left</Text>
                </VStack>

                <VStack width="50%">
                    <Text>Right</Text>
                    <Text>Right</Text>
                </VStack>
            </HStack>
        </div>
    );
}

export default storeDetails