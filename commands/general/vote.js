const Discord = require("discord.js")
const { Color } = require("../../config.js");

module.exports = {
  name: "vote",
  aliases: ["vote"],
  enabled: true,            
  memberPermissions: [ "SEND_MESSAGES" ],            
  botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS" ],        
  ownerOnly: false,            
  cooldown: 2000,
  run: async (bot, message, args, dev, data) => {
   
 const embed = new Discord.MessageEmbed()
 .setColor(Color)
 .setThumbnail(`https://cdn.discordapp.com/attachments/818177981884923964/843887454348247100/image0.png`)
 .setTitle("we working at that please waiting, thanks for understanding")
 .setDescription("[ Top.gg ](https://top.gg/838593240328044554) - [infinity botlist](https://infinitybotlist.com/bots/838593240328044554/vote) - [discord.ly](https://discord.ly/partner-bot-5806) - [blade botlist](https://bladebotlist.xyz/bot/838593240328044554/vote)")
 .setFooter(`by : ${message.author.tag}`)
message.channel.send(embed);
  }
}
