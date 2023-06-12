import './app.scss'
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import OurCrew from './Pages/OurCrew/OurCrew';
import Home from './Pages/Home/Home';
import TourList from './Pages/TourList/TourList';
import Footer from './Components/Footer/Footer';
import About from './Pages/About/About';
import Pricing from './Pages/Pricing/Pricing';
import Services from './Pages/Services/Services';
import Shop from './Pages/Shop/Shop';
import Cart from './Pages/Cart/Cart';
import Single from './Pages/Single/Single';
import ProgressBar from 'react-progressbar-on-scroll'
import ShoppingCartProvidor from './context/ShoppingCartContext';
import Loader from './Components/Loader/Loader'
import { useEffect, useState } from 'react';

function App() {
  const Layout=()=>{
    const [isLoader, setIsLoader] = useState(false)
    useEffect(() => {
      setIsLoader(true)
      setTimeout(() => {
        setIsLoader(false)
      }, 4000);
    }, [])
      
    return(
      <ShoppingCartProvidor>
        <div className="app">
          {isLoader?(<Loader/>):(
            <>
            <ProgressBar
              color="#021C33"
              height={5}
            />
            <Navbar/>
            <Outlet/>
            <Footer/>
            </>
          )}
        </div>
      </ShoppingCartProvidor>
    )
  }
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children:[
        {
          path: "/",
          element: <Home/>,
        },
        {
          path: "/about",
          element: <About/>,
        },
        {
          path: "/crew",
          element: <OurCrew/>,
        },
        {
          path: "/tour",
          element: <TourList/>,
        },
        {
          path: "/services",
          element: <Services/>,
        },
        {
          path: "/pricing",
          element: <Pricing/>,
        },
        {
          path: "/shop",
          element: <Shop/>,
        },
        {
          path: "/cart",
          element: <Cart/>,
        },
        {
          path: "/product/:Id",
          element: <Single/>,
        },
      
      ]
    },
  ]);
  return (
    <div >
          <RouterProvider router={router} />
    </div>
  );
}

export default App;