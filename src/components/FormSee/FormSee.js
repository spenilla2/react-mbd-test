import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {SignalWifi0BarOutlined, Pets, PeopleOutline } from "@material-ui/icons";
import "./FormSee.scss";
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
export default function FormSee(props) {
  const {forminfo} = props;
  console.log(forminfo._id);
  const classes = useStyles();

  return (
    <div className="form-see">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}><h2>PROPERTY # {forminfo._id}</h2></Paper>
        </Grid>
        <Grid item xs={12} sm={8}>
          <Paper className={classes.paper}><b>{forminfo.name}</b></Paper>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={4}>
                <Paper className={classes.paper}><b>PRICE: </b></Paper></Grid>
            <Grid item xs={12} sm={8}>
              <Paper className={classes.paper}>{forminfo.price}</Paper>
            </Grid>
            <Grid item xs={12} sm={12}>
            <Paper className={classes.paper}><b>OPTIONS</b>
            <br></br>
            <br></br>
            <SignalWifi0BarOutlined /> WIFI <span></span>
            <Pets /> PETS <span></span>
            <PeopleOutline /> COUPLE
            </Paper>
            </Grid>          
          </Grid>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper}>
            <img src={forminfo.picture} width="200px" alt="" />
          </Paper>
        </Grid>
        <Grid container spacing={1}>
          <Grid item xs={6} sm={3}>
            <Paper className={classes.paper}><b>AVAIBLE FROM</b></Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper className={classes.paper}>{forminfo.avaible}</Paper>
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid item xs={6} sm={3}>
            <Paper className={classes.paper}><b>OBSERVATION</b></Paper>
          </Grid>
          <Grid item xs={12} sm={12}>
            <Paper className={classes.paper}>{forminfo.observation}</Paper>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
/*
import React, { useState, useEffect } from "react";
import { FormControl, FormGroup,FormControlLabel,FormLabel,Checkbox,TextField, Button,  Grid } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import {SignalWifi0BarOutlined, SignalWifi4BarOutlined, Pets, PetsOutlined, PeopleOutline } from "@material-ui/icons";
import {useFirebaseApp, useUser, useFirestoreCollection } from 'reactfire'
import fireDb from "../../firebase-config";
import firebase from 'firebase';

import "./FormSee.scss";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }
}));
export default function FormSee(props) {
  const {forminfo} = props;
  console.log(forminfo._id);
    return (
      <div className="form-see">
        <h2 className="form-see__title">Property id # {forminfo._id}</h2>
      <form
       className="form-see__form">

       <FormControl>
         <FormGroup>
         <div>
         <Grid container spacing={3}>
           <Grid item xs={6}>
           <FormLabel>Name</FormLabel>
           <FormLabel>{forminfo.name}</FormLabel>
           </Grid>
           <Grid item xs={6}>
            <div className="form1">
            </div> 
           <FormLabel>Picture</FormLabel>
             <img src={forminfo.picture} alt="" width="200px" />                               
           </Grid>
         </Grid>
         </div>  
         </FormGroup>
         <FormGroup>
         <FormLabel>Price</FormLabel>
         </FormGroup>
         <FormGroup>
           <FormLabel>Options</FormLabel>
           <FormGroup row>
           <FormControlLabel
                   control={
                     <Checkbox
                       icon={<SignalWifi0BarOutlined />} 
                       checkedIcon={<SignalWifi4BarOutlined />}
                       checked='True'
                       name="wifi"
                       color="primary"                        
                     />
                   }
                   label="WIFI"
                 />
           <FormControlLabel
                   control={
                     <Checkbox
                       icon={<Pets />} 
                       checkedIcon={<PetsOutlined />}
                       checked='True'
                       name="pets"
                       color="primary"                        
                     />
                   }
                   label="PETS"
                 />
           <FormControlLabel
                   control={
                     <Checkbox
                       icon={<PeopleOutline />} 
                       checkedIcon={<PeopleOutline />}
                       checked='True'
                       name="couple"
                       color="primary"                        
                     />
                   }
                   label="couple"
                 />
         </FormGroup>
         </FormGroup>
         <FormGroup>
           <Grid item xs={3}>
           Avaible From  
         
           </Grid>
         </FormGroup>
         <FormGroup>
           Observation
           
         </FormGroup>
         <FormGroup>
           <Button type="submit">Register Property</Button>
         </FormGroup>
       </FormControl>
     </form>
   
     </div> );
}*/