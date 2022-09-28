import React, { useState } from 'react'
import { useEffect } from 'react';
import './Row.css'
import axios from './axios'
import { Link } from 'react-router-dom';
import load from "../data/load.jpg"

function Row({title, fetchUrl, isLargeRow=false, modifyDetails2, delay}) {
    const baseUrl="https://image.tmdb.org/t/p/original/";
    const[movies,setMovies]=useState([]);
    const[prede,setprede]=useState(()=>{return true});
    const[error,setError]=useState(()=>{return false});
   
    useEffect(()=>{
        setTimeout(()=>{
         setprede(false);
        },delay)
      },[delay])

    useEffect(()=>{
        async function fetchData(){
            const request= await axios.get(fetchUrl);
            setMovies(request.data.results);
            
       
            return request;
        }
        fetchData();
    },[fetchUrl]);


    function truncate(string, n){
        return string?.length>n ? string.substring(0, n-1)+ '...' :string;
      }

  return (
    <div className='Netrow' >
        <h2>
            {title}
        </h2>
         <div className="rowPosters">
         {!prede?(
        movies.map(movie=>{
            
            return ((isLargeRow && movie.poster_path )||
             (!isLargeRow && movie.backdrop_path) )&& (
                <Link to='/videos' className='masterCars'>
                <div className="rowCards" onClick={()=>modifyDetails2(movie)}>
            <img src={`${baseUrl}${isLargeRow ? movie.poster_path: movie.backdrop_path}`}  alt="Please reload to view"
                     className={`rowPoster ${isLargeRow && "rowPosterLarge"}`}  onError={()=>{setError(true)}} onLoad={()=>{setError(false)}}/>
                     {error?(<img src={load} alt="error"/>):(<></>)}
                     <p>
                        {truncate( movie?.title||movie?.name||movie?.original_name , 25)}
                     </p>
                     </div></Link>);
                    })):(<></>)}
        
        </div>
    </div>
  )
}

export default Row