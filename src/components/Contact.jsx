import { Link } from "react-router-dom";
import leftArrow from '../assets/left-arrow.png'
import rightArrow from '../assets/right-arrow.png'


const Contact = () => {
    return (
        <section className="contact">
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
            <div className="contact_wrapper">
                <h1>CONTACT US</h1>

                <div className="contact_wrapper-form">
                    <h3>Want to discuss your project?</h3>
                    <form >
                        <input className="field" type="text" placeholder="name" />
                        <input className="field" type="text" placeholder="email" />
                        <input className="field" type="text" placeholder="UI/UX Design" />
                    </form>
                </div>

                <div className="contact_wrapper-location"></div>


                <div className="contact_footer">
                    <div className="back-arrow">

                        <Link to='/services'>
                            <img src={leftArrow} alt="left-arrow" />
                        </Link>


                        <p>WHAT WE DO</p>
                    </div>
                    <div className="front-arrow">
                        <p>CONTACT</p>
                        <Link to='/contact'>
                            <img src={rightArrow} alt="right-arrow" />
                        </Link>

                    </div>
                </div>
            </div>

        </section>
    )
}

export default Contact
