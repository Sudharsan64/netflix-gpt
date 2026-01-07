import React from 'react'
import { getAuth, signOut } from "firebase/auth"
import { useNavigate } from 'react-router-dom'
import { auth } from '../utils/firebase';
import { useSelector } from 'react-redux';
const Header = () => {
  
  const Navigate=useNavigate();
  const user=useSelector(store=>store.user);
  const handlsignout=()=>{signOut(auth)
.then(() => {
 Navigate("/")
}).catch((error) => {
  Navigate("/error ")
});
  }
  return (

    <div className='absolute w-screen bg-gradient-to-b from-black flex justify-between' >
      <img className='w-40 h-20 font-bold ml-4 mt-2  cursor-pointer '
      src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-12-03/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo" />
    {user && <div className='flex p-7'>
      <img className='w-10 h-10 rounded-full mr-3 cursor-pointer' src={user.photoURL} alt="usericon" />
    <button onClick={handlsignout} className='bg-red-600 text-white rounded px-4 py-2'> signout</button>
    </div>}
    </div>
    
    
  )
} 

export default Header