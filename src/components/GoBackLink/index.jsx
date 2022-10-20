import { Link, Icon } from "./goBackLink.styled"
import { useLocation } from "react-router-dom";

export default function GoBackLink() {
    const location = useLocation();
    console.log(location);

    return (
        <div>
            <Link to={location.state?.from ?? '/'}>
                <Icon />
                <p>Go back</p>
            </Link>
        </div>
    );
};