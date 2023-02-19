const mongoose = require('mongoose');

const userschema = mongoose.Schema({
     name: String,
     email:String,
     password:String,

} ,{ versionKey:false})

const UserModel =mongoose.model('user' ,userschema )

module.exports = {UserModel}