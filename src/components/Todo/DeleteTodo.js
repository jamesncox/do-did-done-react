import React, { useState } from 'react';
import { connect } from 'react-redux'
import { deleteTodo } from '../../actions/todos'

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContentText from '@material-ui/core/DialogContentText';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles((theme) => ({
    alert: {
        borderRadius: "0",
        backgroundColor: "#dd2c00"
    },
    icon: {
        cursor: "pointer",
    }
}))

function DeleteTodo(props) {
    const classes = useStyles();

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    }

    const handleDeleteTodo = (id) => {
        props.deleteTodo(id)
        setOpen(false)
    }

    return (
        <div>
            <Tooltip title="Delete List">
                <DeleteForeverIcon onClick={handleClickOpen} className={classes.icon} />
            </Tooltip>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <Alert className={classes.alert} variant="filled" severity="error" id="alert-dialog-title">
                    {`${props.user.username}`}
                </Alert>
                <DialogActions>
                    <DialogContentText id="alert-dialog-description">
                        Are you sure you want to delete this list and all its todos?
                    </DialogContentText>
                </DialogActions>
                <DialogActions>
                    <Button onClick={() => handleDeleteTodo(props.selectedListId)} color="primary">
                        Yes
                    </Button>
                    <Button onClick={handleClose} color="primary" autoFocus>
                        No
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

const mapStateToProps = (state) => ({
    user: state.users.user,
    selectedTodoId: state.todos.selectedTodoId
})

export default connect(mapStateToProps, { deleteTodo })(DeleteTodo)