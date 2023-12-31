const Mongoose = require("mongoose")
const UserSchema = new Mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    minlength: 8,
    required: true,
  }
},
  {
    timestamps: true
  }
);

const User = Mongoose.model("user", UserSchema)
module.exports = User