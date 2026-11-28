import Login from './Login.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx';

const router = createBrowserRouter([
    {
      path : "/",
      element :<Login />
    },
    {
      path : "/home",
      element :<App />
    }
  ]);
  
function RouteComponent() {
  
  return(
    <RouterProvider router={router}></RouterProvider>
  );
}

export default RouteComponent