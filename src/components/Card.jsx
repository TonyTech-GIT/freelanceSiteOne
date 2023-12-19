import redirectBtn from '../assets/right-diag.png'

import PropTypes from 'prop-types'


const Card = ({ image, cardName }) => {
    return (
        <div className='service-card'>
            <img src={image} alt="service-img" />

            <div className="card-details">
                <p>{cardName}</p>

                <img src={redirectBtn} alt="redirectBtn" />
            </div>
        </div>
    )
}

Card.propTypes = {
    cardName: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
};

export default Card
