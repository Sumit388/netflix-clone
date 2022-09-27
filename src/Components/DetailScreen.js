import React,{useEffect,useState} from 'react'
import './DetailScreen.css'
import NetNav from './NetNav'
import axios from './axios'

function DetailScreen(props) {
    const API_KEY= "155f625127f08c0e27f0f3c41bcac3bc";
    const[videos,setvideos]=useState([]);
    const[Modalon,setModalon]=useState(()=>{return false});
    const[youtube,setYoutube]=useState();

    const fetchUrl=`https://api.themoviedb.org/3/movie/${props.details.id.toString()}/videos?api_key=${API_KEY}&language=en-US`
    useEffect(()=>{
        async function fetchData(){
            const request= await axios.get(fetchUrl);
            setvideos(request.data.results);
            return request;
        }
        fetchData();
    },[fetchUrl]);
  
    function truncate(string, n){
        return string?.length>n ? string.substring(0, n-1)+ '...' :string;
      }


  return (
    <div className='detailsScreen'>
        <NetNav/>
        <div className="VideoModal"  
         style={Modalon?{display: `block`}:{display: `none`}}
        onClick={()=>{setModalon(false)}}>
        <iframe src={Modalon?`https://www.youtube.com/embed/${youtube}`:""} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        {props.details?(
            <>
        <div className='DetailsBanner' 
    style={{
        backgroundSize: `cover`,
        backgroundImage: `url('https://image.tmdb.org/t/p/original/${props.details?.backdrop_path
    }')`,
        backgroundPosition: "center center"
    }}>
        </div>
        <div className="detailsLayover"></div>
        <div className="detailsContents">
        <h1 className="detailsTitle">
            {props.detail?.name||props.details?.original_name||props.details?.title}
        </h1>
        <div className="detilsDetails">
            <span className="detailsDate">
                {props.details.first_air_date}
            </span>
            <span className="detailsAge">
                {props.details?.adult?"A":"UA"}
            </span>
            <span className="detailsPopularity">
                {props.details?.vote_average}
            </span>
          
        </div>
        
        <div className="detailsButtons">
            <button className='detailsButton' onClick={()=>{setModalon(true); setYoutube(videos[0].key)}}>Play</button>
            <button className='detailsButton'>My List</button>
        </div>
        <h1 className="detailsDescription">
            
            {props.details?.overview}
         </h1>
          
         <div className="detailPosters">
        {videos.map(movie=>
            
                <div className="detailedCards" onClick={()=>{setModalon(true); setYoutube(movie.key)}}>
             <img src={`https://img.youtube.com/vi/${movie.key}/maxresdefault.jpg`} alt={movie.name} 
                        key={movie.id} className="detailedPoster"/>
                   <p>
                        {truncate( movie?.name,18)}
                     </p>
                     </div>)
        }
        </div>
      

        </div> </>):(<></>)}
    </div>
  )
}

export default DetailScreen