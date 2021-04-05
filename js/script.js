'use strict';

let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

for (let i = 0; i < 2; i++) {
    let movie = prompt('Один из последних просмотренных фильмов?', '');
    let rating = prompt('На сколько оцените его?', '');
    personalMovieDB.movies[movie] = rating;
}

console.log(personalMovieDB.movies);