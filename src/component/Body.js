
import Browser from './Browser'
import Login from './Login'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


export const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <Login />
    },
    {
      path: '/Browser',
      element: <Browser />
    }
  ]);

 // Dependency array ensures meaningful execution

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  )
}
