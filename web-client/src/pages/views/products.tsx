
import { Box, Container } from '@material-ui/core';
import React from 'react'
import { NavBar } from '../../components/navbar/NavBar';
import { Marketing } from '../../components/storeDetails/Marketing';
import { TargetAudience } from '../../components/storeDetails/TargetAudience';

interface productsProps {

}

export const products: React.FC<productsProps> = ({ }) => {
    return (
        <Box>
            <NavBar />
            <Container>
                <Container>

                </Container>

                <Container >
                    <Marketing />
                    <TargetAudience />
                </Container>
            </Container>
        </Box>
    );
}

export default products