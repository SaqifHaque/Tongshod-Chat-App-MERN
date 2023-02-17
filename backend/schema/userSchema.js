const mongoose = require('mongoose');
// const bcrypt = require('bcryptjs');

const userSchema = mongoose.Schema({
     name: {
        type: String,
        requred: false
     },
     avatar : {
      type: String,
      require: false
     },
    //  email: {
    //     type: String,
    //     required: [true, "Please add an email"],
    //     unique: true,
    //     trim: true,
    //     match: [
    //         /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
    //         "Please enter a valid email"
    //     ]
    //  },
    //  password: {
    //     type: String,
    //     required: [true, "Please add a password"],
    //     minLength: [6, "Password must be up to 6 characters"],
    //     // maxLength: [20, "Password must not be more than 20 characters"]
    //  },
    //  photo: {
    //     type: String,
    //     required: [true, "Please add a photo"],
    //     default: "https://cdn-icons-png.flaticon.com/512/3177/3177440.png"
    //  },
     phone: {
        type: String,
        required: [true, "Please add a phone number"],
        default: "+880"
     },
     activated: {
        type: Boolean,
        default: false
     },
}, {
    timestamps: true,
});

// Encrypt password before saving to DB
// userSchema.pre("save", async function (next){
//     if(!this.isModified("password")) {
//         return next();
//     }

//     // Hash Password
//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(this.password, salt);
//     this.password = hashedPassword;
//     next();
// })

const User = mongoose.model("User", userSchema);
module.exports = User;