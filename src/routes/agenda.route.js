const express = require('express');
const router = express.Router();
const agendaController = require('../controllers/agenda.controller');
const { isLoggedIn } = require('../lib/auth.lib');

router.get('/add', isLoggedIn, agendaController.addContactRender);
router.post('/add', isLoggedIn, agendaController.addContact);
router.get('/getAll', isLoggedIn, agendaController.getAllContact);
router.get('/delete/:id', isLoggedIn, agendaController.deleteContact);
router.get('/edit/:id', isLoggedIn, agendaController.editContactRender);
router.post('/edit/:id', isLoggedIn, agendaController.editContact);

module.exports = router;