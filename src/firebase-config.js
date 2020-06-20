import * as firebase from "firebase";
const config = {
    apiKey: "AIzaSyBwWa3MHXWNsh1KnaQARE196LlfP31npRc",
    authDomain: "reactfirebaseprueba-c4db9.firebaseapp.com",
    databaseURL: "https://reactfirebaseprueba-c4db9.firebaseio.com",
    projectId: "reactfirebaseprueba-c4db9",
    storageBucket: "reactfirebaseprueba-c4db9.appspot.com",
    messagingSenderId: "661304046609",
    appId: "1:661304046609:web:35d5569ba2310516de2db0",
    measurementId: "G-796YTRNJDR"
};
// Initialize Firebase
var fireDb = firebase.initializeApp(config);
export default fireDb.database().ref();

