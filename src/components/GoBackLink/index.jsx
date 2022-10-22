import { useLocation } from "react-router-dom";
import { Link, Icon } from "./goBackLink.styled"

export function GoBackLink() {
    const location = useLocation();

    return (
        <Link to={location.state?.from ?? '/'}>
            <Icon />
            <p>Go back</p>
        </Link>
    );
};