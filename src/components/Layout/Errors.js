import React from 'react';
import { connect } from 'react-redux'
import {
    CLEAR_ERRORS,
    CLEAR_LOADING_SINGLE_LIST,
} from '../../actionTypes'

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles((theme) => ({
    alert: {
        borderRadius: "0",
        backgroundColor: "#d50000"
    },
    icon: {
        cursor: "pointer",
    }
}))

function Errors(props) {
    const classes = useStyles();

    const [open, setOpen] = React.useState(true);

    const handleClose = () => {
        setOpen(true);
        props.clearErrors()
        props.clearLoadingSingleList()
    }

    if (props.errors) {
        return (
            <div>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <Alert className={classes.alert} variant="filled" severity="error" id="alert-dialog-title">
                        Error
                </Alert>
                    <DialogActions>
                        <List className={classes.error}>
                            {props.errors.map((error, index) => {
                                return (
                                    <ListItem key={index}>
                                        <ListItemText className={classes.paper} align="left" key={index}>{error}</ListItemText>
                                    </ListItem>
                                )
                            })}
                        </List>
                    </DialogActions>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary" autoFocus>
                            Try Again
                    </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    } else {
        return null
    }
}

const mapStateToProps = state => ({
    errors: state.errors.errors
})

const mapDispatchToProps = dispatch => ({
    clearErrors: () => dispatch({ type: CLEAR_ERRORS }),
    clearLoadingSingleList: () => dispatch({ type: CLEAR_LOADING_SINGLE_LIST })
})

export default connect(mapStateToProps, mapDispatchToProps)(Errors)