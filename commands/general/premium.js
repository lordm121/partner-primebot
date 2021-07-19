const fs = require("fs");
const Discord = require("discord.js")
const { Color } = require("../../config.js");

module.exports = {
  name: "premium",
  aliases: ["premium"],
  description: "show all premium features",
  usage: ["p!premium"],
  category: ["General"],
  enabled: true,
  memberPermissions: ["SEND_MESSAGES"],
  botPermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
  ownerOnly: false,
  cooldown: 2000,
  run: async (bot, message, args, dev, data) => {
    
const embed = new Discord.MessageEmbed()
 .setColor(Color)
 .setTitle("premium features")
 .setDescription(`
1- share every 6 hours

2- set embed color 
  
3- give you premium role on support server

4- fix your any problem quickly than anyone


 
 `)
 .setFooter(`by : ${message.author.tag}`)
message.channel.send(embed);
    }
}
