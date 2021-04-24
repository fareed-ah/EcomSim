
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
            minHeight: "500px",
            padding: "50px",
            paddingTop: "70px",
            paddingBottom: "200px",
        },

        heading1: {
            font: "Roboto",
            fontWeight: "bold",
            marginBottom: "20px",
        },

        subtitle: {
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
    }),
);

const Home: React.FC<homeProps> = ({ }) => {
    const router = useRouter()
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <NavBar />
            <Box className={classes.section1}>
                <Typography variant="h2" className={classes.heading1}>Estimate e-commerce<br></br>revenue with ease!</Typography>
                <Typography variant="subtitle1" className={classes.subtitle}>Select the products and services you require for your online store<br></br> to calculate your
                the overall expenses and potential profit </Typography>
                <Button variant="contained" className={classes.button} onClick={() => router.push('/views/platforms')}>Get Started</Button>
            </Box>
            <Box className={classes.section2}>
                <Typography variant="h2" className={classes.heading1}>Estimate e-commerce<br></br>revenue with ease!</Typography>
                <Typography variant="subtitle1" className={classes.subtitle}>Select the products and services you require for your online store<br></br> to calculate your
                the overall expenses and potential profit </Typography>
                <Button variant="contained" className={classes.button} onClick={() => router.push('/views/platforms')}>Get Started</Button>
            </Box>
        </div>
    );
}

export default Home;