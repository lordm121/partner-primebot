const mongoose = require ('mongoose')

const Schema = new mongoose.Schema({
    guildID: String,
    channelID: String,
  guildName: String,
     prefix: { type: String, default: "!"},
})

module.exports = mongoose.model ('Guild', Schema)
