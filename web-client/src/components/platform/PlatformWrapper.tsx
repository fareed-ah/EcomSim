import { Box, useColorModeValue } from '@chakra-ui/react';
import React, { ReactNode } from 'react'

interface PlatformWrapperProps {

}

export const PlatformWrapper: React.FC<PlatformWrapperProps> = ({ children }: { children: ReactNode }) => {
    return (
        <Box
            mb={4}
            shadow="base"
            borderWidth="1px"
            alignSelf={{ base: 'center', lg: 'flex-start' }}
            borderRadius={'xl'}>
            {children}
        </Box>
    );
}