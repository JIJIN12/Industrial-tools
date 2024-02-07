const mongoose = require('mongoose')
const schema = mongoose.Schema

const cartschema = new schema({
    productid:{type:mongoose.Types.ObjectId,ref:'Allitems_tb'},
    quantity:{type:Number,default:1}

})

const cartmodel = mongoose.model('cart_tb',cartschema)

module.exports = cartmodel