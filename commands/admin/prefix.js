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
  cooldown: 10000,
  run: async (bot, message, args, dev, data) => {
        if(!args[1]) return message.channel.send(new Discord.MessageEmbed().setColor("").setDescription(`You muste put provide prefix`))
        if(args[1].length > 5) return message.channel.send(new Discord.MessageEmbed().setColor("").setDescription(`please your prfix less than 5word`))
         
        let dataa = await Guild.findOne({ guildID: message.guild.id })

        let embed = new Discord.MessageEmbed()
        .setColor("")
        .setDescription(`prefix has benn changed to ${args[1]}`)
        message.channel.send(embed)
        dataa.prefix = args[1];
        dataa.save();
    }};
