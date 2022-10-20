import { Box } from "../Box";
import { Link, Header } from "./appBar.styled";

export default function AppBar() {
    return (
        <Header>
            <Box as='nav'>
                <Link to='/' end>Home</Link>
                <Link to='movies'>Movies</Link>
            </Box>
        </Header>
    );
};
