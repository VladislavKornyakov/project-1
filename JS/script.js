'use strict';
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели', '');
console.log(numberOfFilms);

const personalMovieDB = {
	count : numberOfFilms,
	movies : {},
	actors : {},
	genres : [],
	privat : false
};
const lastWatchedMovie1 = prompt('Один из последних просмотреных фильмов?', '');
const movieRating1 = prompt('На сколько оцените его ?', '');
const lastWatchedMovie2 = prompt('Один из последних просмотреных фильмов?', '');
const movieRating2 = prompt('На сколько оцените его ?', '');

personalMovieDB.movies[lastWatchedMovie1] =  movieRating1;
personalMovieDB.movies[lastWatchedMovie2] =  movieRating2;

console.log(personalMovieDB);