import React from 'react'
import { connect } from 'react-redux'

import HeaderList from '../Layout/HeaderList'
import NavBarList from '../Layout/NavBarList'

import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import LibraryAddIcon from '@material-ui/icons/LibraryAdd';
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
    List: {
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
        flexDirection: "column",
        // justifyContent: "flex-end",
    },
    openIcon: {
        cursor: "pointer",
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

    const list = props.lists.filter(list => list.category === props.selectedList)

    return (
        <>
            <HeaderList />
            <div className={classes.root}>
                <Accordion
                    key={list[0].id}
                    className={classes.category}
                    expanded={expanded === `${list[0].id}`}
                    onChange={handleChange(`${list[0].id}`)}
                    style={{ backgroundColor: `${list[0].color}` }}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls={`${list[0].id}-content`}
                        id={`${list[0].id}-header`}
                    >
                        <Typography className={classes.heading}>{list[0].category}</Typography>
                    </AccordionSummary>
                    <AccordionDetails className={classes.accordian}>
                        <Tooltip title="Add Git-R-Do">
                            <LibraryAddIcon className={classes.openIcon} />
                        </Tooltip>
                    </AccordionDetails>
                </Accordion>
            </div>
            <NavBarList />
        </>
    )
}

const mapStateToProps = state => ({
    lists: state.lists.lists,
    selectedList: state.lists.selectedList
})

export default connect(mapStateToProps)(SelectedList)