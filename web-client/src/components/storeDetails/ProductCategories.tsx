
import { Box, createStyles, Select, Theme, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React from 'react'
import CheckboxList from '../checklist/CheckBoxList';

interface ProductCategoriesProps {

}
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },

    }),
);
export const ProductCategories: React.FC<ProductCategoriesProps> = ({ }) => {
    const classes = useStyles();
    return (
        <Box>
            <Typography variant="h5">Product Categories</Typography>
            <CheckboxList />
        </Box>
    );
}