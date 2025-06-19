import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LayOut from './Components/LayOut/LayOut';
import Home from './Components/Home/Home';
import Products from './Components/products/products';
import Categories from './Components/Categories/Categories';
import Cart from './Components/Cart/Cart';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import NotFound from './Components/NotFound/NotFound';
import Details from './Components/Details/Details';
import Checkout from './Components/Checkout/Checkout';
import FeatureProducts from './HomeComponents/FeatureProducts/FeatureProducts';
import { TokenContext } from './Context/Token';
import { useContext, useEffect } from 'react';
import ProtectedRoutes from "./Components/ProtectedRoutes/ProtectedRoutes";
import AllOrders from './Components/AllOrders/AllOrders';

function App() {

  let {setToken} = useContext(TokenContext)
  let routers = createBrowserRouter([
  {
    path:"/" , element: <LayOut/> , children:[
    {index:true , element:<ProtectedRoutes><Home/></ProtectedRoutes> },
    {path:'products' , element:<ProtectedRoutes><Products/></ProtectedRoutes> },
    {path:'feature-products' , element:<FeatureProducts/>},
    {path:'categories' , element:<ProtectedRoutes><Categories/></ProtectedRoutes> },
    {path:'cart' , element:<ProtectedRoutes><Cart/></ProtectedRoutes>},
    {path:'details/:id' , element:<ProtectedRoutes><Details/></ProtectedRoutes>},
    {path:'checkout' , element:<ProtectedRoutes><Checkout/></ProtectedRoutes>},
    {path:'allorders' , element:<ProtectedRoutes><AllOrders/></ProtectedRoutes>},
    {path:'register' , element:<Register/>},
    {path:'login' , element:<Login/>},
    {path:'*' , element:<NotFound/>},  
  ]}
])

useEffect(()=>{
    if(localStorage.getItem("userToken") != null){
      setToken(localStorage.getItem("userToken"))
    }

  }, [])

  return  <RouterProvider router={ routers}></RouterProvider>
}

export default App;
   
                                   