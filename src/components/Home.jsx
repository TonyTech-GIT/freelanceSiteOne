import rightArrow from '../assets/right-arrow.png'

import { Link } from 'react-router-dom'



const Home = () => {
    return (
        <section className="home">
            <div className="home_header">
                <div className="home_header-logo">
                    <div className="circle"></div>
                    <div className="circle"></div>
                </div>

                <div className="home_header-navLinks">
                    <span className="en">EN</span>

                    <span className="contact-text">
                        Contact Us
                        {/* add logo here */}
                    </span>

                    <div className="btn-container">
                        <div></div>
                        <div></div>
                    </div>
                </div>

            </div>

            <div className="home_hero">
                <div className="home_hero-text">
                    <span className="spanText-1">WE CREATE</span>
                    <span className="spanText-2">BEST DIGITAL</span>
                    <span className="spanText-3">PRODUCTS</span>
                </div>

                <div className="home_hero-blob">
                    <svg className="blobOne" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#FA4D56" d="M51.1,-11.5C60.3,11.4,57.5,43.4,39.6,57C21.7,70.6,-11.4,65.9,-33.9,49C-56.4,32.1,-68.3,3,-60.9,-17.6C-53.5,-38.2,-26.8,-50.4,-2.9,-49.5C21,-48.5,42,-34.5,51.1,-11.5Z" transform="translate(100 100)" />
                    </svg>

                    <svg className="blobTwo" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#F1C21B" d="M51.1,-11.5C60.3,11.4,57.5,43.4,39.6,57C21.7,70.6,-11.4,65.9,-33.9,49C-56.4,32.1,-68.3,3,-60.9,-17.6C-53.5,-38.2,-26.8,-50.4,-2.9,-49.5C21,-48.5,42,-34.5,51.1,-11.5Z" transform="translate(100 100)" />
                    </svg>
                </div>
            </div>

            <div className="home_about">
                <div className="home_about-main">
                    <div className="atom-img">
                        <div className="atom-1"></div>
                        <div className="atom-2"></div>
                        <p><span>COLOSSUS</span> <br />THE PROJECT</p>
                    </div>

                    <div className="link">
                        <p>WHO WE ARE</p>

                        <Link to='/about'>
                            <img src={rightArrow} alt="right-arrow" />
                        </Link>

                    </div>
                </div>


                <div className="home_about-subtitle">
                    <p className='text-left'>WE ARE THE LEADERS IN WEB AND MOBILE <br /> DESIGN & DEVELOPMENT INDUSTRY</p>
                    <p className='text-right'>
                        We create quality content and cool ideas. We create websites, applications, 3D designs, motion designs and animations. <br /> We bring the most daring ideas to life.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Home
