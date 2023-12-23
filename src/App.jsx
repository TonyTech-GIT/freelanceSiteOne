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

      startEvent: 'DOMContentLoaded', // Initialize AOS on DOM content load
      callback: () => {
        // Run your code after animations have completed
        const animatedElement = document.querySelector('[data-aos]');
        if (animatedElement) {
          animatedElement.style.zIndex = '50'; // Set z-index after animation
        }
      },
    });
  }, []);


  return (
    <BrowserRouter>


      <AnimatedRoutes />


    </BrowserRouter>





  )
}




export default App
