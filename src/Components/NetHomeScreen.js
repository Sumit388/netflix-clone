import React,{useState,useEffect} from 'react'
import LoadingScreen from './LoadingScreen'
import NetBanner from './NetBanner'
import "./NetHomeScreen.css"
import NetNav from './NetNav'
import requests from './Request'
import Row from './Row'


function NetHomeScreen(props) {

  //state to check if I want to show the loading screen or not.
const[loading,setLoading]=useState(()=>{return true});

//truning off the loading screen off after 3 sec.
useEffect(()=>{
  setTimeout(()=>{
   setLoading(false);
  },3000)
},[])
  return (
    <div className='NetHomeScreen' >
     <NetNav/>

{/* If loading  satate is true then show loading screen else rest of the compopnent*/}
     {loading?(<LoadingScreen/>):(<></>)}
     <div className="wholefronSection" style={loading?{display: `none`}:{display: `block`}}>



     <NetBanner/>
      

      {/* url from which the data will be fetched is passed as an prop, also the function that set the details in the app component for the detailScreen is also passed as prop */}
     <Row 
       title="TRENDING NOW"
       fetchUrl={requests.fetchTrending}
       isLargeRow
       modifyDetails2={props.modifyDetails} delay={3000}/>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} modifyDetails2={props.modifyDetails} delay={6000}/>
      <Row title="Action Movies" fetchUrl={requests.fetchActionmovie} modifyDetails2={props.modifyDetails} delay={9000}/>
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}  modifyDetails2={props.modifyDetails} delay={12000}/>
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} modifyDetails2={props.modifyDetails} delay={15000}/>
      <Row title="Romantic Movies" fetchUrl={requests.fetchRomanceMovies} modifyDetails2={props.modifyDetails} delay={18000}/>
      <Row title="Netflix Orginals" fetchUrl={requests.fetchNetflixOriginal}  modifyDetails2={props.modifyDetails} delay={21000} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} modifyDetails2={props.modifyDetails} delay={24000}/>

    </div>
    </div>
  )
}

export default NetHomeScreen