import { Box } from "components/Box";
import { Link } from "react-router-dom";

export function AdditionalInfo({location}) {
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
