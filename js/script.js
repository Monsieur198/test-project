'use strict';

let numberOfFilms;

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

function start() {
    while (!numberOfFilms || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        let movie = '';
        let rating = '';

        do {
            movie = prompt('Один из последних просмотренных фильмов?', '');
        } while (!movie || movie == ' ' || movie.length > 50);
        
        do {
            rating = prompt('На сколько оцените его?', '');
        } while (!rating || rating == ' ' || rating.length > 50);
    
        personalMovieDB.movies[movie] = rating;
    }
}

rememberMyFilms();

function detectPersonalLevel() {
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
}

detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

function writeYourGenres () {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres.push(prompt(`Ваш любимый жанр под номером ${i}`));
    }
}

writeYourGenres();

showMyDB(personalMovieDB.private);