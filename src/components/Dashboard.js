import React, {useEffect, useState} from 'react';
import { Link, Redirect } from "react-router-dom";
import Navbar from './Navbar';
import "../asserts/scss/Dashboard.scss"
import Logo from "../asserts/images/logo.png"
import Carousell from './Carousell';
import fire from '../fire';
import playApp from "../asserts/images/1s.jpeg";
import EasyToUse from "../asserts/images/2s.jpeg";
import Upi from "../asserts/images/3s.jpeg";
import AllType from "../asserts/images/4s.jpeg";
import BestOn from "../asserts/images/5s.jpeg";


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
    <div className='mainnn'>
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
      </div>
      <div className='play-app'>
        <img className='play-img' src={playApp}></img>
      </div>
      <div className='works'>How it Works</div>
      
        <Carousell />
        <hr></hr>
        <div className='play-app'>
        <img className='play-img' src={EasyToUse}></img>
      </div>
     
      
      <hr></hr>
      <div className='play-app'>
        <img className='play-img' src={AllType}></img>
      </div>
      <hr></hr>
      <div className='play-app'>
        <img className='play-img' src={Upi}></img>
      </div>
      <hr></hr>
      <div className='play-app'>
        <img className='play-img' src={BestOn}></img>
      </div>


        
        </div>
  )
}

export default Dashboard