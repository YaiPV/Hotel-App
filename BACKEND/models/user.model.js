const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 4,
        max: 255
    },
    email: {
        type: String,
        required: true,
        min: 6,
        max: 1024
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
        max: 50
    },

    apellido: {
        type: String,
        required: true,
        minlength: 4,
        max: 255
    },

    identificacion: {
        type: String,
        required: true,
        minlength: 4,
        max: 1000
    },

    celular: {
        type: String,
        required: true,
        minlength: 4,
        max: 255
    },

    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('User', userSchema);


