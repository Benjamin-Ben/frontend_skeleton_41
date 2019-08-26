module.exports = async function(app) {
    
    try {

        await app.listen(process.env.PORT);
        console.log(`Appen kører på port ${process.env.PORT}`);

    } catch (error) {
        
        console.error(error);
        process.exit(1);

    }
    
}