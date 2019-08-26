const db = require('../config/mysql2');

exports.getAdminHome = async function (req, res, next) {
    res.render('admin_home');
}