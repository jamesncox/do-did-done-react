import React from 'react'
import AddList from './AddList'

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

import PostAddIcon from '@material-ui/icons/PostAdd';

const useStyles = makeStyles({
    root: {
        maxWidth: 275,
        margin: "auto",
        marginTop: 90,
        display: "flex"
    },
    title: {
        fontSize: 20,
    },
    icon: {
        margin: "auto",
        cursor: "pointer"
    }
});

function NoListsYet(props) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Create your first Git-R-Do category!
                </Typography>
            </CardContent>
            <Divider orientation="vertical" flexItem />
            <CardActions>
                <AddList className={classes.icon} />
            </CardActions>
        </Card>
    );
}

export default NoListsYet