const fs = require("fs");
const Discord = require("discord.js");
const { Color } = require("../../config.js")

module.exports = {
  name: "about.js",
  aliases: ["bot","botinfo","bot-info"],
  description: "information about bot",
  usage: [".botinfo"],
  category: ["general"],
  enabled: true,			
  memberPermissions: [ "SEND_MESSAGES" ],			
  botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS" ],		
  ownerOnly: false,			
  guilOwnerOnly: true,
  cooldown: 3000,
  run: async (bot, message, args) => {

       let embed = new Discord.MessageEmbed()
        .setTitle(`Info`,` ${bot.user.username}`,true)
        .setColor("")
        .setThumbnail(bot.user.displayAvatarURL())
        .addField(`**My Name:**`, `${bot.user.tag}`)
        .addField(`**My ID**`, `${bot.user.id}`)
        .addField(`**My Prefix**`, `.`)
        .addField(`**Libary**` , `discord.js`)
        .addField(`**Discord.js Version**`, `${Discord.version}`)
        
        .addField(`**Ping**`, `${Math.round(bot.ws.ping)}ms`)
        .addField(`**Guilds**`, `${bot.guilds.cache.size}`)
        .addField(`**Channels**`, `${bot.channels.cache.size}`)
        .addField(`**Users**`, `${bot.users.cache.size}`)
        .addField(`**Creator**`, `[<@768944616724103170>]`)
        .setFooter(`Requested By ${message.author.username}`)
        
    message.channel.send(embed);
}
}