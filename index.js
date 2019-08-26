require('dotenv').config();
const express = require('express');
const app = express();


require('./config/session')(app); // It's a good idea to put sessions before everything else from the configs
require('./config/flash')(app); // Flash HAVE TO be required after Session (configs). 
require('./config/formidable')(app);
require('./config/locals')(app);
require('./config/views')(app);

require('./routes/index.route')(app);

require('./server/server')(app);