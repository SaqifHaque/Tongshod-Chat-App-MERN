const mongoose = require('mongoose');

const tokenSchema = mongoose.Schema(
    {
        ownerId: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "user"
        },
        topic: {
            type: String,
            required: true
        },
        roomType : {
            type: String,
            required: true
        },
        speaker: {
            type: [
                {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "user"
                }
            ],
            required: false
        },
    },
    {
        timestamps: true,
    }
);

const Room = mongoose.model("Room", roomSchema);
module.exports = Room;