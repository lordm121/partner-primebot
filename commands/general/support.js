const Discord = require("discord.js")
module.exports = {
  name: "support",
  aliases: ["serversupport"],
  description: "To show server support",
  usage: ["p!support"],
  category: ["General"],
  enabled: true,
  memberPermissions: ["SEND_MESSAGES"],
  botPermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
  ownerOnly: false,
  cooldown: 5,
  run: async (bot, message, args, dev) => {

message.channel.send({content:`This is a server support **Partner Bot** if you need help, enter the server - \n https://discord.gg/aW6TnhGeSS`});
    } 
}
