const Mongoose = require("mongoose")

const localDB = `mongodb://localhost:27017/awesome_auth`

const connect = async () => {
  await Mongoose.connect(localDB, {
    useNewUrlParser: true
  })
  console.log("Connected to MongoDB")
}
module.exports = connect