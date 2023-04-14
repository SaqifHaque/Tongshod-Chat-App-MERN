const Room = require('../schema/roomSchema');
const RoomDto = require('../dtos/roomDto');

const createRoom = async(payload) => {
    const { topic, roomType, ownerId } = payload;
    const room = await Room.create({
        ownerId,
        topic,
        roomType,
        speaker:[ownerId],
    });
    return res.json(new RoomDto(room));
}


module.exports = {
    createRoom
}