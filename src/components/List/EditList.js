import React from 'react';
import { connect } from 'react-redux'
import { deleteList } from '../../actions/lists'

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContentText from '@material-ui/core/DialogContentText';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import Tooltip from '@material-ui/core/Tooltip';
import EditIcon from '@material-ui/icons/Edit'

const useStyles = makeStyles((theme) => ({
    alert: {
        borderRadius: "0",
        backgroundColor: "#90caf9"
    },
    icon: {
        cursor: "pointer",
    }
}))

function DeleteList(props) {
    const classes = useStyles();

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    }

    const handleDeleteList = (id) => {
        props.deleteList(id)
        setOpen(false)
    }

    return (
        <div>
            <Tooltip title="Edit List">
                <EditIcon onClick={handleClickOpen} className={classes.icon} />
            </Tooltip>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <Alert className={classes.alert} variant="filled" severity="info" id="alert-dialog-title">
                    {`${props.user.username}`}
                </Alert>
                <DialogActions>
                    <DialogContentText id="alert-dialog-description">
                        Edit List
                    </DialogContentText>
                </DialogActions>
                <DialogActions>
                    <Button onClick={() => handleDeleteList(props.selectedListId)} color="primary">
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
    selectedListId: state.lists.selectedList
})

export default connect(mapStateToProps, { deleteList })(DeleteList)