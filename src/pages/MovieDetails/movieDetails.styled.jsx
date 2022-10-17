import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { BsArrowLeft } from 'react-icons/bs';

export const GoBackLink = styled(NavLink)`
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    padding: 10px 15px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`
export const Icon = styled(BsArrowLeft)`
    margin-right: 10px;
`;

export const Container = styled.section`
    display: flex;
`;

export const Poster = styled.img`
    width: 300px;
    height: 450px;
    object-fit: cover;
`;

export const MovieDesc = styled.ul`
    list-style: none;
`;

export const Title = styled.li`
    font-size: 24px;
    font-weight: 700;
`;

export const Popularity = styled.li`
`;

export const Overview = styled.li`
    font-size: 20px;
    font-weight: 700;
`;

export const Genres = styled.li`
    font-weight: 700;
`;

export const Text = styled.p`
    font-size: 16px;
    font-weight: 400;
`;

