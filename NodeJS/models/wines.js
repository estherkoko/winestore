const mongoose = require('mongoose');

var wine = mongoose.model('wine', {
    name: {type: String},
    description : {type: String},
    typeOfWine : {type : String},
    size : {type : Number},
    price : {type : Number},
});

//export wines
module.exports = {wine};