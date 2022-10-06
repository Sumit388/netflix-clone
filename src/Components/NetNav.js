import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import netflixLogo from '../data/netflixlogo.png'
import avatar from '../data/avatar.png'
import "./NetNav.css"

function NetNav() {
  //state to show navbar background as balack or not.
const[show,setShow]=useState(false);

//setting the navbar background as black if scrollY is more than 100.
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
        {/*Link to the main screen*/}
      <Link to='/'>
      <img src={netflixLogo} alt="" className='NetNav-logo'/>
      </Link>
      {/*Link to the profile screen*/}
      <Link to='/profile'>
      <img src={avatar} alt="" className='NetNav-avatar' />
      </Link>
      </div>    
    </div>
  )
}

export default NetNav