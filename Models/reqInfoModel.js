

const mongoose = require('mongoose');

const reqInfoSchema  = mongoose.Schema({
    phone : {type : String, required : true},
    email : {type : String, required : true},
    message : {type : String, required : true},
})

const refInfo = mongoose.model('reqInfo',reqInfoSchema);

module.exports = refInfo;
