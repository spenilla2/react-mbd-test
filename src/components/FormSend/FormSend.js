import React, { useState } from "react";
import { FormControl, FormGroup,FormControlLabel,FormLabel,Checkbox,TextField, Button,  Grid } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import {SignalWifi0BarOutlined, SignalWifi4BarOutlined, Pets, PetsOutlined, PeopleOutline } from "@material-ui/icons";

import firebase from 'firebase';

import "./FormSend.scss";

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

export default function FormSend(props) {
  const classes = useStyles();
  const [state, setState] = useState({
    pets: false,
    wifi: false,
    couple: false,
    checkedG: false,
  });
  const {send} = props;
  const [uploadValue, setUploadValue]= useState('');
  const [formValue, setFormValue] = useState({
    name: "",
    observation: "",
    picture: "",
    price: "",
    wifi:"false",
    pets:"false",
    couple:"false",
    avaible:"",
    state:true
  });
  const handleChange = (event) => {
    setState({ ...state, 
                [event.target.name]: event.target.checked            
              });
    
  };
  const handleUpload = event => {
        const file= event.target.files[0];
        const storageRef = firebase.storage().ref(`/fotosprueba/${file.name}`);
        const task = storageRef.put(file);
        task.on('state_changed', snapshot=>{
            let percentage = ( snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setUploadValue(percentage);            
        }, error => {
            console.log(error.message)
        }, () => {
            task.snapshot.ref.getDownloadURL().then(
                downloadURL => {
                  setUploadValue(100);
                  setFormValue({
                    ...formValue,
                    picture: downloadURL
                  });                  
                }
            );                          
        });
  }        
  const onFormChange = e => {
    var {name, value} = e.target
    setFormValue({
      ...formValue,
      [name]: value
    });    
  };
  console.log(formValue);

  return (
    <div className="form-send-tweet">
      <h2 className="form-send-tweet__title">Registrer of Propertys</h2>
      <form
        onSubmit={event => send(event, formValue)}
        onChange={onFormChange}
        className="form-send-tweet__form"
      >
        <FormControl>
          <FormGroup>
          <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <TextField
                className="form-send-tweet__form-name"
                type="text"
                name="name"
                placeholder="Name of Property"
                margin="normal"
              />
            </Grid>
            <Grid item xs={6}>
              <br></br>
            <FormLabel>Picture</FormLabel>
              <progress value={uploadValue} max="100"></progress>
              <input type="file" onChange={handleUpload} name="picture" placeholder="Picture1"  data-buttonText="Your label here."/>                               
            </Grid>
          </Grid>
          </div>  
          </FormGroup>
          <FormGroup>
          <TextField
              className="form-send-tweet__form-name"
              type="num"
              name="price"
              placeholder="Price"
              margin="normal"
            />            
          </FormGroup>
          <FormGroup>
            <FormLabel>Options</FormLabel>
            <FormGroup row>
            <FormControlLabel
                    control={
                      <Checkbox
                        icon={<SignalWifi0BarOutlined />} 
                        checkedIcon={<SignalWifi4BarOutlined />}
                        checked={state.wifi}
                        onChange={handleChange}
                        name="wifi"
                        color="primary"
                        value={state.wifi}
                      />
                    }
                    label="WIFI"
                  />
            <FormControlLabel
                    control={
                      <Checkbox
                        icon={<Pets />} 
                        checkedIcon={<PetsOutlined />}
                        checked={state.pets}
                        onChange={handleChange}
                        name="pets"
                        color="primary"
                        value={state.pets}
                      />
                    }
                    label="PETS"
                  />
            <FormControlLabel
                    control={
                      <Checkbox
                        icon={<PeopleOutline />} 
                        checkedIcon={<PeopleOutline />}
                        checked={state.couple}
                        onChange={handleChange}
                        name="couple"
                        color="primary"
                        value={state.couple}
                      />
                    }
                    label="couple"
                  />
          </FormGroup>
          </FormGroup>
          <FormGroup>
            <Grid item xs={3}>
            <TextField
              id="date"
              label="Avaible from"
              type="date"
              name="avaible"
              placeholder="Avaible from"
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
            />
              
          
            </Grid>
          </FormGroup>
          <FormGroup>
            <TextField
              className="form-send-tweet__form-textarea"
              name="observation"
              multiline
              rows="6"
              placeholder="Observations"
              margin="normal"
            />
            
          </FormGroup>
          <FormGroup>
            <Button type="submit">Register Property</Button>
          </FormGroup>
        </FormControl>
      </form>
    </div>
  );
}
