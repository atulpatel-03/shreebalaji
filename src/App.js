import './App.css';
import React, {Fragment, useState, useEffect } from "react";
import { Redirect, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import fire from "./fire";
import Dashboard from "./components/Dashboard";

function App() {


  useEffect(() =>{

    db.collection("Settings").doc('data').onSnapshot((query) => {
        var temp = query.data();
        console.log("rates effect",temp); 
        setFormData(temp);
    })
},[]);

const [formData,setFormData] = useState({
  whatsApp:'',
  email:'',
  playStore:''
})

const {whatsApp, email, playStore} = formData


var db = fire.firestore();


  return (
    <Router>
    <a  class="whats-app" href={`https://wa.me/+91`+ whatsApp} target="_blank">
    <i class="fa fa-whatsapp my-float"></i>
</a>
          <Switch>
          
            <Route exact path="/" component={Dashboard} />
          </Switch>
      </Router>
  );
}

export default App;
