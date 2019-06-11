const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.Promise = global.Promise; 
const bcrypt = require('bcrypt-nodejs');

const stories = new Schema({
   name : { type: String , required:true },
   descripcion: { type: String , required:true },
   type: { type: String , required:true },
});

module.exports = mongoose.model('storiess', stories);