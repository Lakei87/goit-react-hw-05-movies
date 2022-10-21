import PropTypes from 'prop-types';
import { ProfileImg, CastWrapper } from './castItem.styled';
import posterNotFound from '../../images/poster-not-found.png';

export function CastItem({ profile, name, character }) {
    const baseUrl = 'https://image.tmdb.org/t/p/w500/';

    const chooseProfile = urlData => {
        return (urlData ? `${baseUrl}${urlData}` : posterNotFound);
    };

    return (
        <CastWrapper>
            <ProfileImg src={chooseProfile(profile)} alt={name} />
            <p>{name}</p>
            <p>Character: {character}</p>
        </CastWrapper>
    );
};

CastItem.propTypes = {
    profile: PropTypes.string,
    name: PropTypes.string.isRequired,
    character: PropTypes.string.isRequired,
};