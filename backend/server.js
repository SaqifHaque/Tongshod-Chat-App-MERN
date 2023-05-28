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

const socketUserMapping = {

}


io.on('connection', (socket) => {
    console.log('new Connection', socket.id);

    socket.on(ACTIONS.JOIN, ({roomId, user}) => {
        socketUserMapping[socket.id] = user;
    })

    const clients = Array.from(io.sockets.adapter.rooms.get(roomId) || []);
    clients.forEach(clientId => {
        io.to(clientId).emit(ACTIONS.ADD_PEER, {
            peerId: scoket.id,
            createOffer: false,
            user
        });
    }) 

    console.log(clients);

    socket.emit(ACTIONS.ADD_PEER, {
        peerId: clientId,
        createOffer: true,
        user: socketUserMapping[clientId]
    });

    socket.join(roomId);
    
})

server.listen(port, () => console.log(`Listening on port ${port}`));

dbConnect();


