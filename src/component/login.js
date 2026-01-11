import React from 'react'
import Header from './Header'
import Validate from '../utils/Validate'
import { useRef } from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';

import { addUser } from '../utils/userSlice';
import { useDispatch } from 'react-redux';
import { user_Avathar_url } from '../utils/constants';

const Login = () => {
  const dispatch = useDispatch();
 // Correctly invoke the hook
  const [isSignIn, setIsSignIn] = React.useState(true);
  const toggleSignInForm = () => {
    setIsSignIn(!isSignIn);
  }
  const [errormessage, setErrormessage] = React.useState("");
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const handleButtonClick = () => {
    const message = Validate(email.current.value, password.current.value);
    setErrormessage(message?.message);
    if (message) return;

    if (!isSignIn) {
      // Sign Up Logic
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
  displayName: name.current.value,
    photoURL: user_Avathar_url
}).then(() => {
  
}).catch((error) => {
   setErrormessage(error.message);
}); 
          console.log(user);
           // Correct function call
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrormessage(errorCode + "-" + errorMessage);
        });
    } else {
      // Sign In Logic
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const { uid, email, displayName, photoURL } = auth.currentUser;
          dispatch(addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL
          }));
          console.log(auth.currentUser);
         
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrormessage(errorCode + "-" + errorMessage);
        });
    }
  }
  return (
    <div className='text-white rounded-lg '>
      <Header />
      <img src="https://assets.nflxext.com/ffe/siteui/vlv3/d13e2d55-5cdd-48c0-a55b-4b292d0b9889/web/IN-en-20251229-TRIFECTA-perspective_d7edcd70-4cfd-441c-858c-c5e400ed6c2b_large.jpg" alt="loginimage" />
      <form onSubmit={(e) => e.preventDefault()} className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col gap-4 bg-black/75 p-8 rounded-md'>
        <h1 className='font-bold text-4xl m-4
        '>{isSignIn ? 'Sign In' : 'Sign Up'} </h1>
        {!isSignIn &&
          <input ref={name} className='p-2 bg-gray-600 text-white rounded-lg' type="text"
            placeholder='Username' />}
        <br />
        <input ref={email} className='p-2 bg-gray-600 text-white rounded-lg'
          type="email" placeholder='Email Address' />
        <br />
        <input ref={password} className='p-2 bg-gray-600 text-white rounded-lg'
          type="password" placeholder='Password' />
        <br />
        <p>{errormessage}</p>
        <button className='p-2  bg-red-600 py-2 rounded-md rounded-lg' type="submit"
          onClick={handleButtonClick}>{isSignIn ? 'Login' : 'Sign Up'}</button>
        <p className='m-4 cursor-pointer' onClick={toggleSignInForm}> {isSignIn ? 'New to Netflix? Sign up now'
          : 'Already have an account? Sign in'} </p>
      </form>
    </div>
  )
}

export default Login;