const express = require('express');
const router = express.Router();
const { isLoggedIn, isNotLoggedIn } = require('../lib/auth.lib');
const noteController = require('../controllers/note.controller');

router.post('/add', isLoggedIn, noteController.addNote);
router.get('/getAll', isLoggedIn, noteController.getAllNote);
router.get('/add', isLoggedIn, noteController.addNoteRender);
router.post('/edit/:id', isLoggedIn, noteController.editNote);
router.get('/delete/:id', isLoggedIn, noteController.deleteNote);
router.get('/edit/:id', isLoggedIn, noteController.editNoteRender);

module.exports = router;