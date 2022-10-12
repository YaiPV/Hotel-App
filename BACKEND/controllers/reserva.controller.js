const reservaServices = require('../services/reservas.service');

const postReserva = (body) => new Promise((resolve, reject) => {
    try {
      resolve( reservaServices.createReserva(body) );
    } catch (error) {
      reject(error);
    }
  });

  module.exports = {
    
    postReserva

  }