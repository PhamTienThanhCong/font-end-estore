const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 50,
        unique: true
    },
    url: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 50,
    },description: {
        type: String,
        required: true,
        minLength: 5,
        maxLength: 100,
    },
    image: {
        type: String,
        required: true,
        minLength: 5,
        maxLength: 50
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    },
    star: {
        type: Number,
        min: 1,
        max: 5
    }
})

module.exports = mongoose.model('Product', productSchema);
