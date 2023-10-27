import React, {useEffect, useState} from 'react';
import { Link, Redirect } from "react-router-dom";
import Navbar from './Navbar';
import "../asserts/scss/Dashboard.scss"
import Logo from "../asserts/images/logo.png"
import Carousell from './Carousell';
import fire from '../fire';
import playApp from "../asserts/images/1s.png";
import EasyToUse from "../asserts/images/2s.png";
import Upi from "../asserts/images/3s.png";
import AllType from "../asserts/images/4s.png";
import BestOn from "../asserts/images/5s.png";


const Dashboard = () => {

  useEffect(() =>{
    console.log("use effect ")
    db.collection("Settings").doc('data').onSnapshot((query) => {
        var temp = query.data();
        console.log("rates effect",temp); 
        setFormData(temp);
    })

    var firebase_storage = fire.storage();
    var storageRef = firebase_storage.ref();
    
    storageRef.child('app-arm64-v8a-release.apk').getDownloadURL()
      .then((url) => {
        console.log("url ",url)
        set_apk_link(url);
      })
      .catch((error) => {console.log("errr : ",error)});
},[]);

const [formData,setFormData] = useState({
  whatsApp:'',
  email:'',
  playStore:''
})
const [apk_link, set_apk_link] = useState('');

const {whatsApp, email, playStore} = formData
   
    var db = fire.firestore();

  return (
    <div className='mainnn'>
    <div className='main-div'>
        <div className='heading-div'>
        <h1>WELCOME TO SATTA MATKA ROYAL KALYAN MATKA</h1>
        </div>

        <div className='middle-div'>
          <img className='mid-img' src={Logo}></img>
          <div className='details'>ADD YOUR KNOWLEDGE WHEREVER & WHENEVER</div>
        </div>

        <div class="bg-text">
          <div className='btn-div'>
          <a href={apk_link} className='btn btn-large download-btn'>Download Apk Now</a>
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