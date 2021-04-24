
import { Box, Button, Container, Grid, Typography } from '@material-ui/core';
import { useRouter } from 'next/router';
import React from 'react'
import { NavBar } from '../../components/navbar/NavBar';

interface platformsProps {

}

const platforms: React.FC<platformsProps> = ({ }) => {

    const router = useRouter()

    return (
        <Box>
            <NavBar />
            <Container>

                <Typography>Select the ecommerce platform you wish to use!</Typography>

                <Grid>

                </Grid>

                <Button onClick={() => router.push('/views/storeDetails')}>Continue</Button>
            </Container>
        </Box>
    );
}

export default platforms