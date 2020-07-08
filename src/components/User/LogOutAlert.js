import React from 'react';
import { connect } from 'react-redux'
import { clearCurrentUser } from '../../actions/users'
import { getToken } from '../../actions/sessions'

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContentText from '@material-ui/core/DialogContentText';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme) => ({
    alert: {
        borderRadius: "0",
        backgroundColor: "#ff9100"
    }
}))

function LogOutAlert(props) {
    const classes = useStyles();

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    }

    const handleLogout = () => {
        props.clearCurrentUser()
        props.getToken()
    }


    return (
        <div>
            <ExitToAppIcon onClick={handleClickOpen} />
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <Alert className={classes.alert} variant="filled" severity="warning" id="alert-dialog-title">
                    {`${props.user.username}`}
                </Alert>
                <DialogActions>
                    <DialogContentText id="alert-dialog-description">
                        Are you sure you want to log out?
                    </DialogContentText>
                </DialogActions>
                <DialogActions>
                    <Button onClick={handleLogout} color="primary">
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
    token: state.sessions.token,
})

export default connect(mapStateToProps, { clearCurrentUser, getToken })(LogOutAlert)