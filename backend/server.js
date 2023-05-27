const express = require('express');
const bodyParser = require('body-parser');
const authRoute = require('./routes/authRoute');
const roomRoute = require('./routes/roomRoute');
const errorHandler = require('./middleware/errorMiddleware');
const dbConnect = require('./db/dbconnect');
const cors = require('cors');
const cookieParser = require('cookie-parser');


require('dotenv').config();

const app = express();
const port = process.env.PORT || 5500;

const server = require('http').createServer(app);

const io = require('socket.io')(server, {
    cors: {
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST']
    }
})


app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json())

app.use(cors({
    origin: ["http://localhost:3000",],
    credentials: true,
}));

app.use('/storage', express.static('storage'))

//Routes Middleware
app.use('/api/auth', authRoute);
app.use('/api/rooms', roomRoute);

//Error Middleware
app.use(errorHandler);


io.on('connection', (socket) => {
    console.log('new Connection', socket.id);
})

server.listen(port, () => console.log(`Listening on port ${port}`));

dbConnect();


