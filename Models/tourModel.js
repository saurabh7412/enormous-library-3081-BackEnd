


const mongoose = require('mongoose');

const tourSchema  = mongoose.Schema({
    tour_type : {type : String, required : true},
    date : {type : String, required : true},
    time : {type : String, required : true},
    phone : {type : String, required : true},
    email : {type : String, required : true}
})

const Tours = mongoose.model('tour',tourSchema);

module.exports = Tours;
