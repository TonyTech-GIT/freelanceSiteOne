import { Routes, Route, useLocation } from "react-router-dom"

import Home from "./Home"
import About from "./About";
import Services from './Services'
// import Team from './components/Team'
import Contact from './Contact'

import { AnimatePresence } from 'framer-motion'


const AnimatedRoutes = () => {
    const location = useLocation()

    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />

                <Route path="/about" element={<About />} />

                <Route path="/services" element={<Services />} />

                {/* <Route path="/team" element={<Team />} /> */}
                <Route path="/contact" element={<Contact />} />


                {/* Also add 404 page... */}
            </Routes>
        </AnimatePresence>

    )
}

export default AnimatedRoutes
