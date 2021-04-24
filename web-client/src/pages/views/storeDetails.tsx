
import { Box, Button, Container } from '@material-ui/core';
import router from 'next/router';
import React from 'react'
import { NavBar } from '../../components/navbar/NavBar';
import { Demographics } from '../../components/storeDetails/Demographics';
import { Marketing } from '../../components/storeDetails/Marketing';
import { ProductCategories } from '../../components/storeDetails/ProductCategories';
import { TargetAudience } from '../../components/storeDetails/TargetAudience';

interface storeDetailsProps {

}

export const storeDetails: React.FC<storeDetailsProps> = ({ }) => {
    return (
        <Box>
            <NavBar />
            <Container >
                <Container>
                    <ProductCategories />
                    <Demographics />
                </Container>

                <Container>
                    <Marketing />
                    <TargetAudience />
                </Container>
            </Container>
            <Container>
                <Button  onClick={() => router.push('/views/products')}>Continue</Button>
            </Container>
        </Box>
    );
}

export default storeDetails