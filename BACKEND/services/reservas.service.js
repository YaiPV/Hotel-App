const reservaSchema = require('../models/reservas.model');

const createReserva = (reserva) => new Promise((resolve, reject) => {
    const reservaDB = reservaSchema(reserva);
    reservaDB.save()
      .then(() => resolve({code: 201, message: "la reserva fue creada"}) )
      .catch((error) => reject({code: 500, message: error}) );
  });

  module.exports = {
    createReserva
  }