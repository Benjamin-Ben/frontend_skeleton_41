const {
    getLoginForm,
    loginCheck,
    logout
} = require('../controllers/login.controller');

module.exports = function (app) {
    app.get('/login', getLoginForm);
    app.post('/login', loginCheck);
    app.get('/logout', logout)
}