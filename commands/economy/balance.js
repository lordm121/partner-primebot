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
  cooldown: 0,
  run: async (bot, message, args) => {
    
    let member = message.mentions.users.first() || message.author;
  
  
let author = await User.findOne({ userID: member.id });    
 message.channel.send(`💰${user.username} currently have `\$${author.money}\``)
/* message.channel.send(new Discord.MessageEmbed()
         .setTitle(`:bank: ${user.username}\'s Balance`)
         .setColor("BLUE")
         .addField('Cash', `You Currently have \$${author.money} in Cash`));
      */
}
}
