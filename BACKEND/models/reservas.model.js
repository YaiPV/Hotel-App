const mongoose = require('mongoose');

const reservasSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        min: 4,
        max: 255
    },
    acompanante: {
        type: String,
        required: true,
        min: 6,
        max: 1024
    },
    email: {
        type: String,
        required: true,
        minlength: 6,
        max: 500
    },

    dias: {
        type: String,
        required: true,
        minlength: 1,
        max: 500
    },

    fecha: {
        type: String,
        required: true,
        minlength: 1,
        max: 500
    },

    sugerencias: {
        type: String,
        required: true,
        minlength: 6,
        max: 500
    },

    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('reserva', reservasSchema);


