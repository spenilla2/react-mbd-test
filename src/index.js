import React, {Suspense} from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "./index.scss";
import firebase from './firebase-config'
import {FirebaseAppProvider} from 'reactfire'

ReactDOM.render((
    <FirebaseAppProvider firebaseConfig={firebase}>
        <Suspense fallback={'Conectando a la Base de Datos'}>
            <App />
        </Suspense>
    </FirebaseAppProvider>
    ), document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
