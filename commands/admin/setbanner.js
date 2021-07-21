 
const fs = require("fs");
const Discord = require("discord.js");
const { Color } = require("../../config.js");
const db = require("quick.db")
let embed = new Discord.MessageEmbed()
module.exports = {
  name: "setbanner",
  aliases: ["banner","setbanner"],
  description: "set a banner to share message",
  usage: ["p!setbanner"],
  category: ["admin"],
  enabled: true,            
  memberPermissions: [ "ADMINISTRATOR","MANAGE_GUILD"],            
  botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS","MANAGE_GUILD"],        
  ownerOnly: false,            
  cooldown: 15,
   prime: false,
  run: async (bot, message, args, dev) => {
////if (!message.guild.member(message.author).hasPermission('ADMINISTRATOR')) return embed.setDescription(`**لا تمتلك صلاحية \`ADMINISTRATOR\` | 🤔**`), message.channel.send(embed)
///if (db.get(`${message.guild.id}.serverPlan`) == 'Free') return embed.setDescription(`**This server \`${db.get(`${message.guild.name}.serverName`)}\` Don't have \`Premium\`  version⚠️**`), message.channel.send(embed)
let data = await Guild.findOne({guildID: message.guild.id})
    let banner = message.content.split(' ').slice(1).join(' ');

    if (!banner) return embed.setColor('#FF0202').setDescription(bot.pro.get(data.lang, "admin","err_banner")), message.channel.send(embed)
    ///let data = await Prime.findOne({ Guild: args[2]});
      if (data) {
        data.Banner = banner
        data.guildID = message.guild.id   
        data.save()
      }
    
if(!data) { Prime.create({
        guildID:message.guild.id,
        Banner: banner
          
      }); } 
  message.channel.send(bot.pro.get(data.lang,"admin","sec_banner"))

  },
};
