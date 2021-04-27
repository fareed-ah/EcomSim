
import { createStyles, Box, Select, Theme, Typography, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React from 'react'
import CheckboxList from '../checklist/CheckBoxList';

interface DemographicsProps {

}
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            margin: "50px",
        },
    }),
);

export const Demographics: React.FC<DemographicsProps> = ({ }) => {
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <Typography variant="h5">Demographics</Typography>
            <CheckboxList />
        </Box>
    );
}