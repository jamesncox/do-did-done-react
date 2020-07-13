import React, { useState } from 'react'
import { connect } from 'react-redux'
import { changeTodoStatus } from '../../actions/todos'

import HeaderList from '../Layout/HeaderList'
import NavBarList from '../Layout/NavBarList'

import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import TableContainer from '@material-ui/core/TableContainer';
import Checkbox from '@material-ui/core/Checkbox';

import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

const useStyles = makeStyles((theme) => ({
    root: {
        width: "98%",
        marginTop: theme.spacing(2),
        margin: "auto",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: theme.spacing(10),
        [theme.breakpoints.up('md')]: {
            marginTop: theme.spacing(10)
        },
    },
    heading: {
        fontSize: theme.typography.pxToRem(20),
        flexBasis: '33.33%',
        flexShrink: 0,
    },
    todoTable: {
        color: "black"
    },
    category: {
        color: "white",
        margin: theme.spacing(1),
        [theme.breakpoints.up('xs')]: {
            width: "90%"
        },
        [theme.breakpoints.up('sm')]: {
            width: "75%"
        },
        [theme.breakpoints.up('md')]: {
            width: "50%"
        },
        [theme.breakpoints.up('lg')]: {
            width: "25%"
        },
    },
    accordian: {
        display: "flex",
        flexDirection: "column",
        backgroundColor: "white",
        borderBottom: "solid 2px rgba(167, 167, 167, 0.15)"
    },
    divider: {
        height: "2px",
        backgroundColor: "rgba(167, 167, 167, 0.15)"
    }
}))

function CompleteTodos(props) {
    const classes = useStyles();
    const [expanded, setExpanded] = useState(false);
    const [checked] = useState(true);

    const handleCheckedComplete = (todo) => {
        const todoObj = {
            text: todo.text,
            priority: todo.priority,
            complete: "false",
            listId: todo.list_id,
            todoId: todo.id
        }

        props.changeTodoStatus(todoObj)
    }

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    }

    const list = props.selectedList
    const listTodos = props.todos.filter(todo => todo.list_id === list.id)
    const completedTodos = listTodos.filter(todo => todo.complete === "true")

    return (
        <>
            <HeaderList />
            <TableContainer className={classes.root}>
                <Accordion
                    key={list.id}
                    className={classes.category}
                    onChange={handleChange(`${list.id}`)}
                    style={{ backgroundColor: "#bdbdbd" }}
                    defaultExpanded={true}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls={`${list.id}-content`}
                        id={`${list.id}-header`}
                    >
                        <Typography className={classes.heading}>Complete</Typography>
                    </AccordionSummary>
                    <AccordionDetails className={classes.accordian}>
                        {completedTodos.map((todo) => (
                            <List key={todo.id} component="nav" aria-label="mailbox folders" className={classes.todoTable}>
                                <ListItem>
                                    <Checkbox
                                        checked={checked}
                                        // color="primary"
                                        onChange={() => handleCheckedComplete(todo)}
                                        inputProps={{ 'aria-label': 'primary checkbox' }}
                                    />
                                    <ListItemText primary={todo.text} />
                                    <Checkbox
                                        checkedIcon={<DeleteForeverIcon />}
                                        icon={<DeleteOutlineIcon />}
                                        inputProps={{ 'aria-label': 'indeterminate checkbox' }}
                                    />
                                </ListItem>
                                <Divider className={classes.divider} />
                            </List>
                        ))}
                    </AccordionDetails>
                </Accordion>
            </TableContainer>
            <NavBarList />
        </>
    )
}

const mapStateToProps = state => ({
    lists: state.lists.lists,
    selectedList: state.lists.selectedList,
    todos: state.todos.todos
})

export default connect(mapStateToProps, { changeTodoStatus })(CompleteTodos)