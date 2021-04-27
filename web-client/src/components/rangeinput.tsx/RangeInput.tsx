import { Box, FormControl, InputAdornment, InputLabel, OutlinedInput, TextField, Theme, Typography } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/styles';
import React from 'react'

interface RangeInputProps {
    title: string
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        row: {
            display: "flex",
            flexDirection: "row",
        },
        input: {
            color: "000",
            maxWidth: "125px",
        },
        margin: {
            margin: "8px",
        }
    }),
);

export const RangeInput: React.FC<RangeInputProps> = ({ title }) => {
    const classes = useStyles();
    return (
        <Box>
            <Typography variant="subtitle1">{title}</Typography>
            <Box className={classes.row}>
                <FormControl fullWidth className={classes.margin} variant="outlined">
                    <InputLabel htmlFor="min-input">Min</InputLabel>
                    <OutlinedInput
                        id="min-input"
                        className={classes.input}
                        startAdornment={<InputAdornment position="start">$</InputAdornment>}
                        labelWidth={30}
                        type="number"
                    />
                </FormControl>

                <FormControl fullWidth className={classes.margin} variant="outlined">
                    <InputLabel htmlFor="max-input">Max</InputLabel>
                    <OutlinedInput
                        className={classes.input}
                        startAdornment={<InputAdornment position="start">$</InputAdornment>}
                        labelWidth={30}
                        id="max-input"
                        type="number"
                    />
                </FormControl>
            </Box>
        </Box>
    );
}