module.exports = function (app) {
    app.use(function (req, res, next) {
        if (typeof req.app.locals.isLoggedIn == 'undefined') {
            req.app.locals.isLoggedIn = false;
        }
        next();
    });
};