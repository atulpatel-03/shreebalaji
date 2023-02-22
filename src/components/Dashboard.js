import React, {useEffect, useState} from 'react';
import { Link, Redirect } from "react-router-dom";
import Navbar from './Navbar';
import "../asserts/scss/Dashboard.scss"
import Logo from "../asserts/images/logo.png"
import Carousell from './Carousell';
import fire from '../fire';

const Dashboard = () => {

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
    <div className='main-div'>
        <div className='heading-div'>
        <h1>WELCOME TO SATTA MATKA SHREE BALAJI</h1>
        </div>

        <div className='middle-div'>
          <img className='mid-img' src={Logo}></img>
          <div className='details'>ADD YOUR KNOWLEDGE WHEREVER & WHENEVER</div>
        </div>

        <div class="bg-text">
          <div className='btn-div'>
          <a href="https://firebasestorage.googleapis.com/v0/b/shreebalaji-b8500.appspot.com/o/app-arm64-v8a-release.apk?alt=media&token=e679e87c-f6f0-4b27-bc5e-db6cce4c9200" className='btn btn-large download-btn'>Download Apk Now</a>
          <Link to={playStore} className='btn btn-large download-btn'>Download on Google Play</Link>
          <a  className="btn btn-large download-btn" href={`https://wa.me/+91`+ whatsApp} target="_blank">Chat Now Whatsapp</a>
          <a href={`tel:+91`+whatsApp} className='btn btn-large download-btn'>Call Now</a>
        </div>

      </div>
      <div className='works'>How it Works</div>
      
        <Carousell />
        </div>
  )
}

export default Dashboard