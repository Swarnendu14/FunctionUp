const express = require('express');
const { route } = require('express/lib/application');
const router = express.Router();
const commonFile = require('./common')
// const myUnderscore = require('underscore')

router.get('/test-me', function (req, res) {
    res.send('This should be working!')
});

router.get('/test-you', function (req, res) {
    console.log('The exported module is: ',commonFile)
    commonFile.doSomething()
    console.log('This is the constant I created', commonFile.name)
    res.send('Hello there, welcome to this application!')
});

// router.get('/test-underscore', function(req, res){
//     let result = myUnderscore.first([11,12,23,44,15], 4)
//     console.log('the result is',result)
//     res.send('done')
// })

router.get('/cohorts', function (request, response){
    // logic to get the cohorts from database
    // logic tp get only the active cohorts
    // logic to get only the cohort with a size than 50
    // logic to get only the backend cohorts
    response.send(['technetium','nobelium'])
})

router.get('/students', function(req, res){
    // receive or access the query params in the code
    // write a logic on these query params
    // city, score
    console.log(req.query)
    let requestedCity = req.query.city
    let sortField = req.query.sort
    // logic to get students
    res.send(["Sabiha","Neha","Akash","Sonali"])
})

router.get('/students/:studentName', function(req, res) {
    console.log(req.params.studentName)
    /// go to database and search for studentName student
    // store the data found in this variable - studentDetails
    //res.send({data: studentDetails})
    res.send('student data')
})



// 1.Create an API for GET /movies that returns a list of movies. Define an array of movies in your code and return the value in response.

router.get('/GET/movies',function(req,res){
    let movies=['Rang de basanti','The shining','Lord of the rings','Batman begins'];
    res.send(movies);
})


//2.Create an API GET /movies/:indexNumber (For example GET /movies/1 is a valid request and it should return the movie in your array at index 1). You can define an array of movies again in your api.

//3. Handle a scenario in problem 2 where if the index is greater than the valid maximum value or smaller that the valid minimum value, a message is returned that tells the user to use a valid index in an error message.


router.get('/GET/movies/:indexNumber',function(req,res){
    let movies=['Rang de basanti','The shining','Lord of the rings','Batman begins'];
    let n=movies.length-1;
    if(req.params.indexNumber>=0 && req.params.indexNumber<movies.length)
     res.send(movies[req.params.indexNumber]);
    else
     res.send(`Please give a valid input 0 to ${n}`);
})


// 4.Write another api called GET /films. Instead of an array of strings define an array of movie objects this time. Each movie object should have attributes - id and name. An example of movies array is 
// [ {
//     “id”: 1,
//     “name”: “The Shining”
//    }, {
//     “id”: 2,
//     “name”: “Incendies”
//    }, {
//     “id”: 3,
//     “name”: “Rang de Basanti”
//    }, {
//     “id”: 4,
//     “name”: “Finding Nemo”
//    }]
   
//Return the entire array in this api’s response

   
router.get('/GET/films',function(req,res){
    let flims=[ 
        {
        id: 1,
        name: 'The Shining'
       },
        {
        id: 2,
        name: 'Incendies'
       },
        {
        id: 3,
        name: 'Rang de Basanti'
       },
        {
        id: 4,
        name: 'Finding Nemo'
       }
    ]
       
    res.send(flims);
})


//5.Write api GET /films/:filmId where filmId is the value received in request path params. Use this value to return a movie object with this id. In case there is no such movie present in the array, return a suitable message in the response body. Example for a request GET /films/3 should return the movie object 
// {
//     “id”: 3,
//     “name”: “Rang de Basanti”
//    }
//    Similarly for a request GET /films/9 the response can be something like - ‘No movie exists with this id’
   

router.get('/GET/films/:filmId',function(req,res){
    let flims=[ 
        {
        id: 1,
        name: 'The Shining'
       },
        {
        id: 2,
        name: 'Incendies'
       },
        {
        id: 3,
        name: 'Rang de Basanti'
       },
        {
        id: 4,
        name: 'Finding Nemo'
       }
    ]
    let obj=flims.filter(x=>x.id==req.params.filmId);
    if(obj[0])
        res.send(obj[0]);
    else
        res.send(`No movie exists with this id enter valid id between 1 to ${flims.length}`);
})

module.exports = router;