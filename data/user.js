const schema = mongoose.Schema({
    guildID: String,
    userID: String,
  
    items: { type: Array, required: false, default: [] },

money: { type: Number, default: 0 },

   time: { type: Number, default: 0 }

});
module.exports = mongoose.model("User", schema)
