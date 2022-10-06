import React from 'react'
import { useState } from 'react'
import './Login.css'
import SignInScreenCompo from './SignInScreenCompo';
import netflixLogo from '../data/netflixlogo.png'



function Login() {
    //satate to control if we want to display the log in dialog box or not.
    const [signIn, setSignIn] = useState(false);

    return (
        <div className='loginScreen'>

            <div className="loginBackground">
                <img src={netflixLogo} alt="" className='loginScreen-logo' />
                <button className='LoginButton' onClick={() => setSignIn(true)}>Sign In</button>
                <div className="loginGradient" />
            </div>
            <div className="loginBody">
                {/*If sigin state is true the show SignInScreenComp Component else rest of the screen*/}
                {signIn ? (
                    <SignInScreenCompo />
                ) : (
                    <>
                        <h1>
                            Unlimited films, TV programmes and more.
                        </h1>
                        <h2>
                            Watch anywhere. Cancel at any time.
                        </h2>
                        <h3>
                            Ready to watch? Enter your email to create or restart your memebership.
                        </h3>
                        <div className="loginInput">
                            <form >
                                <input type="email" placeholder='Email Address' />
                                <button className='getStarted' onClick={() => setSignIn(true)}>GET STARTED</button>
                            </form>
                        </div>
                    </>
                )}

            </div>
        </div>
    )
}

export default Login