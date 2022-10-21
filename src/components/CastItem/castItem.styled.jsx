import styled from "styled-components";

export const CastWrapper = styled.li`
    &:not(:last-child){
        margin-bottom: 20px;
    }
`;

export const ProfileImg = styled.img`
    width: 100px;
    height: 120px;
    object-fit: contain;
`