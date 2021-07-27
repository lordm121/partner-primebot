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
    let data = await Economy.findOne({userId: message.author.id})
    let user  = message.mentions.users.first() || message.author

        let bal = data.money///await db.fetch(`money_${message.guild.id}_${user.id}`)
        let bankBalance = data.Bank////await db.fetch(`bank_${message.guild.id}_${user.id}`)

        if(bal === null) bal = 0;
        if(bankBalance === null) bankBalance = 0;

        const balEmbed = new Discord.MessageEmbed()
        .setTitle(`:bank: ${user.username}\'s Balance`)
        .setColor("BLUE")
        .addField('Cash', `You Currently have \$${bal} in Cash`)
        

        message.channel.send(balEmbed)
    
    
///    data.save()
}
}
