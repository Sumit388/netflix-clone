import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import netflixLogo from '../data/netflixlogo.png'
import avatar from '../data/avatar.png'
import "./NetNav.css"

function NetNav() {
const[show,setShow]=useState(false);

const transitionNavBar=()=>{
    if(window.scrollY >100){
        setShow(true);
    }
    else{
        setShow(false);
    }
}


useEffect(()=>{
 window.addEventListener("scroll", transitionNavBar);
 
 return ()=>{
    window.removeEventListener("scroll", transitionNavBar)
 }
},[])


  return (
    <div className={show?"NetNav navBlack":"NetNav"}>
        <div className="NetNav_contents">
      <Link to='/'>
      <img src={netflixLogo} alt="" className='NetNav-logo'/>
      </Link>
      <Link to='/profile'>
      <img src={avatar} alt="" className='NetNav-avatar' />
      </Link>
      </div>    
    </div>
  )
}

export default NetNav