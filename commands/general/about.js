const fs = require("fs");
const Discord = require("discord.js");
const { Color } = require("../../config.js")

module.exports = {
  name: "about.js",
  aliases: ["about","botinfo","bot-info"],
  description: "information about bot",
  usage: [".about"],
  category: ["general"],
  enabled: true,			
  memberPermissions: [ "SEND_MESSAGES" ],			
  botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS" ],		
  ownerOnly: false,			
  guilOwnerOnly: true,
  cooldown: 3000,
  run: async (bot, message, args,data) => {

       let embed = new Discord.MessageEmbed()
      //  .setTitle(bot.pro.get(data.lang, "general","about_bot"))
        .setColor(Color)
       .setTitle(bot.pro.get(data.lang, "general","about_bot"))
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