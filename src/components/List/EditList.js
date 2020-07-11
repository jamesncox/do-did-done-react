import React, { useState } from 'react';
import { connect } from 'react-redux'
import { deleteList } from '../../actions/lists'

import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import { makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import EditIcon from '@material-ui/icons/Edit'
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';


const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 130,
    },
    alert: {
        borderRadius: "0",
        backgroundColor: "#90caf9",
        display: "flex"
    },
    icon: {
        cursor: "pointer",
    }
}))

function DeleteList(props) {
    const classes = useStyles();

    const [open, setOpen] = React.useState(false);
    const [category, setCategory] = useState('')
    const [color, setColor] = useState('')

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setCategory('')
        setColor('')
    }

    const handleCategory = (e) => {
        setCategory(e.target.value)
    }

    const handleColor = (e) => {
        setColor(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const list = {
            category: category,
            color: color,
            userId: props.user.id
        }

        props.editList(list)
        setCategory("")
        setColor("")
        setOpen(false);
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
                <Grid className={classes.container} container component={Paper} justify="space-between">
                    <DialogTitle>Edit List</DialogTitle>
                    <DialogContent>
                        <form className={classes.root} noValidate autoComplete="off">
                            <TextField
                                id="standard-basic"
                                label="Edit Category Name"
                                onChange={handleCategory}
                            />
                        </form>
                    </DialogContent>
                    <DialogContent>
                        <form>
                            <FormControl className={classes.formControl}>
                                <InputLabel id="demo-dialog-select-label">Color</InputLabel>
                                <Select
                                    labelId="demo-dialog-select-label"
                                    id="demo-dialog-select"
                                    value={color}
                                    onChange={handleColor}
                                    input={<Input />}
                                >
                                    <MenuItem style={{ backgroundColor: "red", color: "white" }} value={"red"}>Red</MenuItem>
                                    <MenuItem style={{ backgroundColor: "orange", color: "white" }} value={"orange"}>Orange</MenuItem>
                                    <MenuItem style={{ backgroundColor: "yellow", color: "white" }} value={"yellow"}>Yellow</MenuItem>
                                    <MenuItem style={{ backgroundColor: "green", color: "white" }} value={"green"}>Green</MenuItem>
                                    <MenuItem style={{ backgroundColor: "blue", color: "white" }} value={"blue"}>Blue</MenuItem>
                                    <MenuItem style={{ backgroundColor: "indigo", color: "white" }} value={"indigo"}>Indigo</MenuItem>
                                    <MenuItem style={{ backgroundColor: "purple", color: "white" }} value={"purple"}>Purple</MenuItem>
                                    <MenuItem style={{ backgroundColor: "black", color: "white" }} value={"black"}>Black</MenuItem>
                                    <MenuItem style={{ backgroundColor: "pink", color: "white" }} value={"pink"}>Pink</MenuItem>
                                </Select>
                            </FormControl>
                        </form>
                    </DialogContent>
                    <DialogActions>
                    </DialogActions>
                    <DialogActions>
                        <Button onClick={() => handleSubmit(props.selectedListId)} color="primary">
                            Edit
                    </Button>
                        <Button onClick={handleClose} color="primary" autoFocus>
                            Cancel
                    </Button>
                    </DialogActions>
                </Grid>
            </Dialog>
        </div>
    );
}

const mapStateToProps = (state) => ({
    user: state.users.user,
    selectedListId: state.lists.selectedList
})

export default connect(mapStateToProps, { deleteList })(DeleteList)