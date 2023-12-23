import Card from "./Card"

import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import leftArrow from '../assets/white-leftArrow.png'
import rightArrow from '../assets/white-rightArrow.png'

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
        // {
        //     cardName: 'AI',
        //     image: serviceImage
        // },
        // {
        //     cardName: 'IT CONSULTANCY',
        //     image: serviceImage
        // },



        // Add more service data as needed
    ];
    return (
        <motion.section
            className="services"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.05 } }}
            exit={{ opacity: 0 }}
        >
            <div className="home_header" data-aos="fade-right">
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
            <h1 data-aos="fade-right">WHAT WE DO</h1>

            <div className="services_wrapper" data-aos="fade-up">
                {servicesData.map((service, index) => (
                    <Card
                        key={index}
                        cardName={service.cardName}
                        image={service.image}
                    />

                ))}

            </div>

            <div className="services_footer">
                <div className="back-arrow" >

                    <Link to='/about'>
                        <img src={leftArrow} alt="left-arrow" />
                    </Link>


                    <p>WHO WE ARE</p>
                </div>
                <div className="front-arrow">
                    <p>CONTACT</p>
                    <Link to='/contact'>
                        <img src={rightArrow} alt="right-arrow" />
                    </Link>

                </div>
            </div>
        </motion.section>
    )
}

export default Services
