const Discord = require("discord.js")
const db = require("quick.db")
let embed = new Discord.MessageEmbed()
const devs = "768944616724103170"
module.exports = {
  name: "setimage",
  aliases: ["setimage"],
  description: "To show you all command of the bot",
  usage: ["s!help","s!help <command>"],
  category: ["General"],
  enabled: true,            
  memberPermissions: [ "SEND_MESSAGES" ],            
  botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS" ],        
  ownerOnly: false,            
  cooldown: 1000,
  run: async (bot, message, args, dev, data) => {
   if (!devs.includes(message.author.id)) return;
  
    let l = args.join(' ');

    if (!l) return embed.setColor('#FF0202').setDescription(`**only url | ⚠️**`), message.channel.send(embed)

    if (db.has(`${message.guild.id}.image`) && db.get(`${message.guild.id}.image`) == l) {
      embed.setColor('#FF0202').setDescription(`**befor setted | ❌**`);
      message.channel.send(embed)
      return;
    };

    db.set(`${message.guild.id}.image`, l);
    embed.setDescription(`**ok| ☑️**`), message.channel.send(embed)

  }}