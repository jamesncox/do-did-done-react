import React, { useState } from 'react'
import { connect } from 'react-redux'
import { changeTodoStatus } from '../../actions/todos'

import HeaderList from '../Layout/HeaderList'
import NavBarList from '../Layout/NavBarList'
import NewTodo from '../Todo/NewTodo'
import CompleteTodos from '../Todo/CompleteTodos'
import BackdropLoader from '../Layout/BackdropLoader'

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
import Tooltip from '@material-ui/core/Tooltip';

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
            marginTop: theme.spacing(12)
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
        borderBottom: "solid 2px rgba(167, 167, 167, 0.3)",
    },
    divider: {
        height: "2px",
        backgroundColor: "rgba(167, 167, 167, 0.15)"
    },
    priority: {
        // marginLeft: theme.spacing(1),
        marginTop: theme.spacing(1)
    }
}))

function SelectedList(props) {
    const classes = useStyles();
    const [expanded, setExpanded] = useState(false);

    const handleCheckedComplete = (todo) => {
        const todoObj = {
            text: todo.text,
            priority: todo.priority,
            complete: "true",
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
    const notCompleteTodos = listTodos.filter(todo => todo.complete === "false")
    const priorityHighTodos = notCompleteTodos.filter(todo => todo.priority === "high")
    const priorityMediumTodos = notCompleteTodos.filter(todo => todo.priority === "medium")
    const priorityLowTodos = notCompleteTodos.filter(todo => todo.priority === "low")
    const completedTodos = listTodos.filter(todo => todo.complete === "true")

    return (
        <>
            <HeaderList />
            {props.loadingTodos === true ? <BackdropLoader /> : null}
            <TableContainer className={classes.root}>
                <Accordion
                    key={list.id}
                    className={classes.category}
                    // expanded={expanded === `${list.id}`}
                    onChange={handleChange(`${list.id}`)}
                    style={{ backgroundColor: `${list.color}` }}
                    defaultExpanded={true}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls={`${list.id}-content`}
                        id={`${list.id}-header`}
                    >
                        <Typography className={classes.heading}>{list.category}</Typography>
                    </AccordionSummary>
                    <AccordionDetails className={classes.accordian}>
                        <NewTodo />
                        {!priorityHighTodos[0] === false ? <Typography style={{ color: "red" }}>
                            High
                        </Typography> : null}
                        {priorityHighTodos.map((todo) => (
                            <List key={todo.id} component="nav" aria-label="mailbox folders" className={classes.todoTable}>
                                <ListItem style={{ backgroundColor: "rgba(207, 0, 0, 0.05)" }}>
                                    <Tooltip title="Mark Complete">
                                        <Checkbox
                                            onChange={() => handleCheckedComplete(todo)}
                                            inputProps={{ 'aria-label': 'primary checkbox' }}
                                        />
                                    </Tooltip>
                                    <ListItemText primary={todo.text} />
                                </ListItem>
                                <Divider className={classes.divider} />
                            </List>
                        ))}
                        {!priorityMediumTodos[0] === false ? <Typography className={classes.priority} style={{ color: "orange" }}>
                            Medium
                        </Typography> : null}
                        {priorityMediumTodos.map((todo) => (
                            <List key={todo.id} component="nav" aria-label="mailbox folders" className={classes.todoTable}>
                                <ListItem style={{ backgroundColor: "rgba(175, 99, 0, 0.05)" }}>
                                    <Tooltip title="Mark Complete">
                                        <Checkbox
                                            onChange={() => handleCheckedComplete(todo)}
                                            inputProps={{ 'aria-label': 'primary checkbox' }}
                                        />
                                    </Tooltip>
                                    <ListItemText primary={todo.text} />
                                </ListItem>
                                <Divider className={classes.divider} />
                            </List>
                        ))}
                        {!priorityLowTodos[0] === false ? <Typography className={classes.priority} style={{ color: "green" }}>
                            Low
                        </Typography> : null}
                        {priorityLowTodos.map((todo) => (
                            <List key={todo.id} component="nav" aria-label="mailbox folders" className={classes.todoTable}>
                                <ListItem style={{ backgroundColor: "rgba(0, 175, 29, 0.05)" }}>
                                    <Tooltip title="Mark Complete">
                                        <Checkbox
                                            onChange={() => handleCheckedComplete(todo)}
                                            inputProps={{ 'aria-label': 'primary checkbox' }}
                                        />
                                    </Tooltip>
                                    <ListItemText primary={todo.text} />
                                </ListItem>
                                <Divider className={classes.divider} />
                            </List>
                        ))}
                    </AccordionDetails>
                </Accordion>
            </TableContainer>
            {!completedTodos[0] === false ? <CompleteTodos /> : null}
            <NavBarList />
        </>
    )
}

const mapStateToProps = state => ({
    lists: state.lists.lists,
    selectedList: state.lists.selectedList,
    todos: state.todos.todos,
    loadingTodos: state.todos.loadingTodos
})

export default connect(mapStateToProps, { changeTodoStatus })(SelectedList)