import React, { useEffect } from 'react'
import { onAuthStateChanged, signOut } from "firebase/auth"
import { useNavigate } from 'react-router-dom'
import { auth } from '../utils/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { logo_url } from '../utils/constants';
const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(store => store.user);
  const handlsignout = () => {
    signOut(auth)
      .then(() => {

      }).catch((error) => {
        navigate("/error ")
      });
  }
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({
          uid: uid,
          email: email,
          displayName: displayName,
          photoURL: photoURL
        }));
        navigate("/browser")
      } else {
        dispatch(removeUser());
        navigate("/")
      }
    });
  }, []);
  return (

    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-20 flex justify-between'>
      <img className='w-40 h-20 font-bold ml-4 mt-2  cursor-pointer '
        src={logo_url} alt="logo" />
      {user && <div className='flex p-7'>
        <img className='w-10 h-10 rounded-full mr-3 cursor-pointer' src={user.photoURL} alt="usericon" />
        <button onClick={handlsignout} className='bg-red-600 text-white rounded px-4 py-2'> signout</button>
      </div>}
    </div>


  )
}

export default Header