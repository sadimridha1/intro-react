import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
const User = ({user}) => {
    const {id, name, email, phone} = user;
    const userStyle = {
        border: '2px solid red',
        padding: '6px',
    }
    return (
        <div style={userStyle}>
            <h1>{name}</h1>
            <h2>{email}</h2>
            <h2>{phone}</h2>
            <Link to={`/user/${id}`}>Show Details</Link>
        </div>
    );
};

User.propTypes ={
    user: PropTypes.object
}

export default User;