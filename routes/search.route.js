const {
    showSearchForm, searchProducts
} = require('../controllers/search.controller');

module.exports = function (app) {
    app.get('/search', showSearchForm);
    app.get('/search/products', searchProducts);
}