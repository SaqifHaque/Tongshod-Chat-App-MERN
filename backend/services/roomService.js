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

const getAllRooms = async(types) => {
    const { rooms } = await Room.find({ roomType: { $in: types } })
    .populate('speakers')
    .populate('ownerId')
    .exec();
    
    return rooms;
}


module.exports = {
    createRoom
}