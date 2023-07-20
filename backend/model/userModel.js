const mongoose = require('mongoose')

// Address schema
const addressSchema = new mongoose.Schema({
    city: { 
        type: String, 
        required: true 
    },
    state: {
         type: String, 
         required: true
         },
    zipcode: { type: String,
         required: true 
        },
  });   

  // User Schema

const UserSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },

    lastName:{
        type:String,
        required:true
    },

    phone:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true

    },

      pricing:{
        type:String,
        required:true

    },
    address: {  

        type:addressSchema,
        required:true

    }


})
module.exports = mongoose.model('User',UserSchema);