 
const fs = require("fs");
const Discord = require("discord.js");
//const { Color } = require("../../config.js");
const db = require("quick.db")
let embed = new Discord.MessageEmbed()
module.exports = {
  name: "setbanner",
  aliases: ["banner","setbanner"],
  description: "set a banner to share message",
  usage: ["s!prefix [Prefix]"],
  category: ["Moderation"],
  enabled: true,            
  memberPermissions: [ "ADMINISTRATOR","MANAGE_GUILD"],            
  botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS","MANAGE_GUILD"],        
  ownerOnly: false,            
  cooldown: 10000,
  run: async (bot, message, args, dev) => {
    //let data = await Guild.findOne({banner: args[1]}) 
////if (!message.guild.member(message.author).hasPermission('ADMINISTRATOR')) return embed.setDescription(`**لا تمتلك صلاحية \`ADMINISTRATOR\` | 🤔**`), message.channel.send(embed)
if (db.get(`${message.guild.id}.serverPlan`) == 'Free') return embed.setDescription(`**This server \`${db.get(`${message.guild.name}.serverName`)}\` Don't have \`Premium\`  version⚠️**`), message.channel.send(embed)

    let banner = args[1]///message.content.split(' ').slice(1).join(' ');
let data = await Guild.findOne({banner: args[1]})
    if (!banner) return embed.setColor('#FF0202').setDescription(`** Please send URL of a banner! | ⚠️**`), message.channel.send(embed)
    
   
    ///if (db.has(`${mesage.guild.id}.serverBanner`) && db.get(`${message.guild.id}.serverBanner`) == banner) {
      if(data) return message.channel.send(`no please`)
    ////embed.setColor('#FF0202').setDescription(`**This image Already  | ❌**`);
     /// message.channel.send(embed)
      
  
    //if(data.) return message.channel.send(`banner already saved befor`)
    if(!data) { Guild.create({
      banner: args[1],
    }).save}

    ///db.set(`${message.guild.id}.serverBanner`, banner);
    embed.setDescription(`**server banner has been setup | ☑️**`), message.channel.send(embed)

  },
};