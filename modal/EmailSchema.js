const mongoose = require("mongoose")

const emailSchema = new mongoose.Schema({
   email:String
    
})

const email = mongoose.model('emailData', emailSchema);

module.exports = email;
