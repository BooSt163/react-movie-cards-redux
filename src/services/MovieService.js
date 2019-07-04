import movies from './movies.json';
import recomendations from './recomendations.json';

const convertArrayToObject = (items) => items.reduce(
    (acc, item) => ({ ...acc, [`${item.id}`]: item}),
    {}
);

export default class MovieService { 
    static getMovies() {
        return movies ? convertArrayToObject(movies) : {};
    }

    static getAdditionalInfo() {
        return recomendations ? recomendations : [];
    }
}