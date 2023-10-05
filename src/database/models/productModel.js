
const mongoose = require('mongoose')


const storageSchema = new mongoose.Schema({
    capacity: Number,
    quantity: Number,
    required:true
})
const colorSchema = new mongoose.Schema({
    color: String,
    quantity: Number,
    required:true
})

const ProductSchema = new mongoose.Schema({
    name: {type: String, required:true},
    price: {type: Number, required:true},
    category: {
    type: String,
    required: true,
    lowercase: true,
    enum: ['iphone', 'android', 'watch', 'earphone']
    },
    friday: Boolean,
    model: String,
    quantity: Number,
    image: String,
    discount: Number,
    rating: {
        nota5: {
          type: Number,
          default: 0 
        },
        nota4: {
          type: Number,
          default: 0 
        },
        nota3: {
          type: Number,
          default: 0 
        },
        nota2: {
          type: Number,
          default: 0 
        },
        nota1: {
          type: Number,
          default: 0 
        }
      },
    storage:[storageSchema],
    color:[colorSchema]
})

module.exports = mongoose.model('productSchema', ProductSchema)