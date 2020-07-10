import React from 'react'
import AddList from './AddList'

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import PostAddIcon from '@material-ui/icons/PostAdd';

const useStyles = makeStyles({
    root: {
        maxWidth: 275,
        margin: "auto",
        marginTop: 275
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

function NoListsYet(props) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Click <PostAddIcon /> below to add your first Git-R-Do category!
                </Typography>
            </CardContent>
            <CardActions>
                <AddList />
            </CardActions>
        </Card>
    );
}

export default NoListsYet