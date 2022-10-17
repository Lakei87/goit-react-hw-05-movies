import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Link = styled(NavLink)`
    text-decoration: none;
    color: black;

    &:not(:last-child){
        margin-right: 20px;
    }

    &.active{
        color: red;
    }
`;

export const Header = styled.header`
    height: 50px;
    padding: 0 16px;
    display: flex;
    align-items: center;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
`;