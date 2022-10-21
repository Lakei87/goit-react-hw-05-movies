import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    margin-bottom: 20px;
`;

export const Poster = styled.img`
    width: 300px;
    height: 450px;
    object-fit: cover;
`;

export const MovieDesc = styled.ul`
    list-style: none;
    & li:not(:last-child){
        margin-bottom: 10px;
    }
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