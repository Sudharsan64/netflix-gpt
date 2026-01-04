import React from 'react'
import Header from './Header'

const Login = () => {
  const [isSignIn, setIsSignIn] = React.useState(true);
  const toggleSignInForm = () => {
      setIsSignIn(!isSignIn);
  }

  return (
    <div className='text-white rounded-lg '>
      <Header/>
      <img src="https://assets.nflxext.com/ffe/siteui/vlv3/d13e2d55-5cdd-48c0-a55b-4b292d0b9889/web/IN-en-20251229-TRIFECTA-perspective_d7edcd70-4cfd-441c-858c-c5e400ed6c2b_large.jpg" alt="loginimage" />
     <form className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col gap-4 bg-black/75 p-8 rounded-md'>
        <h1 className='font-bold text-4xl m-4
        '>{isSignIn ? 'Sign In' : 'Sign Up'} </h1>
         {!isSignIn && <input className='p-2 bg-gray-600 text-white rounded-lg' type="text" placeholder='Username' />}
        <br />
        <input className='p-2 bg-gray-600 text-white rounded-lg' type="email" placeholder='Email Address' /> 
        <br />
        <input className='p-2 bg-gray-600 text-white rounded-lg' type="password" placeholder='Password' />
        <br />
        <button className='p-2  bg-red-600 py-2 rounded-md rounded-lg' type="submit">{isSignIn ? 'Login' : 'Sign Up'}</button>
     <p className='m-4 cursor-pointer' onClick={toggleSignInForm}> {isSignIn ? 'New to Netflix? Sign up now'
     : 'Already have an account? Sign in'} </p>
     </form>
    </div>
  )
} 

export default Login