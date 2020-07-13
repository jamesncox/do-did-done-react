import React, { useState } from 'react';
import { connect } from 'react-redux'
import { createList } from '../../actions/lists'

import BackdropLoader from '../Layout/BackdropLoader'
import Errors from '../Layout/Errors'

import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Tooltip from '@material-ui/core/Tooltip';
import { makeStyles } from '@material-ui/core/styles';

import PostAddIcon from '@material-ui/icons/PostAdd';

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
    icon: {
        [theme.breakpoints.up('md')]: {
            fontSize: "2.5em",
            cursor: "pointer",
            marginLeft: theme.spacing(1)
        },
    },
}))

function AddList(props) {
    const classes = useStyles();

    const [open, setOpen] = useState(false);
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

    const handleChange = (event) => {
        let category = event.target.value
        setCategory(category);

        switch (category) {
            case "Work":
                setColor("#1976d2")
                break;
            case "Family":
                setColor("#00897b")
                break;
            case "Chores":
                setColor("#ef6c00")
                break;
            case "Fun":
                setColor("#c2185b")
                break;
            case "Dreading":
                setColor("#e53935")
                break;
            case "Wellness":
                setColor("#8e24aa")
                break;
            case "Financial":
                setColor("#00c853")
                break;
            case "Long-term":
                setColor("#ffb300")
                break;
            case "Misc":
                setColor("#0d47a1")
                break;
            default:
                setColor("")
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault()

        const list = {
            category: category,
            color: color,
            userId: props.user.id
        }

        props.createList(list)
        setCategory("")
        setColor("")
        setOpen(false);
    }

    return (
        <div>
            <Errors />
            {props.loadingSingleList === true ? <BackdropLoader /> : null}
            <Tooltip title="Add List">
                <PostAddIcon className={classes.icon} onClick={handleClickOpen} />
            </Tooltip>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <Grid className={classes.container} container component={Paper} justify="space-between">
                    <DialogTitle>Select List Category</DialogTitle>
                    <DialogContent>
                        <form>
                            <FormControl className={classes.formControl}>
                                <InputLabel id="demo-dialog-select-label">Categories</InputLabel>
                                <Select
                                    labelId="demo-dialog-select-label"
                                    id="demo-dialog-select"
                                    value={category}
                                    onChange={handleChange}
                                    input={<Input />}
                                >
                                    <MenuItem value={"Work"}>Work</MenuItem>
                                    <MenuItem value={"Family"}>Family</MenuItem>
                                    <MenuItem value={"Chores"}>Chores</MenuItem>
                                    <MenuItem value={"Fun"}>Fun</MenuItem>
                                    <MenuItem value={"Dreading"}>Dreading</MenuItem>
                                    <MenuItem value={"Wellness"}>Wellness</MenuItem>
                                    <MenuItem value={"Financial"}>Financial</MenuItem>
                                    <MenuItem value={"Long-term"}>Long-term</MenuItem>
                                    <MenuItem value={"Misc"}>Misc.</MenuItem>
                                </Select>
                            </FormControl>
                        </form>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleSubmit} color="primary">
                            Add
                        </Button>
                        <Button onClick={handleClose} color="secondary">
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
    loadingSingleList: state.lists.loadingSingleList
})

export default connect(mapStateToProps, { createList })(AddList)