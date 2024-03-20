const mongoose = require('mongoose')
const schema = mongoose.Schema


const registerschema = new schema({
    login_id:{type:String},
    FullName:{type:String},
    username:{type:String},
    Email:{type:String},
    password:{type:String}
})

const registermodel = mongoose.model('register_tb',registerschema)
module.exports = registermodel