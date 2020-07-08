import React, { useState } from 'react';
import { connect } from 'react-redux'

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContentText from '@material-ui/core/DialogContentText';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Paper from '@material-ui/core/Paper';
import LinearProgress from '@material-ui/core/LinearProgress';
import RemoveIcon from '@material-ui/icons/Remove'
import IconButton from '@material-ui/core/IconButton'
import { Typography } from '@material-ui/core';
// import { ColorPalette } from 'material-ui-color';

import PostAddIcon from '@material-ui/icons/PostAdd';

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(1),
        margin: 'auto',
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    form: {
        width: '95%',
        margin: 'auto',
        marginTop: theme.spacing(1)
    },
    submit: {
        margin: theme.spacing(5, 0, 2),
    },
    loader: {
        margin: 'auto',
        padding: '5em',
    },
    progressBar: {
        margin: 'auto',
        marginTop: theme.spacing(2),
        width: '20em',
        height: "1.5em",
        backgroundColor: theme.palette.primary.main,
        borderRadius: "20px",
    }
}))

function AddCategory(props) {
    const classes = useStyles();

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    }

    const [name, setName] = useState("")
    const [storeType, setStoreType] = useState("")
    const [color, setColor] = useState("")

    const handleName = (e) => {
        setName(e.target.value)
    }

    const handleColor = (color) => {
        setColor(color)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const store = {
            name: name,
            storeType: storeType,
            color: color,
            userId: props.user.id
        }

        props.createStore(store)
        setName("")
        setStoreType("")
        setColor("")
    }

    return (
        <div>
            <PostAddIcon onClick={handleClickOpen} />
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >

                <Grid container component={Paper} justify="space-between">
                    <Typography className={classes.paper}>
                        Select Category
                    </Typography>
                    <form
                        className={classes.form}
                        noValidate
                        onSubmit={e => handleSubmit(e)}
                    >
                        <TextField
                            // variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="name"
                            label="Category name"
                            name="name"
                            autoComplete="name"
                            onChange={handleName}
                            value={name}
                        />
                        {/* <TextField
                            // variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="storeType"
                            label="Store Type (e.g. grocery)"
                            name="storeType"
                            onChange={handleStoreType}
                            value={storeType}
                        /> */}
                        <Typography className={classes.paper}>
                            select color for store header
                        </Typography>
                        {/* <ColorPalette
                            palette={palette}
                            onSelect={e => handleColor(e)}
                            size={31}
                        /> */}
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Add Category
                    </Button>
                    </form>
                </Grid>
                {/* <Alert className={classes.alert} variant="filled" severity="warning" id="alert-dialog-title">
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
                </DialogActions> */}
            </Dialog>
        </div>
    );
}

export default AddCategory