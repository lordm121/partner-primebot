const moment = require("moment-timezone");
const parseInt = require("ms")
const day = require("dayjs")
module.exports = {
  name: "prime-time.js",
  aliases: ["p","prime"],
  enabled: true,			
  memberPermissions: [ "SEND_MESSAGES" ],			
  botPermissions: [ "SEND_MESSAGES" ],		
  ownerOnly: true,			
  cooldown: 1000,
  prime: false,
  run: async (bot, message, args, dev) => {
        if (args[1]==="time") {
      let data = await Prime.findOne({Guild: message.guild.id });
      if (data) {
        if (data.log==="enable") {
        let time = day(data.time);
       if(!data.time) return message.channel.send(`your srrver don't have prime bot `)   

        
      message.channel.send(`prime bot in this server end in ${time}`)

    }}}}
