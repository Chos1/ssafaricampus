import React from "react";
import ReactDOM from "react-dom/client";
// import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDN9eJ7iuDmyKpLgwAg3FkIUiA5UB9szpM",
  authDomain: "ssfari-campus.firebaseapp.com",
  projectId: "ssfari-campus",
  storageBucket: "ssfari-campus.appspot.com",
  messagingSenderId: "496182597471",
  appId: "1:496182597471:web:ae3889ba0dc0c8504948ea",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log(app);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
reportWebVitals();
