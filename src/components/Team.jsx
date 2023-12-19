import Profile from "./Profile"

import { Link } from "react-router-dom";
import leftArrow from '../assets/left-arrow.png'
import rightArrow from '../assets/right-arrow.png'

import manOne from '../assets/man1.avif'
// import manTwo from '../assets/man2.avif'
// import womanOne from '../assets/woman1.avif'
// import womanTwo from '../assets/woman2.avif'
// import manThree from '../assets/man3.avif'

const Team = () => {
    const profilesData = [
        {
            image: manOne,
            name: 'JOSEPH RAY',
            role: 'Project Manager',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A sunt possimus pariatur velit et ea!'
        },
        // {
        //     image: manTwo,
        //     name: 'MICHAEL WALKER',
        //     role: 'Web Designer',
        //     desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A sunt possimus pariatur velit et ea!'
        // },
        // {
        //     image: womanOne,
        //     name: 'DIANA CAMPBELL',
        //     role: 'Web Designer',
        //     desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A sunt possimus pariatur velit et ea!'
        // },
        // {
        //     image: womanTwo,
        //     name: 'LORI HOUSTON',
        //     role: 'Web Developer',
        //     desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A sunt possimus pariatur velit et ea!'
        // },
        // {
        //     image: manThree,
        //     name: 'THERESA FULLER',
        //     role: 'IT Consultant',
        //     desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A sunt possimus pariatur velit et ea!'
        // }




        // Add more service data as needed
    ];
    return (
        <section className="team">
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
            <h1>OUR TEAM</h1>
            <div className="team_desc">
                <div className="team_list">
                    <span className="name1">JOSEPH RAY</span>
                    <span className="name2">MICHAEL WALKER</span>
                    <span className="name3">DIANA CAMPBELL</span>
                    <span className="name4">LORI HOUSTON</span>
                    <span className="name5">THERESA FULLER</span>
                </div>

                <div className="team_profile-wrapper">
                    {profilesData.map((profile, index) => (
                        <Profile
                            key={index}
                            image={profile.image}
                            name={profile.name}
                            role={profile.role}
                            desc={profile.desc}
                        />
                    ))}
                </div>

            </div>

            <div className="team_footer">
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


        </section>
    )
}

export default Team
