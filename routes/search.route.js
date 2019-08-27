const {
    showProductsSearchForm, searchProducts
} = require('../controllers/search.controller');

module.exports = function (app) {
    app.get('/search', showProductsSearchForm);
    app.get('/search/products', searchProducts);
}