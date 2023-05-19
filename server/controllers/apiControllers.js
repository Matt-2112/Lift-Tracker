const db  =require('../models/pgModel.js')

const apiController = {};

apiController.getUserHistory = (req, res, next) => {
    const query = 'SELECT * FROM test';
    db.query(query, (err, response) => {
        if(err) {
            return next(err);
        }
        console.log(response.rows[0]);
        next();
    })
};

module.exports = apiController;