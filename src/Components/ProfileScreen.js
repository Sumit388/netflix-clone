import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/counter/userSlice'
import NetNav from './NetNav'
import { auth } from './firebase'
import './ProfileScreen.css'
import avatar from '../data/avatar.png'

function ProfileScreen() {
    const user=useSelector(selectUser)
  return (
    <div className='ProfileScreen'>
       <NetNav/>
       <div className="profileScreenBody">
           <h1>Edit Profile</h1>
           <div className="profileScreenInfo">
            <img src={avatar} alt="" />
            <div className="profileScreenDetails">
                <h2>
                 {user.email}
                </h2>
                <div className="profileScreenPlan">
                    <h3>
                        Current Plan: Free.
                    </h3>
                    {/*calling the signout button from firebase if Sign Out button is clicked*/}
                    <button onClick={()=>{auth.signOut()}} className='ProfileScreenSignOut'>Sign Out</button>
                </div>
            </div>
           </div>
       </div>
    </div>
  )
}

export default ProfileScreen