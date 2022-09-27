import React, { useState } from 'react';
import './App.css';
import NetHomeScreen from './Components/NetHomeScreen';
import Login from './Components/Login';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { useEffect } from 'react';
import { auth } from './Components/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/counter/userSlice';
import ProfileScreen from './Components/ProfileScreen';
import DetailScreen from './Components/DetailScreen';


function App() {
  const [details,SetDetails]=useState(null);

  let modifyDetails=(value)=>{
         SetDetails(value);
  }
  const dispatch=useDispatch();
  useEffect(()=>{
  const unsubscribe=auth.onAuthStateChanged(userAuth =>{
    if(userAuth){
      dispatch(login({
        uid:userAuth.uid,
        email:userAuth.email,
      }))
    }
    else{
       dispatch(logout())
    }
  });

  return ()=>{
    unsubscribe();
  }
  },[dispatch])

const user=useSelector(selectUser);

  return (
    <div className="App">
 <Router>
    {!user? (<Login/>):(
      <Routes>
      <Route path='/profile' element={<ProfileScreen />}/>
      <Route exact path='/'  element={<NetHomeScreen  modifyDetails={modifyDetails} />}/>
      <Route path='/videos'  element={<DetailScreen  details={details}/>}/>
      </Routes>
    )}

      
    </Router>

    </div>
  );
}

export default App;
