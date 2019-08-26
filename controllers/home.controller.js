const db = require('../config/mysql2');

// Client Site ---------------------------------------------------------------------------------------------------

exports.getHome = async function (req, res, next) {
    try {
        const homeMainContentSQL = `SELECT title, content, img 
        FROM pages
        WHERE homepage = 1
        LIMIT 1`;

        const homeProductsSQL = `SELECT id, name, img, price
        FROM products
        ORDER BY rand()
        LIMIT 3`;

        const [rows1] = await db.query(homeMainContentSQL);
        const [rows2] = await db.query(homeProductsSQL);

        res.render('home', {
            homeMainResult: rows1[0],
            homeProductResults: rows2
        });
    } catch (error) {
        console.error(error);
        res.render('error');
    }
}


// ADMIN PANEL --------------------------------------------------------------------------------------------------

exports.getAdminHome = async function (req, res, next) {
    res.render('admin_home');
}