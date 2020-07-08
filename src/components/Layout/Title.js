import React from 'react'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    title: {
        fontFamily: "'Nanum Pen Script', cursive",
        fontSize: "3rem",
        position: "fixed",
        top: theme.spacing(1),
        color: "#448aff"
    }
}));

export default function Title(props) {
    const classes = useStyles();

    return (
        <Typography className={classes.title}>
            Git-R-Done
        </Typography>
    )

}