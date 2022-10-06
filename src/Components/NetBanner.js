import React, {useState,  useEffect } from 'react'
import './NetBanner.css'
import axios from './axios';
import requests from "./Request"

function NetBanner() {


    const [movie,setMovie]= useState([]);

    //fetching the different movies from TMDB and setting the value of state movie to one random movie
    //so that the top banner details are random everytime we open the app. 
    useEffect (()=>{
       async function fetchData(){
            const request =await axios.get(requests.fetchNetflixOriginal);
            setMovie(
                request.data.results[
                    Math.floor(Math.random()*request.data.results.length -1)
                ]
            )
            return request;
       };
       fetchData();
    },[])
    
    //function to trunctae the string that is provided to the function
    function truncate(string, n){
      return string?.length>n ? string.substring(0, n-1)+ '...' :string;
    }


  return (
    <header className='NetBanner' 
    style={{
        backgroundSize: `cover`,
        backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path
    }')`,
        backgroundPosition: "center center"
    }}>
      <div className="NetBannerContents">
        <h1 className="netBannerTitle">
            {movie?.title||movie?.name||movie?.original_name}
        </h1>
        <div className="netBannerButtons">
            <button className='netBannerButton'>Play</button>
            <button className='netBannerButton'>My List</button>
        </div>
        <h1 className="netBannerDescription">
            
           {truncate(movie?.overview,150)}
        </h1>
        </div> 

        <div className="banerFadeButton"/>
    </header>
  )
}

export default NetBanner