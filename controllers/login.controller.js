const db = require('../config/mysql2');

const { compareSync } = require('bcryptjs');

exports.getLoginForm = function (req, res, next) {
    res.render('login');
};

exports.loginCheck = async function (req, res, next) {
    try {
        const userSQL = `SELECT users.id, users.username, users.password, roles.level
        FROM users
        INNER JOIN roles ON fk_role = roles.id 
        WHERE username = :username`;

        const [rows] = await db.query(userSQL, {
            username: req.fields.username
        });

        if (rows.length !== 1) {
            res.redirect('/login');
            return;
        };

        if (!compareSync(req.fields.password, rows[0].password)) {
            res.redirect('/login');
            return;
        }
        
        req.session.isLoggedIn = true;
        req.session.user = rows[0].id;
        req.app.locals.showUsername = rows[0].username;
        req.app.locals.showLevel = rows[0].level;
        req.app.locals.isLoggedIn = true;
        res.redirect(`/profile/${rows[0].id}`);
    } catch (error) {
        console.error(error);
        res.send('FEJL!');
    }
};

exports.logout = function (req, res, next) {
    delete req.session.isLoggedIn;
    delete req.session.user;
    delete req.app.locals.isLoggedIn;
    res.redirect('/login');
};