const db = require('../config/mysql2');

exports.showSearchForm = async function (req, res, next) {
    const categoriesSQL = `SELECT id, name 
    FROM categories`;

    const [ rows ] = await db.query(categoriesSQL);

    res.render('search', {
        categoryResults: rows,
        results: []
    });
}

exports.searchProducts = async function (req, res, next) {
    try {
        const categoriesSQL = `SELECT id, name 
        FROM categories`;
    
        const productsSQL = `SELECT id, name, img, price 
        FROM products
        WHERE 1=1 `;

        if ( (req.query.name == undefined || req.query.name == '') && (req.query.description == undefined || req.query.description == '') && (req.query.category == undefined || req.query.category == '' || req.query.category == 0 ) ) {
            const [ categoryRows ] = await db.query(categoriesSQL);
            const [ productRows ] = await db.query(productsSQL);
            res.render('search', {
                categoryResults: categoryRows,
                results: productRows
            });
        }
    } catch (error) {
        console.error(error);
        res.render('error');
    }
}