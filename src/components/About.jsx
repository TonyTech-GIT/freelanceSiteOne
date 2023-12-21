import aboutImg from '../assets/photo-1572021335469-31706a17aaef.avif'
import leftArrow from '../assets/white-leftArrow.png'
import rightArrow from '../assets/white-rightArrow.png'

import { Link } from 'react-router-dom'

const About = () => {
    return (
        <section className="about">
            <div className="home_header">
                {/* <div className="home_header-logo">
                    <div className="circle"></div>
                    <div className="circle"></div>
                </div> */}

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

            <div className="about_hero">
                <h1>WHO WE ARE</h1>
            </div>

            <div className="about_desc">
                <div className="texts">
                    <p className="text-1">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis vitae amet voluptate dolores eaque eos sit. Odio quisquam exercitationem doloremque debitis, dolore deleniti ea praesentium, quo eligendi nisi provident molestiae?
                    </p>
                    <p className="text-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae repellendus unde tenetur, placeat laborum, obcaecati eligendi, ducimus dicta non dolores inventore itaque quia? Accusamus similique odit, voluptatem officiis commodi quis!
                    </p>
                </div>


                <img src={aboutImg} alt="about-img" />

            </div>

            <div className="about_footer">
                <div className="back-arrow">

                    <Link to='/'>
                        <img src={leftArrow} alt="left-arrow" />
                    </Link>


                    <p>MAIN</p>
                </div>
                <div className="front-arrow">
                    <p>WHAT WE DO</p>
                    <Link to='/services'>
                        <img src={rightArrow} alt="right-arrow" />
                    </Link>

                </div>
            </div>


        </section>
    )
}

export default About
