import { NavLink } from "react-router-dom";
import { Box } from "./Box";

const navItems = [
    {href: '/', text: 'Home'},
    {href: 'movies', text: 'Movies'},
];

export const AppBar = () => {
    return (
        <Box as={'header'} width="100vw" height="50px" bg="tomato">
            <Box as="nav">
                {navItems.map(({ href, text }) => (
                    <NavLink to={href} key={href}>
                        {text}
                    </NavLink>
                ))}
            </Box>
        </Box>
    );
};