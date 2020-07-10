import React from 'react'
import { connect } from 'react-redux'
import NoListsYet from './NoListsYet'
import DeleteList from './DeleteList'

// import Paper from '@material-ui/core/Paper';
// import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import Tooltip from '@material-ui/core/Tooltip';
import { SELECTED_LIST } from '../../actionTypes';

const useStyles = makeStyles((theme) => ({
    root: {
        width: "98%",
        marginTop: theme.spacing(2),
        margin: "auto",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        [theme.breakpoints.up('md')]: {
            marginTop: theme.spacing(4)
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
        flexDirection: "row",
        justifyContent: "space-between"
    },
    openIcon: {
        cursor: "pointer",
        // marginRight: theme.spacing(2)
    },
    deleteIcon: {
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

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
        props.selectedList(panel)
    }

    const handleSelectList = (list) => {
        props.selectedList(list)
    }

    const renderLists = (id) => {
        const userLists = props.lists.filter(list => list.user_id === id)
        return (
            <div className={classes.root}>
                <Typography className={classes.header}>
                    Git-R-Do Lists
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
                                {/* <Typography className={classes.secondaryHeading}>See your Git-R-Dos</Typography> */}
                            </AccordionSummary>
                            <AccordionDetails className={classes.accordian}>
                                <Tooltip title="Open List">
                                    <OpenInNewIcon className={classes.openIcon} />
                                </Tooltip>
                                <Typography className={classes.typographyOne}>
                                    Click to open
                                </Typography>
                                <Typography className={classes.typographyTwo}>
                                    Delete your list?
                                </Typography>
                                <Tooltip title="Delete List">
                                    <DeleteList />
                                </Tooltip>
                            </AccordionDetails>
                        </Accordion>
                    )
                })}
            </div>
        )
    }

    const hasLists = props.lists.filter(list => list.user_id === props.user.id)
    if (hasLists.length === 0) {
        return <NoListsYet />
    } else {
        return renderLists(props.user.id)
    }
}

const mapStateToProps = (state) => ({
    user: state.users.user,
    lists: state.lists.lists
})

const mapDispatchToProps = (dispatch) => ({
    selectedList: (list) => dispatch({ type: SELECTED_LIST, payload: list })
})

export default connect(mapStateToProps, mapDispatchToProps)(MyLists)