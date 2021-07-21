const mongoose = require ('mongoose')


const Schema = new mongoose.Schema({
    guildID: String,
    guildName: String,
    Banner: String,
    Channel: String,
    prefix: { type: String, default: "p!"},
    bump: {type: Date, default: null},
    time: String,
    rooms: String,
    Description: String,
    Color: String,

})

module.exports = mongoose.model ('Guild', Schema)
