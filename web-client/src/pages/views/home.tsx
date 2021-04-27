
import React from 'react';
import { useRouter } from 'next/router';
import { makeStyles } from '@material-ui/styles';
import { Box, Button, Container, createStyles, Theme, Typography } from '@material-ui/core';
import { NavBar } from '../../components/navbar/NavBar';

interface homeProps {
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        section1: {
            color: "#FFF",
            backgroundColor: "#4dbd90",
            minHeight: "500px",
            padding: "50px",
            paddingTop: "73px",
            paddingBottom: "200px",
        },
        section2: {
            flexGrow: 1,
            flexDirection: "row",
            minHeight: "500px",
            padding: "50px",
            paddingTop: "70px",
            paddingBottom: "200px",
        },

        heading2: {
            font: "Roboto",
            fontWeight: "bold",
            marginBottom: "20px",
        },

        heading5: {
            font: "Roboto",
            fontWeight: "bold",
            flexGrow: 1,
            alignSelf: "center",
            textAlign: "center",
            marginBottom: "50px",
        },
        featureheading: {
            font: "Roboto",
            fontWeight: "bold",
        },

        body1: {
            font: "Roboto",
            fontWeight: "lighter",
            marginBottom: "25px",
            fontSize: "20px",
        },

        button: {
            backgroundColor: "#000",
            color: "#FFF",
            paddingTop: "15px",
            paddingBottom: "15px",
            paddingRight: "25px",
            paddingLeft: "25px",
        },
        feature: {
            flex: 1,
            margin: 16,
        },
        features: {
            display: "flex",
            flexDirection: "row",

        },
        footer: {
            minHeight: "50px",
            padding: "20px",
            backgroundColor: "#1c1d1f",
            color: "#939596",
        },
    }),
);

const Home: React.FC<homeProps> = ({ }) => {
    const router = useRouter()
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <NavBar />
            <Box className={classes.section1}>
                <Typography variant="h2" className={classes.heading2}>Estimate e-commerce<br></br>revenue with ease!</Typography>
                <Typography variant="body1" className={classes.body1}>Select the products and services you require for your online store<br></br>to calculate your
                the overall expenses and potential profit.</Typography>
                <Button variant="contained" className={classes.button} onClick={() => router.push('/views/platforms')}>Get Started</Button>
            </Box>
            <Box className={classes.section2}>
                <Container>
                    <Typography variant="h5" className={classes.heading5}>Everything you need to estimate your business revenue!</Typography>
                    <Container className={classes.features}>
                        <Box className={classes.feature}>
                            <Typography variant="h5" className={classes.featureheading}>Platforms</Typography>
                            <Typography variant="body2">Select from a variety of web hosting and creation platforms to determine initial starting costs.</Typography>
                        </Box>
                        <Box className={classes.feature}>
                            <Typography variant="h5" className={classes.featureheading}>Reach</Typography>
                            <Typography variant="body2">Choose custom demographics and audience. Set your target audience and adjust variables to see the impact on potential buyers.</Typography>
                        </Box>
                        <Box className={classes.feature}>
                            <Typography variant="h5" className={classes.featureheading}>Products</Typography>
                            <Typography variant="body2">Easily add and customize your products. Modify product prices to see which costs work best.</Typography>
                        </Box>
                        <Box className={classes.feature}>
                            <Typography variant="h5" className={classes.featureheading}>Metrics</Typography>
                            <Typography variant="body2">Simulate your store and get statistics on sales and total revenue.</Typography>
                        </Box>
                    </Container>
                </Container>
            </Box>
            <Box className={classes.footer}>
                <Typography variant="body1">Copyright 2021 EcomSim.</Typography>
            </Box>
        </div>
    );
}

export default Home;