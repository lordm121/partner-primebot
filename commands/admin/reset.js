const fs = require("fs");
const Discord = require("discord.js")
const { Color } = require("../../config.js");
let embed = new Discord.MessageEmbed()
module.exports = {
  name: "reset",
  aliases: ["reset"],
  description: "Use this command to get the invite link",
  usage: ["p!invite"],
  category: ["General"],
  enabled: true,
  memberPermissions: ["MANAGE_GUILD"],
  botPermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
  ownerOnly: false,
  cooldown: 0,
  run: async (bot, message, args, dev) => {
    ///let db = await Servers.findOne({serverID: message.guild.id})
    const resetID = message.content.split(" ").slice(1).join(" ");
///let db = await Servers.findOne({serverID: resetID})
    if (!resetID) return message.channel.send(`specify a guild id`)// embed.setDescription(`**برجاء ادخال ايدي السيرفر**`)
    let data = await Servers.findOne({serverID: resetID})
    let server = bot.guilds.cache.get(resetID);

    if (!server) return message.channel.send(`bro your guild id is invalid`)///embed.setDescription(`**لم اتمكن من إجاد هذا السيرفر**`), message.channel.send(embed)

  //if (server) return message.channel.send(`hi`)///embed.setDescription(`**...جاري إعادة تعيين بيانات سيرفر \**`), message.channel.send(embed)
    data.serverID= resetID
    data.delete()
    setTimeout(()=>{
    data.serverID=resetID,
               
            data.save()
    message.channel.send(`removed from database`)
  },1000)
  }
    
}
