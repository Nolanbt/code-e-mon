import React from "react";
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom"
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { useAuth0 } from "@auth0/auth0-react";

const useStyles = makeStyles({
    root: {
        background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 0px 5px 2px red',
        color: 'white',
        height: 48,
        padding: '0 30px',
        marginTop: 10
    },
    other: {
        background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 0px 5px 2px green',
        color: 'white',
        height: 48,
        padding: '0 30px',
        marginTop: 10
    },
});

const styles= {
    body: {
    background: "radial-gradient(white, green 200%)",
    padding: "40vh",
    textAlign: "center"
    },
    header: {
        marginTop: -260
    }
}

function Selection() {
    const classes = useStyles();
    const { logout, user, isAuthenticated } = useAuth0();

    console.log(window.location)

    return (
        <div style={styles.body}>
            <h1 style={styles.header}>Selection Page</h1>
            <Grid container spacing={2} alignItems="flex-end" justify="flex-end" direction="column">
                {isAuthenticated ? 
                <Button onClick={() => logout({ returnTo: window.location.origin })} className={classes.root}>Logout</Button>
                    :
                <Link to="/" style={{textDecoration: 'none'}}>
                    <Button className={classes.root}>Go Back</Button>
                </Link>
                }
                <Button className={classes.other}>Begin Battle!</Button>
            </Grid>
        </div>
    )
}

export default Selection