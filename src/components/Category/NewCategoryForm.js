import React, { useState } from 'react'

import { makeStyles } from '@material-ui/core/styles';
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

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
}));

function NewCategoryForm(props) {
    const classes = useStyles();
    const [category, setCategory] = React.useState('');
    const [open, setOpen] = React.useState(true);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = (event) => {
        setCategory(Number(event.target.value) || '');
    };

    return (
        <>
            <DialogTitle>Select Category</DialogTitle>
            <DialogContent>
                <form className={classes.container}>
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
                            <MenuItem value={"Wellness"}>Wellness</MenuItem>
                            <MenuItem value={"Dreading"}>Dreading</MenuItem>
                        </Select>
                    </FormControl>
                </form>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Cancel
                </Button>
                <Button onClick={handleClose} color="primary">
                    Ok
                </Button>
            </DialogActions>
        </>
    )
}

export default NewCategoryForm