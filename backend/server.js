const express = require('express');
const authRoute = require('./routes/authRoute');
const errorHandler = require('./middleware/errorMiddleware');
const dbConnect = require('./db/dbconnect');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5500;


app.use('/api/auth', authRoute);

//Error Middleware
app.use(errorHandler);


app.listen(port, () => console.log(`Listening on port ${port}`));

dbConnect();

