import React from 'react'
import { connect } from 'react-redux'
import { signupUser } from '../../actions/users'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    button: {
        marginTop: theme.spacing(2),
        fontSize: ".7rem",
        backgroundColor: "rgba(22, 22, 22, 0.4)"
    },
}));

function TryAsGuest(props) {
    const classes = useStyles();

    const randomNumber = () => {
        const rand = Math.floor((Math.random() * 1000000) + 1)
        return rand.toString()
    }

    const handleGuestSignUp = e => {
        e.preventDefault()
        const user = {
            username: "Guest" + randomNumber(),
            password: "guest",
            password_confirmation: "guest"
        }
        props.signupUser(props.token, user)
    }

    return (
        <div>
            <Button
                size="small"
                className={classes.button}
                variant="contained"
                color="primary"
                onClick={handleGuestSignUp}
            >
                Try As Guest
        </Button>
        </div>
    )
}

const mapStateToProps = state => ({
    token: state.sessions.token,
})

export default connect(mapStateToProps, { signupUser })(TryAsGuest)