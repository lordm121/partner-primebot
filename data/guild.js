const mongoose = require ('mongoose')


const Schema = new mongoose.Schema({
    guildID: String,
    guildName: String,
    Banner: String,
    Channel: String,
    prefix: { type: String, default: "!"},
   time: String,

})

module.exports = mongoose.model ('Guild', Schema)
