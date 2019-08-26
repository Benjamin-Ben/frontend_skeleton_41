module.exports = function (req, res, next) {
    if (!req.session) {
        res.redirect('/login');
        return;
    }
    if (req.session.isLoggedIn) {
        return next();
    }
    res.redirect('/login');
    return;
};