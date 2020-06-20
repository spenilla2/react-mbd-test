import React, { useState, useEffect } from "react";
import fireDb from "../src/firebase-config";
import { Container, Snackbar } from "@material-ui/core/";
import Header from "./components/Header";
import Send from "./components/Send";
import ListCards from "./components/ListCards";
import Auth from "./components/Auth";
import { useUser } from 'reactfire'
import "./App.scss";
function App() {
  const user = useUser();
  const [toastProps, setToastProps] = useState({
    open: false,
    text: null
  });
  const [allCardsFire, setAllCardsFire]= useState([]);
  useEffect(() => {
      const dbOBJ = fireDb.child("propiedades");
      dbOBJ.on('value', function(snapshot){
        setAllCardsFire(snapshot.val());
      });
  },[]); // <==== this will call useEffect again if your id changes
  const allCards = Object.keys(allCardsFire).map(id=>{
    return allCardsFire[id]
  });
  return (
    <div className="App">
      { 
        user && 
        <div>
          <p>Usuario: {user.email}</p>
           <Container className="tweets-simulator" maxWidth={false}>
            <Header />
            <Send setToastProps={setToastProps} allCards={allCards} />
            <ListCards allCards={allCards} />
            <Snackbar
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right"
                }}
                open={toastProps.open}
                autoHideDuration={1000}
                message={<span id="message-id">{toastProps.text}</span>}
              />
           </Container>
        
        </div>
         
      }
    <div className="divsesion">
      <Auth/>
    </div>  
    </div>
    
    
  );
}

export default App;
