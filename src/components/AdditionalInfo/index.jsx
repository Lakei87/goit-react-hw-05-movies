import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { Box } from "components";

export function AdditionalInfo({ location }) {
    
    return (
        <Box as='section'>
            <h2>Additional information</h2>
            <ul>
                <li><Link to='cast' state={{ from: location }}>Cast</Link></li>
                <li><Link to='reviews' state={{ from: location }}>Reviews</Link></li>
            </ul>
        </Box>
    );
};

AdditionalInfo.propTypes = {
    location:PropTypes.shape({
        pathname: PropTypes.string.isRequired,
        search: PropTypes.string.isRequired,
    }).isRequired,
}