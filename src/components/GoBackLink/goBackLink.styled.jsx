import { NavLink } from "react-router-dom";
import { BsArrowLeft } from 'react-icons/bs';
import styled from "styled-components";

export const Link = styled(NavLink)`
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    padding: 10px 15px;
    margin-bottom: 16px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`
export const Icon = styled(BsArrowLeft)`
    margin-right: 10px;
`;