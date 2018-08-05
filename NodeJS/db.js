const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/crudDB', (err) => {
    if(!err)
        console.log('MongoDB Connected Successfully....');
    else
        console.log('Error found in DB Connection : '+ JSON.stringify(err, undefined, 2));

});

module.exports=mongoose;