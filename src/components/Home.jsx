
import rightArrow from '../assets/sharp-edge_arrow-removebg-preview.png'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {

    return (
        <motion.section
            className="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.05 } }}
            exit={{ opacity: 0 }}
        >
            <div className="home_header" >
                {/* <div className="home_header-logo">
                        <div className="circle"></div>
                        <div className="circle"></div>
                    </div> */}

                <div className="home_header-navLinks" data-aos="fade-right">
                    <span className="en">EN</span>

                    <Link to='/contact'>
                        <span className="contact-text">
                            Contact Us


                            {/* add logo here */}
                        </span>
                    </Link>


                    <div className="btn-container">
                        <div></div>
                        <div></div>
                    </div>
                </div>

            </div>

            <div className="home_hero" >
                <div className="home_hero-text" data-aos="fade-right">
                    <span className="spanText-1">WE CREATE</span>
                    <span className="spanText-2">BEST DIGITAL</span>
                    <span className="spanText-3">PRODUCTS</span>
                </div>

                <div className="home_hero-blob" data-aos="fade-in">
                    <svg className="blobOne" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#388d3f" d="M51.1,-11.5C60.3,11.4,57.5,43.4,39.6,57C21.7,70.6,-11.4,65.9,-33.9,49C-56.4,32.1,-68.3,3,-60.9,-17.6C-53.5,-38.2,-26.8,-50.4,-2.9,-49.5C21,-48.5,42,-34.5,51.1,-11.5Z" transform="translate(100 100)" />
                    </svg>

                    <svg className="blobTwo" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#431658" d="M51.1,-11.5C60.3,11.4,57.5,43.4,39.6,57C21.7,70.6,-11.4,65.9,-33.9,49C-56.4,32.1,-68.3,3,-60.9,-17.6C-53.5,-38.2,-26.8,-50.4,-2.9,-49.5C21,-48.5,42,-34.5,51.1,-11.5Z" transform="translate(100 100)" />
                    </svg>
                </div>

                {/* seperate blobs.. */}
                {/* <div className="blob-container">
                    <svg className="blobOne" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#388d3f" d="M51.1,-11.5C60.3,11.4,57.5,43.4,39.6,57C21.7,70.6,-11.4,65.9,-33.9,49C-56.4,32.1,-68.3,3,-60.9,-17.6C-53.5,-38.2,-26.8,-50.4,-2.9,-49.5C21,-48.5,42,-34.5,51.1,-11.5Z" transform="translate(100 100)" />
                    </svg>

                    <svg className="blobTwo" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#431658" d="M51.1,-11.5C60.3,11.4,57.5,43.4,39.6,57C21.7,70.6,-11.4,65.9,-33.9,49C-56.4,32.1,-68.3,3,-60.9,-17.6C-53.5,-38.2,-26.8,-50.4,-2.9,-49.5C21,-48.5,42,-34.5,51.1,-11.5Z" transform="translate(100 100)" />
                    </svg>
                </div> */}


                {/* seperate blobs.. */}
                {/* <div className="blob-containerTwo">
                    <svg className="blobOne" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#388d3f" d="M51.1,-11.5C60.3,11.4,57.5,43.4,39.6,57C21.7,70.6,-11.4,65.9,-33.9,49C-56.4,32.1,-68.3,3,-60.9,-17.6C-53.5,-38.2,-26.8,-50.4,-2.9,-49.5C21,-48.5,42,-34.5,51.1,-11.5Z" transform="translate(100 100)" />
                    </svg>

                    <svg className="blobTwo" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#431658" d="M51.1,-11.5C60.3,11.4,57.5,43.4,39.6,57C21.7,70.6,-11.4,65.9,-33.9,49C-56.4,32.1,-68.3,3,-60.9,-17.6C-53.5,-38.2,-26.8,-50.4,-2.9,-49.5C21,-48.5,42,-34.5,51.1,-11.5Z" transform="translate(100 100)" />
                    </svg>
                </div> */}
            </div>

            <div className="home_about" >
                <div className="home_about-main">
                    <div className="atom-img" data-aos="fade-right">
                        <div className="atom-1"></div>
                        <div className="atom-2"></div>
                        <p><span>COLOSSUS</span> <br />THE PROJECT</p>
                    </div>

                    <div className="link" data-aos="fade-left">
                        <p>WHO WE ARE</p>
                        <Link to='/about' className='arrow-right' >
                            <img src={rightArrow} alt="right-arrow" />
                        </Link>


                    </div>
                </div>


                <div className="home_about-subtitle" >
                    <p className='text-left' >WE ARE THE LEADERS IN WEB AND MOBILE <br /> DESIGN & DEVELOPMENT INDUSTRY</p>
                    <p className='text-right' >
                        We create quality content and cool ideas. We create websites, applications, 3D designs, motion designs and animations. <br /> We bring the most daring ideas to life.
                    </p>
                </div>
            </div>


        </motion.section>
    )
}

export default Home
