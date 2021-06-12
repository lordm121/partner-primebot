 
const fs = require("fs");
const Discord = require("discord.js");
///const { Color } = require("../../config.js");
const db = require("quick.db")
let embed = new Discord.MessageEmbed()
module.exports = {
  name: "setchannel",
  aliases: ["prechannel"],
  description: "Change the prefix of the bot",
  usage: ["s!prefix [Prefix]"],
  category: ["Moderation"],
  enabled: true,            
  memberPermissions: [ "ADMINISTRATOR" ],            
  botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS" ],        
  ownerOnly: false,            
  cooldown: 10000,
  run: async (bot, message, args, dev, data) => {
if (!message.guild.member(message.author).hasPermission('ADMINISTRATOR')) return embed.setColor('#FF0202').setDescription(`**لا تمتلك صلاحية \`ADMINISTRATOR\` | 🤔**`), message.channel.send(embed)

    let messageSetting = message.mentions.channels.first();
    let ch = message.guild.channels.cache.find(c => c.id == messageSetting.id);

    if (!messageSetting || !ch) return embed.setColor('#FF0202').setDescription(`**برجاء قم بعمل منشن للروم/التشانل الخاصة للنشر! | ⚠️**`), message.channel.send(embed)

    if (db.has(`${message.guild.id}.serverPostChannel`) && db.get(`${message.guild.id}.serverPostChannel`) == ch.id) {
      embed.setColor('#FF0202').setDescription(`**لقد قمت بالفعل بإضافة تلك التشانل من قبل! | ❌**`);
      message.channel.send(embed)
      return;
    };

    db.set(`${message.guild.id}.serverPostChannel`, ch.id);
    embed.setDescription(`**.لقد تم التثبيت بنجاح | ☑️**`), message.channel.send(embed)

  }}