const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.Promise = global.Promise; 
const bcrypt = require('bcrypt-nodejs');
const cultures = mongoose.model('cultures');

const expression = new Schema({
   name : { type: String , required:true },
   descripcion: { type: String , required:true },
   link: { type: String , required:true },
   cultures: { type: Schema.ObjectId, ref: "cultures" } 

});

module.exports = mongoose.model('expressions', expression);