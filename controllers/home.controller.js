const db = require('../config/mysql2');

// Client Site ---------------------------------------------------------------------------------------------------

exports.getHome = async function (req, res, next) {
    try {
        res.render('home');
    } catch (error) {
        console.error(error);
        res.send('FEJL!!!!')
    }
}


// ADMIN PANEL --------------------------------------------------------------------------------------------------

exports.getAdminHome = async function (req, res, next) {
    res.render('admin_home');
}