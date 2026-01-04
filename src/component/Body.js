import React from 'react'
import Login from './Login'
import Browser from './Browser'
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router'
export const Body = () => {
  const approuter=createBrowserRouter([
    {
      path:'/',
      element:<Login/>
    },
    {
      path:'/Browser',
      element:<Browser/>
    }
  ])
  return (
    <div>
        <RouterProvider router={approuter}/>
        
    </div>
  )
}
