const express = require('express');
const { route } = require('express/lib/application');
const app = express.Router();

app.get('/sol1', function (req, res) {
    let arr= [1,2,3,4,5,7];
    let missingNumber;
    let n=arr.length;
    let sumOriginal=((n+1)*(n+2))/2;
    let sumMissing=0;
    arr.forEach(x=>sumMissing+=x);
    missingNumber=sumOriginal-sumMissing;
    res.send(`The Missing number is ${missingNumber}`);
});
app.get('/sol2', function (req, res) {
    let arr= [33, 34, 35, 36, 38];
    let missingNumber;
    let n=arr.length;
    let sumOriginal=((n+1)*(arr[0]+arr[n-1]))/2;
    let sumMissing=0;
    arr.forEach(x=>sumMissing+=x);
    missingNumber=sumOriginal-sumMissing;
    res.send(`The Missing number is ${missingNumber}`);
});

module.exports = app;