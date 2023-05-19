const express = require('express');


const router = express.Router();

const apiController = require('../controllers/apiControllers.js')


router.get('/history', apiController.getUserHistory, (req, res) => {
    res.sendStatus(200);
});

module.exports = router