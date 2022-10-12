const express = require('express');
const response = require('../lib/response-message');
const log = require('../lib/log-messages');

const reservaController = require('../controllers/reserva.controller');

const router = express.Router();

router.post('', (req, res) => {
    const { body } = req;
    reservaController.postReserva(body)
      .then( result => {
        response(res, { code: result.code, key: "message", payload: result.message});
      })
      .catch(error => {
        log.logError(error);
        response(res, {code: error.code, key: "message", payload: error.message})
      });
  });

  module.exports = router;