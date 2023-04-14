import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { initializeApp } from "firebase/app";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAL8NkIrSyVg5mN1aBCr3cPQQd4g2GqyNY',
  authDomain: 'bimviewer-4feec.firebaseapp.com',
  projectId: 'bimviewer-4feec',
  storageBucket: 'bimviewer-4feec.appspot.com',
  messagingSenderId: '968997498967',
  appId: '1:968997498967:web:60497125ca826495fbf312',
  measurementId: 'G-M8M8KJJNYC',
}

// Initialize Firebase
initializeApp(firebaseConfig);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
