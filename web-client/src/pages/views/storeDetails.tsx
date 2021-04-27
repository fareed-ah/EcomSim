
import { Box, Button, Container, createStyles, Theme, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import router from 'next/router';
import React from 'react'
import { NavBar } from '../../components/navbar/NavBar';
import { Demographics } from '../../components/storeDetails/Demographics';
import { Marketing } from '../../components/storeDetails/Marketing';
import { ProductCategories } from '../../components/storeDetails/ProductCategories';
import { TargetAudience } from '../../components/storeDetails/TargetAudience';

interface storeDetailsProps {

}


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        demographics: {
            color: "#000",
            minHeight: "500px",
            padding: "50px",
        },
        section2: {
            flexGrow: 1,
            flexDirection: "row",
            minHeight: "500px",
            padding: "50px",
            paddingTop: "70px",
            paddingBottom: "200px",
        },

        button: {
            backgroundColor: "#000",
            color: "#FFF",
            paddingTop: "15px",
            paddingBottom: "15px",
            paddingRight: "25px",
            paddingLeft: "25px",
        },

        footer: {
            minHeight: "50px",
            padding: "20px",
            backgroundColor: "#1c1d1f",
            color: "#939596",
        },
    }),
);

export const storeDetails: React.FC<storeDetailsProps> = ({ }) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <NavBar />
            <Box className={classes.demographics}>
                <Demographics />
                <ProductCategories />
            </Box>
            <Container>
                <Button className={classes.button} onClick={() => router.push('/views/products')}>Continue</Button>
            </Container>
        </div>
    );
}

export default storeDetails