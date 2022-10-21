import { Link, Icon } from "./goBackLink.styled"
import { useLocation } from "react-router-dom";

export function GoBackLink() {
    const location = useLocation();
    console.log(location);

    return (
        <Link to={location.state?.from ?? '/'}>
            <Icon />
            <p>Go back</p>
        </Link>
    );
};