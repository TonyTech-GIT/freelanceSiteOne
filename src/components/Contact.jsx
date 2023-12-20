import { Link } from "react-router-dom";
import leftArrow from '../assets/left-arrow.png'
// import rightArrow from '../assets/right-arrow.png'


const Contact = () => {
    return (
        <section className="contact">
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
            <div className="contact_wrapper">
                <h1>CONTACT US</h1>
                <div className="contact_wrapper-body">
                    <div className="contact_wrapper-form">
                        <h3>Want to discuss your project?</h3>
                        <form >
                            <input className="field" type="text" placeholder="name" />
                            <input className="field" type="text" placeholder="email" />

                            <select className="field">
                                <option >UI/UX Design</option>
                                <option >Web Developer</option>
                                <option >Brand Manager</option>
                                <option >IT Consultant</option>
                            </select>
                        </form>
                    </div>

                    <div className="contact_wrapper-location">
                        <div className="location-box">
                            <h3 className="location">LOCATION</h3>

                            <span>London, UK</span>
                            <span>07 Mason Knolls</span>
                            <span>Lloyfurt WD8 50D</span>

                            <h3 className="phone">PHONE</h3>
                            <span>(204)564-8765</span>
                        </div>

                        <div className="email-box">
                            <h3 className="email">EMAIL</h3>
                            <span>agency@gmail.com</span>

                            <h3 className="social">SOCIAL</h3>
                            <span className="socialLink">facebook</span>
                            <span className="socialLink">twitter</span>
                            <span className="socialLink">instagram</span>
                        </div>
                    </div>


                </div>
                <div className="atom-container">
                    <div className="atom-img">
                        <div className="atom-1"></div>
                        <div className="atom-2"></div>
                        <p><span>BEND</span> <br />MESSAGE</p>
                    </div>
                </div>




                <div className="contact_footer">
                    <div className="back-arrow">

                        <Link to='/services'>
                            <img src={leftArrow} alt="left-arrow" />
                        </Link>


                        <p>WHAT WE DO</p>
                    </div>
                    <div className="front-arrow">
                        <p>COPYRIGHT &copy; 2023</p>
                        {/* <Link to='/contact'>
                            <img src={rightArrow} alt="right-arrow" />
                        </Link> */}

                    </div>
                </div>
            </div>

        </section>
    )
}

export default Contact
