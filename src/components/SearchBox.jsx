import { useState } from "react";
import Notiflix from "notiflix";
import PropTypes from 'prop-types';

export function SearchBox({ value, onSubmit }) {
    const [searchQuery, setSearchQuery] = useState(value);

    const handleInputChange = e => {
        const { value } = e.currentTarget;
        setSearchQuery(value);
    };

    const handleSubmit = e => {
        e.preventDefault();

        if (searchQuery.trim() !== '') {
            onSubmit(searchQuery);
        } else {
            Notiflix.Notify.failure('Nothing was found according to your request. Please, try again')
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                autoComplete="off"
                autoFocus
                value={searchQuery}
                placeholder="Search movies"
                onChange={handleInputChange}
            />
            <button
                type="submit">
                <span>Search</span>
            </button>
        </form>
    );
};

SearchBox.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
};
