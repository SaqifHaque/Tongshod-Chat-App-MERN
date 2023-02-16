const express = require('express');
const bodyParser = require('body-parser');
const authRoute = require('./routes/authRoute');
const errorHandler = require('./middleware/errorMiddleware');
const dbConnect = require('./db/dbconnect');
const cors = require('cors');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5500;


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json())

app.use(cors({
    origin: ["http://localhost:3000",],
    credentials: true,
}));

//Routes Middleware
app.use('/api/auth', authRoute);

//Error Middleware
app.use(errorHandler);


app.listen(port, () => console.log(`Listening on port ${port}`));

dbConnect();


