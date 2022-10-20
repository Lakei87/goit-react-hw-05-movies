import { useState } from "react";

export default function SearchBox({ onSubmit }) {
    const [searchQuery, setSearchQuery] = useState('');

    const handleInputChange = e => {
        const { value } = e.currentTarget;
        setSearchQuery(value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        onSubmit(searchQuery);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                autoComplete="off"
                autoFocus
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
