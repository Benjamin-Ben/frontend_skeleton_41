const db = require('../config/mysql2');

exports.showProductsSearchForm = async function (req, res, next) {
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
    
        let productsSQL = `SELECT id, name, img, price 
        FROM products
        WHERE 1=1 `; 

        // If the user doesn't search on anything
        if ( (req.query.name == undefined || req.query.name == '') && (req.query.description == undefined || req.query.description == '') && (req.query.category == undefined || req.query.category == '' || req.query.category == 0) ) {
            const [ categoryRows ] = await db.query(categoriesSQL);
            const [ productRows ] = await db.query(productsSQL);
            res.render('search', {
                categoryResults: categoryRows,
                results: productRows
            });
            return;
        }

        // If the user does write something in 'name'
        if ( req.query.name != undefined && req.query.name != '' ) {
            productsSQL += ` AND name LIKE :name `;
        }

        // If the user does write something in 'description'
        if ( req.query.description != undefined && req.query.name != '') {
            productsSQL += ` AND description LIKE :description `;
        }

        // If the user does write something in 'category'
        if ( req.query.fk_category != undefined || req.query.fk_category != '' ) {
            productsSQL += ` AND fk_category = :fk_category `;
        }

        const [ categoryRows ] = await db.query(categoriesSQL);
        const [ productRows ] = await db.query(productsSQL, {
            name: req.query.name, 
            description: req.query.description,
            fk_category: req.query.fk_category
        });

        res.render('search', {
            categoryResults: categoryRows,
            results: productRows
        });
    } catch (error) {
        console.error(error);
        res.render('error');
    }
}