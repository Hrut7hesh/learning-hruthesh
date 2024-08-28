const express = require('express');
const router = express.Router();
const sanitizeHtml = require('sanitize-html');
const escapeHtml = require('escape-html');
const todocontroller = require("../controllers/todo")


router.post('/', todocontroller.createTodo);


router.get('/', todocontroller.index);

router.get('/:id', todocontroller.getTodo);

router.put('/:id', todocontroller.putTodo);

router.delete('/:id', todocontroller.deleteTodo);

module.exports = router;