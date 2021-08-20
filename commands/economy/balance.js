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
      
 
  
    }
    if (!member) {
  let author = await User.findOne({ guildID: message.guild.id, userID: message.author.id });    
  message.channel.send(new Discord.MessageEmbed()
         .setTitle(`:bank: ${user.username}\'s Balance`)
         .setColor("BLUE")
         .addField('Cash', `You Currently have \$${author.money} in Cash`));
      }
}
}
