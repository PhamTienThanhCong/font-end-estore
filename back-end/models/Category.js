const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 20,
        unique: true
    },
    description: {
        type: String,
        required: true,
        minLength: 5,
        maxLength: 50
    }
})

module.exports = mongoose.model('Category', categorySchema);