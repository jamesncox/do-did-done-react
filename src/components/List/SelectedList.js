import React from 'react'
import { connect } from 'react-redux'

import HeaderList from '../Layout/HeaderList'
import NavBarList from '../Layout/NavBarList'
import NewTodo from '../Todo/NewTodo'

import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

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
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(20),
        color: theme.palette.text.secondary,
    },
    todoTable: {
        width: "100%"
    },
    category: {
        color: "white",
        margin: theme.spacing(1),
        [theme.breakpoints.up('xs')]: {
            width: "75%"
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
    },
    typographyOne: {
        opacity: "50%",
        [theme.breakpoints.down('xs')]: {
            fontSize: ".8rem",
        },
    },
}))

function SelectedList(props) {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    }

    const list = props.selectedList
    const listTodos = props.todos.filter(todo => todo.list_id === list.id)

    return (
        <>
            <HeaderList />
            <TableContainer className={classes.root}>
                <Accordion
                    key={list.id}
                    className={classes.category}
                    expanded={expanded === `${list.id}`}
                    onChange={handleChange(`${list.id}`)}
                    style={{ backgroundColor: `${list.color}` }}
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
                        <TableBody>
                            {listTodos.map((todo) => (
                                <TableRow hover={true} key={todo.id}>
                                    <TableCell>{todo.text}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
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

export default connect(mapStateToProps)(SelectedList)