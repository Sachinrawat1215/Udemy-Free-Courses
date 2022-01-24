const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
const Connection = require('./db/conn');
const cors = require("cors");
const Router = require("./Routes/Route");
const bodyParser = require('body-parser');
const dotEnv = require('dotenv');



// Setting Middlewares
app.use(cors());
app.use(bodyParser.json());
dotEnv.config();



// Setting Up routers
app.use('/', Router);




// Setting Up Connection
const URL = process.env.MONGODB_URI;
Connection(URL);



// Listening to port number
app.listen(port, () => {
    console.log(`Server is running on port number ${port}`);
})