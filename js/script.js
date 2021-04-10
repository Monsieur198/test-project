'use strict';

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
    showMyDB: function () {
        if (!this.private) {
            console.log(this);
        }
    },
    writeYourGenres: function() {
        for (let i = 0; i < 3; i++) {
            do {
                this.genres[i] = prompt(`Ваш любимый жанр под номером ${i+1}`);
            } while (!this.genres[i] || this.genres[i] == ' ');
        }
        this.genres.forEach((item, i) => console.log(`Любимый жанр #${i+1} - это ${item}`));
    },
    toggleVisibleMyDB: function() {
        if (this.private) {
            this.private = false;
        } else {
            this.private = true;
        }
    }
};

// personalMovieDB.start();

// personalMovieDB.rememberMyFilms();

// personalMovieDB.detectPersonalLevel();

// personalMovieDB.writeYourGenres();

// // personalMovieDB.toggleVisibleMyDB();

// personalMovieDB.showMyDB(personalMovieDB.private);