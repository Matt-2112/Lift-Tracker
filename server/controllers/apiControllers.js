const db  =require('../models/pgModel.js')

const apiController = {};

apiController.getUserHistory = (req, res, next) => {
    const query = 'SELECT * FROM sessions WHERE user_id = 1;';
    db.query(query, (err, response) => {
        if(err) {
            return next(err);
        }
        console.log(response.rows[0]);
        res.locals = response.rows;
        next();
    });
};



module.exports = apiController;