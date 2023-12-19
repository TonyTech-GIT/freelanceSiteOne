import PropTypes from 'prop-types'

const Profile = ({ image, name, role, desc }) => {
    return (
        <div>
            <div className="team_individual">
                <img src={image} alt="profile-img" />

                <div className="team_individual-details">
                    <h3>{name}</h3>
                    <p className="role">{role}</p>
                    <p className="desc">
                        {desc}

                    </p>
                </div>
            </div>
        </div>
    )
}

Profile.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
};

export default Profile
