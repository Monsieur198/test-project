'use strict';

let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

switch (true) {
    case personalMovieDB.count < 10:
        console.log('Просмотрено довольно мало фильмов');
        break;
    case personalMovieDB.count >= 10 && personalMovieDB.count <= 30:
        console.log('Вы - классический зритель');
        break;
    case personalMovieDB.count > 30:
        console.log('Вы - киноман!');    
        break;
}

for (let i = 0; i < 2; i++) {
    do {
        var movie = prompt('Один из последних просмотренных фильмов?', '');
    } while (!movie || movie == ' ' || movie.length > 50);
    
    do {
        var rating = prompt('На сколько оцените его?', '');
    } while (!rating || rating == ' ' || rating.length > 50);

    personalMovieDB.movies[movie] = rating;
}

console.log(personalMovieDB.movies);

