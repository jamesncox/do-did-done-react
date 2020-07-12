import React, { useState } from 'react';
import { connect } from 'react-redux'
import { createTodo } from '../../actions/todos'

import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import { makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import LibraryAddIcon from '@material-ui/icons/LibraryAdd';
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
        [theme.breakpoints.up('md')]: {
            minWidth: 500
        },
    },
    text: {
        width: "100%",
        [theme.breakpoints.up('md')]: {
            width: 400
        },
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 130,
    },
    icon: {
        cursor: "pointer",
    }
}))

function NewTodo(props) {
    const classes = useStyles();

    const [open, setOpen] = React.useState(false);
    const [text, setText] = useState('')
    const [priority, setPriority] = useState('')

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setText('')
        setPriority('')
    }

    const handleText = (e) => {
        setText(e.target.value)
    }

    const handlePriority = (e) => {
        setPriority(e.target.value)
    }

    const handleSubmit = () => {

        const todo = {
            text: text,
            priority: priority,
            complete: "false",
            listId: props.selectedList.id
        }

        props.createTodo(todo)
        setText("")
        setPriority("")
        setOpen(false);
    }


    return (
        <div>
            <Tooltip title="Edit List">
                <LibraryAddIcon onClick={handleClickOpen} className={classes.icon} />
            </Tooltip>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <Grid className={classes.container} container component={Paper} justify="space-between">
                    <DialogTitle>Add Git-R-Do</DialogTitle>
                    <DialogContent>
                        <form noValidate autoComplete="off">
                            <TextField
                                id="standard-basic"
                                label="Git-R-DO"
                                multiline
                                variant="outlined"
                                onChange={handleText}
                                className={classes.text}
                            />
                        </form>
                    </DialogContent>
                    <DialogContent>
                        <form>
                            <FormControl className={classes.formControl}>
                                <InputLabel id="demo-dialog-select-label">Priority Level</InputLabel>
                                <Select
                                    labelId="demo-dialog-select-label"
                                    id="demo-dialog-select"
                                    value={priority}
                                    onChange={handlePriority}
                                    input={<Input />}
                                >
                                    <MenuItem value={"low"}>Low</MenuItem>
                                    <MenuItem value={"medium"}>Medium</MenuItem>
                                    <MenuItem value={"high"}>High</MenuItem>
                                </Select>
                            </FormControl>
                        </form>
                    </DialogContent>
                    <DialogActions>
                    </DialogActions>
                    <DialogActions>
                        <Button onClick={handleSubmit} color="primary">
                            Add
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
    lists: state.lists.lists,
    selectedList: state.lists.selectedList
})

export default connect(mapStateToProps, { createTodo })(NewTodo)