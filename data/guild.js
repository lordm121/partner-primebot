const mongoose = require ('mongoose'),
languages = require("../languages/language-meta.json");

const Schema = new mongoose.Schema({
    guildID: String,
    channelID: String,
  guildName: String,
     prefix: { type: String, default: "!"},
  language: { type: String, default: languages.find((l) => l.default).name }, // Language of the guild

})

module.exports = mongoose.model ('Guild', Schema)
