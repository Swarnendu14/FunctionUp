const express = require('express');
const myLodash= require('lodash');
const { route } = require('express/lib/application');
const router = express.Router();
const commonFile = require('./common.js')
const logger=require("../logger/logger.js")
const {printDate,printMonth,getBatchInfo}=require("../util/helper.js")
const validator=require('../validator/formatter.js')


router.get('/test-me', function (req, res) {
    res.send('This should be working!')
    console.log("\n");
    logger.wel();
    
    console.log("\n");
    printDate();
    printMonth();
    getBatchInfo();
    
    console.log("\n");
    validator.trm();
    validator.lwr();
    validator.upr();
    // Using the package ‘lodash’ solve below problems(Write all this in route.js in /test-me route handler)
    console.log("\n");
    // Create an array of strings containing the names all the months of a year and split the array into 4 equally sized sub-arrays using the chunk function. Print these sub-arrays on console.
    console.log(myLodash.chunk(["January", "February", "March", "April", "May", "June", "July", "August", "September", "Octeber", "November", "December"], 4));
    
    console.log("\n");
    // Create an array containing the first 10 odd numbers. Using the tail function, return the last 9 elements of it and print them on console.
    let arr=[];
    let count=10,i=1;
    while(count!=0)
    {
        arr.push(i);
        i+=2;
        count--;
    }
    console.log(myLodash.tail(arr));
    
    console.log("\n");
    // Create 5 arrays of numbers containing a few duplicate values. Using the function union create a merged array with only unique values and print them on console
    console.log(myLodash.union([2,1,4],[3,1,5],[10,2,7,6],[1,8],[0,9,12]));
    
    console.log("\n");
    // Use the function fromPairs to create an object containing key value pairs. For example [“horror”,”The Shining"],[“drama”,”Titanic"],[“thriller”,”Shutter Island"],[“fantasy”,”Pans Labyrinth"]
    console.log(myLodash.fromPairs( [
        ["horror", "TheShining"],
        ["drama", "Titanic"],
        ["thriller", "Shutter Island"],
        ["fantasy", "Pans Labyrinth"]
    ]));

});

router.get('/test-you', function (req, res) {
    console.log('This is the constant I created', commonFile.name)
    res.send('Hello there, welcome to this application!')
});


module.exports = router;