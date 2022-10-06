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
  //state that stores the details of the video card that we have clicked
  const [details,SetDetails]=useState(null);

 //functions that sets the value of details as the details of the video that has been click.
 //This function is passed as a prop and is called in Row component on click of card.
  let modifyDetails=(value)=>{
         SetDetails(value);
  }

  //dispatch to set the user.
  const dispatch=useDispatch();

  //if auth state is changed and if provided user details is present in data base then call the login reducers 
  //else dispatch logout reducer which sets user as null
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

  //getting the user details from the store.
const user=useSelector(selectUser);

  return (
    <div className="App">
 <Router>
  {/*Show login component if no user present else show rest of the app*/}
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
