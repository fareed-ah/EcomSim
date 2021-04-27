import { Box, createStyles, Theme, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React from 'react'
import { RangeInput } from '../rangeinput.tsx/RangeInput';

interface MarketingProps {

}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            margin: "50px",
        },
    }),
);
export const Marketing: React.FC<MarketingProps> = ({ }) => {
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <Typography variant="h5">Marketing</Typography>
            <RangeInput title="Facebook"></RangeInput>
            <RangeInput title="Instagram"></RangeInput>
            <RangeInput title="Google"></RangeInput>
        </Box>
    );
}