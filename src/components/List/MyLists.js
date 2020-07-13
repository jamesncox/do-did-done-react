import React from 'react'
import { connect } from 'react-redux'
import { useHistory } from "react-router-dom";
import { SELECTED_LIST, SELECTED_LIST_CATEGORY } from '../../actionTypes';

import NoListsYet from './NoListsYet'
import DeleteList from './DeleteList'

import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
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
            marginTop: theme.spacing(4)
        },
    },
    heading: {
        fontSize: theme.typography.pxToRem(20),
        flexBasis: '35.33%',
        flexShrink: 0,
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(20),
        color: theme.palette.text.secondary,
    },
    header: {
        color: "rgba(27, 27, 27, .5)",
        textAlign: "center",
        fontFamily: "'Nanum Pen Script', cursive",
        fontSize: "1.8rem",
    },
    category: {
        color: "white",
        margin: theme.spacing(1),
        [theme.breakpoints.up('xs')]: {
            width: "80%"
        },
        [theme.breakpoints.up('sm')]: {
            width: "60%"
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
        flexDirection: "row",
        justifyContent: "space-between",
    },
    openIcon: {
        cursor: "pointer",
    },
    typographyOne: {
        opacity: "50%",
        [theme.breakpoints.down('xs')]: {
            fontSize: ".8rem",
            marginRight: "0",
        },
        [theme.breakpoints.up('sm')]: {
            marginRight: theme.spacing(5),
        },
    },
    typographyTwo: {
        opacity: "50%",
        [theme.breakpoints.down('xs')]: {
            fontSize: ".8rem",
            marginLeft: "0",
        },
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(5),
        },
    }
}))

function MyLists(props) {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    const history = useHistory();

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
        props.selectedList(panel)
    }

    const openSelectedList = (category) => {
        props.selectedListCategory(category)
        let path = category
        history.push(path)
    }

    const renderLists = (id) => {
        const userLists = props.lists.filter(list => list.user_id === id)
        return (
            <div className={classes.root}>
                <Typography className={classes.header}>
                    Your Lists
                </Typography>
                {userLists.map(list => {
                    return (
                        <Accordion key={list.id} className={classes.category} expanded={expanded === `${list.id}`} onChange={handleChange(`${list.id}`)} style={{ backgroundColor: `${list.color}` }}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls={`${list.id}-content`}
                                id={`${list.id}-header`}
                            >
                                <Typography className={classes.heading}>{list.category}</Typography>
                            </AccordionSummary>
                            <AccordionDetails className={classes.accordian}>
                                <Tooltip title="Open List">
                                    <OpenInNewIcon className={classes.openIcon} onClick={() => openSelectedList(list.category)} />
                                </Tooltip>
                                <Typography className={classes.typographyOne}>
                                    Manage List
                                </Typography>
                                <Typography className={classes.typographyTwo}>
                                    Delete list
                                </Typography>
                                <DeleteList />
                            </AccordionDetails>
                        </Accordion>
                    )
                })}
            </div>
        )
    }

    const hasLists = props.lists.filter(list => list.user_id === props.user.id)
    if (hasLists.length !== 0) {
        return renderLists(props.user.id)
    } else {
        return props.loadingLists === false ? <NoListsYet /> : null
    }
}

const mapStateToProps = (state) => ({
    user: state.users.user,
    lists: state.lists.lists,
    loadingLists: state.lists.loadingLists,
    loadingSingleList: state.lists.loadingSingleList,
    loadingUser: state.users.loadingUser
})

const mapDispatchToProps = (dispatch) => ({
    selectedList: (list) => dispatch({ type: SELECTED_LIST, payload: list }),
    selectedListCategory: (category) => dispatch({ type: SELECTED_LIST_CATEGORY, payload: category })
})

export default connect(mapStateToProps, mapDispatchToProps)(MyLists)