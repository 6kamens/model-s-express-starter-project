const { Router } = require('express');
const express = require('express');
const router = express.Router();
const example = require('../controllers/example');


router.get('/testParam/:word', example.testParam );
router.post('/testBody', example.testBody );



module.exports = router;