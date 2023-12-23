import { BrowserRouter } from "react-router-dom";
import { useEffect } from "react";

import AnimatedRoutes from "./components/AnimatedRoutes";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
      // Other configuration options
    });
  }, []);


  return (
    <BrowserRouter>


      <AnimatedRoutes />


    </BrowserRouter>





  )
}




export default App
