const fs = require("fs");
const Discord = require("discord.js");


module.exports = {
  name: "prefix",
  aliases: ["setprefix"],
  description: "Change the prefix of the bot",
  usage: ["p!prefix [Prefix]"],
  category: ["Admin"],
  enabled: true,            
  memberPermissions: [ "ADMINISTRATOR" ],            
  botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS" ],        
  ownerOnly: false,            
  cooldown: 60,
  prime: false,
  run: async (bot, message, args, dev, data) => {
        if(!args[1]) return message.channel.send({content:`You muste put provide prefix`})
        if(args[1].length > 5) return message.channel.send({content: `please must your prefix under 5 words`})
         
        let dataa = await Guild.findOne({ guildID: message.guild.id })

        let embed = new Discord.MessageEmbed()
        .setColor("BLUE")
        .setDescription(`Prefix changed`)
        message.channel.send({embeds: [embed]})
        dataa.prefix = args[1];
        dataa.save();
    }};
