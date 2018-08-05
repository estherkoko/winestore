//implement router from express
const express = require ('express');
var router=express.Router();

//import objectid from mongoose which will be later used to check if id is valid
var ObjectId = require('mongoose').Types.ObjectId;

//require statement for wine model
var { wine } = require('../models/wines');

//add router for wine collection - request and response
//execute get request =>localhost:3000/wine/list
router.get('/', (req, res) => {
    wine.find((err, docs) => {
        if (!err) {res.send(docs);}
        else {console.log('Error in Retrieving Wines : ' + JSON.stringify(err, undefined, 2));}
    });
});

//create get request for id to pull corresponding wine record
router.get('/:id', (req, res) => {

    //check if id is valid - if not send 400 status code
        if (!ObjectId.isValid(req.params.id)) 
            return res.status(400).send(`No record found for given id : ${req.params.id}`);

        wine.findById(req.params.id, (err, doc) => {
            if (!err) {res.send(doc);}
            else {console.log('Error in Retrieving Wines : ' + JSON.stringify(err, undefined, 2));}
            });
        });
    

//post request - to send data
router.post('/', (req, res) => {
    //create object of wine callled myWine - send details of wine using request.body object
    var myWine = new wine({
        name: req.body.name,
        description: req.body.description,
        typeOfWine: req.body.typeOfWine,
        size : req.body.size,
        price :req.body.price,
    });
    //insert new record into mongo database using the save object
    myWine.save((err, doc)=> {
        if (!err) {res.send(doc);}
        else {console.log('Error in Wine Save : ' + JSON.stringify(err, undefined, 2));}

    });
});

//create update operation using the put method to send json data containing new details of a wine
router.put('/:id', (req, res)=> {
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No records with given id : ${req.params.id}`);

        //create object 
        var myWine = {
            name: req.body.name,
            description: req.body.description,
            typeOfWine: req.body.typeOfWine,
            size : req.body.size,
            price :req.body.price,
        };
        //pass object with options and call back function with err, doc. 
        //new: true test mongodb whether we want to return all data of wine or just the updated data back to the response
        wine.findByIdAndUpdate(req.params.id, {$set: myWine}, {new : true }, (err, doc) => {
            if (!err) {res.send(doc);}
            else {console.log('Error in Wine Update : ' + JSON.stringify(err, undefined, 2));}
        });
});

//create delete operation
router.delete('/:id', (req, res)=> {
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No records with given id you're trying to delete: ${req.params.id}`);
       
        wine.findByIdAndRemove(req.params.id, (err, doc) => {
            if (!err) {res.send(doc);}
            else {console.log('Error in Wine Delete : ' + JSON.stringify(err, undefined, 2));}
    
        });

});
//export the router object
module.exports=router;