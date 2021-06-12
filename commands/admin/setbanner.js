 
const fs = require("fs");
const Discord = require("discord.js");
//const { Color } = require("../../config.js");
const db = require("quick.db")
let embed = new Discord.MessageEmbed()
module.exports = {
  name: "setbanner",
  aliases: ["banner"],
  description: "Change the prefix of the bot",
  usage: ["s!prefix [Prefix]"],
  category: ["Moderation"],
  enabled: true,            
  memberPermissions: [ "ADMINISTRATOR" ],            
  botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS" ],        
  ownerOnly: false,            
  cooldown: 10000,
  run: async (bot, message, args, dev, data) => {
if (!message.guild.member(message.author).hasPermission('ADMINISTRATOR')) return embed.setDescription(`**لا تمتلك صلاحية \`ADMINISTRATOR\` | 🤔**`), message.channel.send(embed)

    let banner = message.content.split(' ').slice(1).join(' ');

    if (!banner) return embed.setColor('#FF0202').setDescription(`**برجاء قم بوضع رابط صورة البانر! | ⚠️**`), message.channel.send(embed)
    
    if (db.has(`${message.guild.id}.serverBanner`) && db.get(`${message.guild.id}.serverBanner`) == banner) {
      embed.setColor('#FF0202').setDescription(`**لقد قمت بالفعل بإضافة تلك الصورة من قبل! | ❌**`);
      message.channel.send(embed)
      return;
    };

    db.set(`${message.guild.id}.serverBanner`, banner);
    embed.setDescription(`**server b | ☑️**`), message.channel.send(embed)

  },
};