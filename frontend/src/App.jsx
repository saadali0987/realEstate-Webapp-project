
import Navbar from './components/Navbar/Navbar'
import SinglePage from './pages/SinglePage/SinglePage';
import Home from './pages/Home/Home'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import List from './pages/List/List';
import {Layout, AuthLayout} from './pages/Layout/Layout';
import Login from './pages/Login/Login';
import Profile from './pages/Profile/Profile';
import Register from './pages/Register/Register';
import ProfileUpdate from './pages/ProfileUpdate/ProfileUpdate';


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children:[
        {
          path:"/",
          element:<Home />
        },
        {
          path:"/list",
          element:<List />
        },
        {
          path:"/:id",
          element:<SinglePage />
        },
        {
          path:"/login",
          element:<Login />
        },
        {
          path:"/register",
          element:<Register />
        },
      ]
    },
    {
      path:"/",
      element:<AuthLayout />,
      children:[
        {
          path:"/profile",
          element:<Profile />
        },
        {
          path:"/profile/update",
          element:<ProfileUpdate />
        }
      ]
    }
  ]);
  

  return (
    
    <RouterProvider router={router} />
  )
}

export default App
