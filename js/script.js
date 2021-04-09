'use strict';

let numberOfFilms;

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    private: false,
    start: function () {
        while (!this.count || isNaN(this.count)) {
            this.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            let movie = '';
            let rating = '';
    
            do {
                movie = prompt('Один из последних просмотренных фильмов?', '');
            } while (!movie || movie == ' ' || movie.length > 50);
            
            do {
                rating = prompt('На сколько оцените его?', '');
            } while (!rating || rating == ' ' || rating.length > 50);
        
            this.movies[movie] = rating;
        }
    },
    detectPersonalLevel: function () {
        switch (true) {
            case this.count < 10:
                console.log('Просмотрено довольно мало фильмов');
                break;
            case this.count >= 10 && personalMovieDB.count <= 30:
                console.log('Вы - классический зритель');
                break;
            case this.count > 30:
                console.log('Вы - киноман!');    
                break;
        }
    },
    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(this);
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i <= 3; i++) {
            this.genres.push(prompt(`Ваш любимый жанр под номером ${i}`));
        }
    }
};

personalMovieDB.start();

personalMovieDB.rememberMyFilms();

personalMovieDB.detectPersonalLevel();

personalMovieDB.writeYourGenres();

personalMovieDB.showMyDB(personalMovieDB.private);