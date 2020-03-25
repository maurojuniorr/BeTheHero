const express = require('express');
const routes = express.Router();
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');
// Tipos de parametros
// query params: nomeados e enviados na rota depois do ? (filtros ou paginacao)
// route params: utilizados para identificar recursos
// request body: corpo da requisicao utilizado para criar ou alterar recursos

routes.post('/sessions', SessionController.create);
routes.get('/ongs', OngController.index);

routes.get('/profile', ProfileController.index);

routes.post('/ongs', OngController.create);
routes.post('/incidents', IncidentController.create);
routes.get('/incidents', IncidentController.index);
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;
