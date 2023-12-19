import Card from "./Card"

import { Link } from "react-router-dom";
import leftArrow from '../assets/left-arrow.png'
import rightArrow from '../assets/right-arrow.png'

import serviceImage from '../assets/photo-1572021335469-31706a17aaef.avif'


const Services = () => {

    const servicesData = [
        {
            cardName: 'Graphics',
            image: serviceImage
        },
        {
            cardName: '3D Design',
            image: serviceImage
        },
        {
            cardName: 'UI/UX',
            image: serviceImage
        },
        {
            cardName: 'BRANDING',
            image: serviceImage
        },
        {
            cardName: 'AI',
            image: serviceImage
        },
        {
            cardName: 'IT CONSULTANCY',
            image: serviceImage
        },



        // Add more service data as needed
    ];
    return (
        <section className="services">
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
            <h1>WHAT WE DO</h1>

            <div className="services_wrapper">
                {servicesData.map((service, index) => (
                    <Card
                        key={index}
                        cardName={service.cardName}
                        image={service.image}
                    />

                ))}

            </div>

            <div className="services_footer">
                <div className="back-arrow">

                    <Link to='/about'>
                        <img src={leftArrow} alt="left-arrow" />
                    </Link>


                    <p>WHO WE ARE</p>
                </div>
                <div className="front-arrow">
                    <p>OUR TEAM</p>
                    <Link to='/team'>
                        <img src={rightArrow} alt="right-arrow" />
                    </Link>

                </div>
            </div>
        </section>
    )
}

export default Services
