const Discord = require("discord.js")
module.exports = {
  name: "dashboard",
  aliases: ["dashboard","website"],
  description: "dashboard link",
  usage: ["p!support"],
  category: ["General"],
  enabled: true,
  memberPermissions: ["SEND_MESSAGES"],
  botPermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
  ownerOnly: false,
  cooldown: 5,
  run: async (bot, message, args, dev) => {

message.channel.send({content:`This is a website of **Partner Bot** -\n https://www.partner-bot.tk`});
    } 
}
