export const createGenresList = genres => {
    return genres.map(genreItem => genreItem.name).join(', ');
};