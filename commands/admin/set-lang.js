 
const fs = require("fs");
const Discord = require("discord.js");
module.exports = {
  name: "language",
  aliases: ["lang"], 
  description: "To change language", 
  usage: ["language <language>"], 
  enabled: true,
  memberPermissions: [ "ADMINISTRATOR" ],	
  botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS" ],
  ownerOnly: false,
  cooldown: 15000,
  run: async (client, message, args, dev,dev2) => {
      if (!args[1])
        return message.channel.send(
          "**You need to set language**"
        );
      let data = await Lang.findOne({ guildID: message.guild.id })
      if (args[1].toLowerCase() === "english" || args[1].toLowerCase() === "kurdish") {
        data.language = args[1].toLowerCase();
        message.channel.send(
          `** Your server language is \`${data.language}\`**`
        );
      data.save();
      } else if (args[1] === "list") {
        message.channel.send("Language list is :\n `english`,`kurdish`")
      } else{
        message.channel.send(
          `Usage : \n \<prefix>language <language>`
        );
     }
  }
}
