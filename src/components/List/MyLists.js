import React from 'react'
import { connect } from 'react-redux'

import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
// import Typography from '@material-ui/core/Typography';

import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

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
        // fontWeight: "bold",
        fontSize: "1.8rem",
    },
    category: {
        // display: 'flex',
        // width: "75%",
        // height: "3rem",
        // margin: "auto",
        // textAlign: "center",
        color: "white",
        // fontFamily: "'Nanum Pen Script', cursive",
        margin: theme.spacing(1),
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
}))

function MyLists(props) {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

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
                            <AccordionDetails>
                                <Typography>
                                    Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar
                                    diam eros in elit. Pellentesque convallis laoreet laoreet.
                                    </Typography>
                            </AccordionDetails>
                        </Accordion>


                        // <Button
                        //     key={list.id}
                        //     style={{ backgroundColor: `${list.color}` }}
                        //     className={classes.category}
                        //     variant="contained"
                        // >
                        //     {list.category}
                        // </Button>
                    )
                })}
            </div>
        )
    }

    const hasLists = props.lists.filter(list => list.user_id === props.user.id)
    if (hasLists.length === 0) {
        return <h1> No Lists Yet </h1>
    } else {
        return renderLists(props.user.id)
    }
}

const mapStateToProps = (state) => ({
    user: state.users.user,
    lists: state.lists.lists
})

export default connect(mapStateToProps)(MyLists)