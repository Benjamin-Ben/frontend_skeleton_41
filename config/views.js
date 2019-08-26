const express = require('express');

module.exports = function(app) {
    app.set('view engine', 'ejs');
    app.set('views', 'views');
    app.use(express.static('./public'));
};
