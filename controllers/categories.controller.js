const db = require('../config/mysql2');

exports.createCategory = async function (req, res, next) {
    try {
        const categorySQL = `INSERT INTO categories SET name = :name, description = :description`;
        await db.query(categorySQL, {
            name: req.fields.name,
            description: req.fields.description
        });
        res.redirect('/admin/categories');
    } catch (error) {
        console.error(error);
        res.send('Fejl!');
    } 
}

exports.getCategories = async function (req, res, next) {
    
    try {
        const categoriesSQL = `SELECT id, name, description 
        FROM categories`;

        const [rows, fields] = await db.query(categoriesSQL);
        
        res.render('admin_categories', {
            results: rows
        });
    } catch (error) {
        console.error(error);
        res.send('FEJL!!!');
    }

};

exports.getEditCategoryForm = async function (req, res, next) {
    try {
        const categorySQL = `SELECT id, name, description 
        FROM categories
        WHERE id = :id`;

        const [rows] = await db.query(categorySQL, { id: req.params.id });

        res.render('admin_categories_edit', {
            result: rows[0]
        });
    } catch (error) {
        console.error(error);
        res.send('FEJL!');
    }
};

exports.editCategory = async function (req, res, next) {
    try {
        const categorySQL = `UPDATE categories SET name = :name, description = :description
        WHERE id = :id;`;
        const category = await db.query(categorySQL, {
            id: req.params.id,
            name: req.fields.name, 
            description: req.fields.description
        });
        res.redirect('/admin/editCategory/' + req.params.id);
    } catch (error) {
        console.error(error);
        res.send('FEJL!!!');
    }
};

exports.deleteCategory = async function (req, res, next) {
    try {
        const categorySQL = `DELETE FROM categories
        WHERE id = :id`;

        await db.query(categorySQL, {
            id: req.params.id
        });

        res.redirect('/admin/categories');
    } catch (error) {
        console.error(error);
        res.send('FEJL!');
    }
}