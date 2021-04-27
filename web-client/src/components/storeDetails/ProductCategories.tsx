
import { Box, Container, createStyles, Select, Theme, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React from 'react'
import CheckboxList from '../checklist/CheckBoxList';

interface ProductCategoriesProps {

}
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            margin: "50px",
        },
    }),
);
export const ProductCategories: React.FC<ProductCategoriesProps> = ({ }) => {
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <Typography variant="h5">Product Categories</Typography>
            <CheckboxList />
        </Box>
    );
}