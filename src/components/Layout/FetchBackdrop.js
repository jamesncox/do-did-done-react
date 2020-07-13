// import React, { useState, useEffect } from 'react';
// import { connect, useDispatch } from 'react-redux'
// import { Redirect } from "react-router";

// import { getLists } from '../../actions/lists'
// import { getTodos } from '../../actions/todos'
// import Backdrop from '@material-ui/core/Backdrop';
// import CircularProgress from '@material-ui/core/CircularProgress';
// import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles((theme) => ({
//     backdrop: {
//         zIndex: theme.zIndex.drawer + 1,
//         color: '#fff',
//     },
// }));

// function FetchBackdrop(props) {
//     const classes = useStyles();
//     const dispatch = useDispatch()
//     const [open] = useState(true);

//     useEffect(() => {
//         if (props.loadingUser) {
//             dispatch(getLists(props.user.id))
//             dispatch(getTodos(props.user.id))
//         }
//     }, [dispatch, props.user.id, props.loadingUser])

//     if (props.loggedIn === true && props.loadingLists === false) {
//         getLists(props.user.id)
//         getTodos(props.user.id)
//         return (
//             <Redirect to="/Profile" />
//         )
//     } else {
//         return (
//             <div>
//                 <Backdrop className={classes.backdrop} open={open}>
//                     <CircularProgress thickness={4} color="inherit" />
//                 </Backdrop>
//             </div>
//         )
//     }
// }

// const mapStateToProps = (state) => ({
//     user: state.users.user,
//     loggedIn: state.users.loggedIn,
//     loadingLists: state.lists.loadingLists,
//     loadingUser: state.users.loadingUser
// })

// export default connect(mapStateToProps, { getLists, getTodos })(FetchBackdrop)