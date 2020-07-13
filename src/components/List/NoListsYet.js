import React from 'react'
import AddList from './AddList'

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        maxWidth: 275,
        margin: "auto",
        marginTop: 90,
        display: "flex",
        backgroundColor: "#ef5350",
        color: "white"
    },
    title: {
        fontSize: 20,
        color: "white"
    },
    icon: {
        margin: "auto",
        cursor: "pointer",
    },
    divider: {
        width: "2px",
    }
});

function NoListsYet(props) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Create your first Do Did Done category!
                </Typography>
            </CardContent>
            <Divider className={classes.divider} orientation="vertical" flexItem />
            <CardActions>
                <AddList className={classes.icon} />
            </CardActions>
        </Card>
    );
}

export default NoListsYet