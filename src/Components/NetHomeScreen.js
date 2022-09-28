import React,{useState,useEffect} from 'react'
import LoadingScreen from './LoadingScreen'
import NetBanner from './NetBanner'
import "./NetHomeScreen.css"
import NetNav from './NetNav'
import requests from './Request'
import Row from './Row'


function NetHomeScreen(props) {
const[loading,setLoading]=useState(()=>{return true});


useEffect(()=>{
  setTimeout(()=>{
   setLoading(false);
  },3000)
},[])
  return (
    <div className='NetHomeScreen' >
     <NetNav/>


     {loading?(<LoadingScreen/>):(<></>)}
     <div className="wholefronSection" style={loading?{display: `none`}:{display: `block`}}>
     <NetBanner/>
      
     <Row 
       title="TRENDING NOW"
       fetchUrl={requests.fetchTrending}
       isLargeRow
       modifyDetails2={props.modifyDetails} delay={2000}/>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} modifyDetails2={props.modifyDetails} delay={4000}/>
      <Row title="Action Movies" fetchUrl={requests.fetchActionmovie} modifyDetails2={props.modifyDetails} delay={6000}/>
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}  modifyDetails2={props.modifyDetails} delay={8000}/>
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} modifyDetails2={props.modifyDetails} delay={10000}/>
      <Row title="Romantic Movies" fetchUrl={requests.fetchRomanceMovies} modifyDetails2={props.modifyDetails} delay={12000}/>
      <Row title="Netflix Orginals" fetchUrl={requests.fetchNetflixOriginal}  modifyDetails2={props.modifyDetails} delay={14000} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} modifyDetails2={props.modifyDetails} delay={16000}/>

    </div>
    </div>
  )
}

export default NetHomeScreen