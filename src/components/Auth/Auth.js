import React,{useState} from 'react';
import 'firebase/auth';
import { TextField, Button,  Grid } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { useFirebaseApp, useUser } from 'reactfire';
import Paper from '@material-ui/core/Paper';

import "./Auth.scss";
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));
export default(props) =>{
    const classes = useStyles();
    const [email, setEmail]= useState('');
    const [password, setPassword]= useState('');
    const firebase = useFirebaseApp();
    const user = useUser();
    const login = async() =>{
        await firebase.auth().signInWithEmailAndPassword(email, password);
    }
    const submit = async() => {
        await firebase.auth().createUserWithEmailAndPassword(email, password);
    }
    const logout = async() =>{
        await firebase.auth().signOut();
    }
    return(
        <div>
            {
             !user &&
            <div className="form-auth">
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                    <Paper className={classes.paper}>LOG IN</Paper>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <Paper className={classes.paper}>
                        <label htmlFor="email">E-Mail</label>                        
                    </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <Paper className={classes.paper}>
                        <TextField className="form-auth-email" type="email" id="email" onChange={(event)=> setEmail(event.target.value)} />
                    </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <Paper className={classes.paper}>
                        <label htmlFor="password">Password</label>  
                    </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <Paper className={classes.paper}>
                    <TextField className="form-auth-pass" type="password" id="password" onChange={(event)=> setPassword(event.target.value)} />
                    </Paper>
                    </Grid>
                    <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <Button onClick={login}>Start Sesion</Button>
                        <Button onClick={submit}>Create User</Button> 
                    </Paper>
                    </Grid>                    
                </Grid>                
            </div>
            }
            {
                user &&
                <button onClick={logout}>Cerrar Sesion</button>
            }
        </div>
    );
}