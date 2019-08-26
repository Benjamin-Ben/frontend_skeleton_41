const { 
    createProduct,
    getProducts,
    getEditProductForm, editProduct, editProductImg,
    deleteProduct
} = require('../controllers/products.controller');
const isAuthorized = require('../middleware/is-authenticated');
const isEmployee = require('../middleware/is-employee');

module.exports = function (app) {
    // Create 
    app.post('/admin/products', [isAuthorized, isEmployee], createProduct);

    // Read
    app.get('/admin/products', [isAuthorized, isEmployee], getProducts);
    
    // Update
    app.get('/admin/editProduct/:img_params', [isAuthorized, isEmployee], getEditProductForm);
    app.post('/admin/editProduct/:img_params', [isAuthorized, isEmployee], editProduct)
    app.post('/admin/editProduct/img/:img_params', [isAuthorized, isEmployee], editProductImg )

    // Delete
    app.get('/admin/deleteProduct/:img_params', [isAuthorized, isEmployee], deleteProduct);
};