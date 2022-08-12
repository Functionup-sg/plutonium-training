const express = require('express');
const { toNumber } = require('lodash');
// const myHelper = require('../util/helper')
const underscore = require('underscore')
// const movielist=require('./'); 
const router = express.Router();
const lodash = require('lodash');




// ===========================problem 1=========================================
// Create an API for GET /movies that returns a list of movies. 
// Define an array of movies in your code and return the value in response.

router.get('/GET/movies', function (req, res) {

    const array1 = ["Spider-Man: No Way Home", "The Father ", "The Last Duel"]

    res.send(array1)
});


// =======================problem 2,3=============================================
//                    
//                   *******case 1*******
// Create an API GET /movies/:indexNumber 
// (For example GET /movies/1 is a valid request and it should return the movie in your array at index 1).
//  You can define an array of movies again in your api.


//                      *******case 2*******
// Handle a scenario in problem 2 where if the index is 
// greater than the valid maximum value a message is returned that tells the user to 
// use a valid index in an error message.


router.get('/GET/movies/:indexNumber', function (req, res) {
    const movie = ["Spider-Man: No Way Home", "The Father ", "The Last Duel"]
    let a = req.params.indexNumber
    if (a <= movie.length) {
        let indexNumber = movie[a]

        res.send(indexNumber)
    }
    else {
        res.send("invalid input")
    }

});


module.exports = router;


// =======================problem 4,5=================================================

// Write another api called GET /films. Instead of an array of strings define an array of
//  movie objects this time. Each movie object should have values - id, name. An example of movies array is 

router.get('/GET/films', function (req, res) {
    let filmsList = [{
        "id": 1,
        "name": "The Shining"
    },
    {
        "id": 2,
        "name": "Incendies"
    },
    {
        "id": 3,
        "name": "Rang de Basanti"
    },
    {
        "id": 4,
        "name": "Finding Nemo"
    }]


    res.send(filmsList);
});




router.get('/GET/films/:filmId', function (req, res) {
    let filmList = [{
        "id": 1,
        "name": "The Shining"
    },
    {
        "id": 2,
        "name": "Incendies"
    },
    {
        "id": 3,
        "name": "Rang de Basanti"
    },
    {
        "id": 4,
        "name": "Finding Nemo"
    }]
    let e = req.params.filmId
    let f = Number(e) - 1
    // let g=filmList[f]
    // console.log(g)
    if (f < filmList.length) {
        res.send(filmList[f])

    }
    else {
        res.send("No movie exists with this id")
    }

});


// =======================problem 6,7=================================================


// Using the package ‘lodash’ solve below problems(Write all this in route.js in /hello route handler)

// - Create an array of strings containing the names all the months of a year and split the array into 4 equally sized sub-arrays using the chunk function. Print these sub-arrays

// - Create an array containing the first 10 odd numbers. Using the tail function, return the last 9 elements of it and print them on console.

// - Create 5 arrays of numbers containing a few duplicate values. Using the function union create a merged array with only unique values and print them

// - Use the function fromPairs to create an object containing key value pairs. For example [“horror”,”The Shining"],[“drama”,”Titanic"],[“thriller”,”Shutter Island"],[“fantasy”,”Pans Labyrinth"]



router.get('/hello', function (req, res) {
    const months = [...Array(12).keys()].map(key => new Date(0, key).toLocaleString('en', { month: 'long' }))
    // months=['January','February','March','April','May','June','July','August','September','October','November','December']
    let a = lodash.chunk(months, 3);
    console.log(a)
    
    let odd = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19,]
    let tail = lodash.tail(odd);
    console.log(tail)


    let array1 = [1, 2, 5, 4, 1, 4, 2]
    let array2 = [1, 2, 5, 4, 1, 4, 7, 1, 7, 2]
    let array3 = [1, 2, 5, 4, 1, 4, 2, 5, 8, 5]
    let array4 = [1, 2, 5, 4, 1, 4, 2, 4, 7]
    let array5 = [1, 2, 5, 4, 1, 4, 2, 6, 7, 8, 4, 6]
    let combine = lodash.union(array1, array2, array3, array4, array5)
    console.log(combine);


let myFav=[["horror","The Shining"],["dramas","Titanic"],["thriller","Shutter Island"],["fantasy","Pans Labyrinth"]]

        let obj=lodash.fromPairs(myFav)
        console.log(obj)


    res.send('Hello there! here is the list of months')
});



module.exports = router;
// // adding this comment for no reason
