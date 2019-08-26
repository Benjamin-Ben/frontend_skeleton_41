require('dotenv').config();
const express = require('express');
const app = express();


require('./config/session')(app); // It's a good idea to put sessions before everything else from the configs
require('./config/flash')(app); // Flash HAVE TO be required after Session (configs). 
require('./config/formidable')(app);
require('./config/locals')(app);
require('./config/views')(app);

require('./routes/admin.route')(app);
require('./routes/products.route')(app);
require('./routes/categories.route')(app);
require('./routes/users.route')(app);
require('./routes/roles.route')(app);
require('./routes/profile.route')(app);
require('./routes/signup.route')(app);
require('./routes/login.route')(app);
require('./routes/upload.route')(app);;

require('./server/server')(app);