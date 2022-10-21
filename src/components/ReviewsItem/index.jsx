import PropTypes from 'prop-types';
import { ReviewWrapper, Author } from './reviewsItem.styled';

export function ReviewsItem({author, content}) {
    return (
        <ReviewWrapper>
            <Author>{author}</Author>
            <p>{content}</p>
        </ReviewWrapper>
    );
};

ReviewsItem.propTypes = {
    author: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
}