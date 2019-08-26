const session = require('express-session');

module.exports = function (app) {
    app.use(session({
        secret: 'BY 7Ol%~iVcz.kpD8LmZ bPvf=pO vRS$@ wWb$_` Ha, \\baE =*xh`z',
        resave: true,
        saveUninitialized: true
    }));
};
