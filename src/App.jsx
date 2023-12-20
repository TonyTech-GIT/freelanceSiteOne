import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home"
import About from "./components/About";
import Services from './components/Services'
// import Team from './components/Team'
import Contact from './components/Contact'

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        {/* <Route path="/team" element={<Team />} /> */}
        <Route path="/contact" element={<Contact />} />


        {/* Also add 404 page... */}
      </Routes>
    </BrowserRouter>

  )
}

export default App
