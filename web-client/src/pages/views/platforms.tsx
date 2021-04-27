
import { Box, Button, Card, CardActions, CardContent, CardHeader, Container, Grid, makeStyles, Typography } from '@material-ui/core';
import { useRouter } from 'next/router';
import React from 'react'
import { NavBar } from '../../components/navbar/NavBar';

interface platformsProps {

}

const useStyles = makeStyles((theme) => ({
    '@global': {
        ul: {
            margin: 0,
            padding: 0,
            listStyle: 'none',
        },
    },
    heading5: {
        font: "Roboto",
        fontWeight: "bold",
        flexGrow: 1,
        alignSelf: "center",
        textAlign: "center",
        margin: "50px",
    },
    appBar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbar: {
        flexWrap: 'wrap',
    },
    toolbarTitle: {
        flexGrow: 1,
    },
    link: {
        margin: theme.spacing(1, 1.5),
    },
    heroContent: {
        padding: theme.spacing(8, 0, 6),
    },
    cardHeader: {
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
    },
    cardPricing: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'baseline',
        marginBottom: theme.spacing(2),
    },
    footer: {
        borderTop: `1px solid ${theme.palette.divider}`,
        marginTop: theme.spacing(8),
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
        [theme.breakpoints.up('sm')]: {
            paddingTop: theme.spacing(6),
            paddingBottom: theme.spacing(6),
        },
    },
    button: {
        backgroundColor: "#000",
        color: "#FFF",
        marginTop: "50px",
        paddingTop: "15px",
        paddingBottom: "15px",
        paddingRight: "25px",
        paddingLeft: "25px",
    },
}));

const tiers = [
    {
        title: 'WooCommerce',
        price: '0',
        description: ['10 users included', '2 GB of storage', 'Help center access', 'Email support'],
        buttonText: 'Select',
        buttonVariant: 'outlined',
    },
    {
        title: 'Shopify',
        subheader: 'Most popular',
        price: '15',
        description: [
            '20 users included',
            '10 GB of storage',
            'Help center access',
            'Priority email support',
        ],
        buttonText: 'Select',
        buttonVariant: 'contained',
    },
    {
        title: 'Wordpress',
        price: '30',
        description: [
            '50 users included',
            '30 GB of storage',
            'Help center access',
            'Phone & email support',
        ],
        buttonText: 'Select',
        buttonVariant: 'outlined',
    },
];

const platforms: React.FC<platformsProps> = ({ }) => {

    const router = useRouter()
    const classes = useStyles();

    return (
        <Box>
            <NavBar />
            <Container>

                <Typography variant="h5" className={classes.heading5}>Select the ecommerce platform you wish to use!</Typography>

                <Grid container spacing={5} alignItems="flex-end">
                    {tiers.map((tier) => (
                        <Grid item xs={12} sm={6} md={4}>
                            <Card>
                                <CardHeader
                                    title={tier.title}
                                    subheader={tier.subheader}
                                    titleTypographyProps={{ align: 'center' }}
                                    subheaderTypographyProps={{ align: 'center' }}
                                    // action={tier.title === 'Pro' ? <StarIcon /> : null}
                                    className={classes.cardHeader}
                                />
                                <CardContent>
                                    <div className={classes.cardPricing}>
                                        <Typography component="h2" variant="h3" color="textPrimary">
                                            ${tier.price}
                                        </Typography>
                                        <Typography variant="h6" color="textSecondary">
                                            /mo
                                        </Typography>
                                    </div>
                                    <ul>
                                        {tier.description.map((line) => (
                                            <Typography component="li" variant="subtitle1" align="center" key={line}>
                                                {line}
                                            </Typography>
                                        ))}
                                    </ul>
                                </CardContent>
                                <CardActions>
                                    <Button fullWidth color="primary">
                                        {tier.buttonText}
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>

                <Button className={classes.button} onClick={() => router.push('/views/storeDetails')}>Continue</Button>
            </Container>
        </Box>
    );
}

export default platforms