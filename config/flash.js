const flash = require('express-flash');

module.exports = function (app) {
    app.use(flash());
};