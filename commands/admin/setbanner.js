 
const fs = require("fs");
const Discord = require("discord.js");
const { Color } = require("../../config.js");
const db = require("quick.db")
let embed = new Discord.MessageEmbed()
module.exports = {
  name: "setbanner",
  aliases: ["banner","setbanner"],
  description: "set a banner to share message",
  usage: [".setbanner"],
  category: ["Admin"],
  enabled: true,            
  memberPermissions: [ "ADMINISTRATOR","MANAGE_GUILD"],            
  botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS","MANAGE_GUILD"],        
  ownerOnly: false,            
  cooldown: 10,
  run: async (bot, message, args, dev) => {
////if (!message.guild.member(message.author).hasPermission('ADMINISTRATOR')) return embed.setDescription(`**لا تمتلك صلاحية \`ADMINISTRATOR\` | 🤔**`), message.channel.send(embed)
///if (db.get(`${message.guild.id}.serverPlan`) == 'Free') return embed.setDescription(`**This server \`${db.get(`${message.guild.name}.serverName`)}\` Don't have \`Premium\`  version⚠️**`), message.channel.send(embed)
let data = await Guild.findOne({guildID: message.guild.id})
    let banner = message.content.split(' ').slice(1).join(' ');

    if (!banner) return embed.setColor('#FF0202').setDescription(`** Please send URL of a banner! | ⚠️**`), message.channel.send(embed)
    ///let data = await Prime.findOne({ Guild: args[2]});
      if (data) {
        data.Banner = banner
        data.Channel
        
        data.save()
      }
if(!data) { Prime.create({
        Guild: args[2],
        time: time,
        log: "enable",
        Permanent: false
      }); } 
   /// db.set(`${message.guild.id}.serverBanner`, banner);
    embed.setDescription(`**server banner has been setup | ☑️**`), message.channel.send(embed)

  },
};