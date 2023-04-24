const asyncHandler = require('express-async-handler');
const roomService = require('../services/roomService');

const createRoom = asyncHandler(async (req,res) => {
    const { topic, roomType } = req.body;

    if(!topic || !roomType){
        res.status(400);
        throw new Error("All Fields are required");
    }

    const room = await roomService.createRoom({
        topic,
        roomType,
        ownerId: req.user._id
    })

    res.json({user: null, auth: false});
})

const getRooms = asyncHandler(async (req,res) => {
    const rooms = await roomService.getAllRooms(['open']);
    const allRooms = rooms.map(room => new RoomDto(room));
    return res.json(allRooms);
})



module.exports = {
    createRoom,
    getRooms
}