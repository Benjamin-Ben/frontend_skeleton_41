const { 
    createCategory,
    getCategories,
    getEditCategoryForm, editCategory,
    deleteCategory 
} = require('../controllers/categories.controller');
const isAuthorized = require('../middleware/is-authenticated');
const isEmployee = require('../middleware/is-employee');

module.exports = function (app) {
    // Create 
    app.post('/admin/categories', [isAuthorized, isEmployee], createCategory);

    // Read
    app.get('/admin/categories', [isAuthorized, isEmployee], getCategories);
    
    // Update
    app.get('/admin/editCategory/:id', [isAuthorized, isEmployee], getEditCategoryForm);
    app.post('/admin/editCategory/:id', [isAuthorized, isEmployee], editCategory)

    // Delete
    app.get('/admin/deleteCategory/:id', [isAuthorized, isEmployee], deleteCategory);
};