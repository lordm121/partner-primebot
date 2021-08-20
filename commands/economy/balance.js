const fs = require("fs");
const Discord = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "balance",
  aliases: ["balance","credit","b","credits"],
  description: "To show your balance",
  usage: ["p! balance"],
  category: ["General"],
  enabled: true,			
  memberPermissions: [ "SEND_MESSAGES" ],			
  botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS" ],		
  ownerOnly: false,			
  cooldown: 15,
  run: async (bot, message, args) => {
    if (args[2]) return;
    let member = message.guild.member(message.mentions.users.first())
    if (member) {
      
  let autho = await User.findOne({ guildID: message.guild.id, userID: member.id });    
  message.channel.send("<@"+member.id+"> **💳 balance is** `"+autho.money+"`");
  
    }
    if (!member) {
  let author = await User.findOne({ guildID: message.guild.id, userID: message.author.id });    
  message.channel.send("🏦 Your credits balance is `$"+author.money+"`");
      }
}
}
