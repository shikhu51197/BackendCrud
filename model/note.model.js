const mongoose = require('mongoose');

const noteschema = mongoose.Schema({
     token: String,
     title:String,
     subtitle:String,
     para :String,

} ,{ versionKey:false})

const NoteModel =mongoose.model('note' ,noteschema )

module.exports = {NoteModel}