const schema = mongoose.Schema({
    Guild: String,
    time: Number,
    prime: String,
    log: String,
    Permanent: Boolean,
});
module.exports = mongoose.model("Prime", schema)
