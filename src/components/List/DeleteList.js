import React from 'react';
import { connect } from 'react-redux'
import { deleteList } from '../../actions/lists'

import BackdropLoader from '../Layout/BackdropLoader'

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
            {props.loadingLists === true ? <BackdropLoader /> : null}

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
                    {`Delete ${props.selectedList.category}?`}
                </Alert>
                <DialogActions>
                    <DialogContentText id="alert-dialog-description">
                        {`Are you sure you want to delete ${props.selectedList.category} and all its todos`}
                    </DialogContentText>
                </DialogActions>
                <DialogActions>
                    <Button onClick={() => handleDeleteList(props.selectedList.id)} color="primary">
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
    selectedList: state.lists.selectedList,
    loadingLists: state.lists.loadingLists,
})

export default connect(mapStateToProps, { deleteList })(DeleteList)