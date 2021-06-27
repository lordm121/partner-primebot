 
const fs = require("fs");
const Discord = require("discord.js");
///const { Color } = require("../../config.js");
const db = require("quick.db")
let embed = new Discord.MessageEmbed()
module.exports = {
  name: "setchannel",
  aliases: ["channel"],
  description: "set channel inly for Premium version",
  usage: [".channel #<channel>"],
  category: ["Admin"],
  enabled: true,            
  memberPermissions: [ "MANAGE_CHANNELS" ],            
  botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS","MANAGE_CHANNELS"],        
  ownerOnly: false,            
  cooldown: 10000,  cooldown: 10000,

  run: async (bot, message, args, dev) => {
  let data = await Guild.findOne({ Channel: args[1]})
    if (db.get(`${message.guild.id}.serverPlan`) == 'Free') return embed.setDescription(`**This server \`${db.get(`${message.guild.name}.serverName`)}\` don't buy \`Premium\` Version ⚠️**`), message.channel.send(embed)
 
if (!message.guild.member(message.author).hasPermission('ADMINISTRATOR')) return embed.setColor('#FF0202').setDescription(`**You don't have  \`ADMINISTRATOR\` permission | 🤔**`), message.channel.send(embed)

   // let args[1] = message.mentions.channels.first();
   if(args[1]){
    let ch = message.guild.channels.cache.find(c => c.id == args[1].id);

    if (!args[1]) return embed.setColor('#FF0202').setDescription(`**You must mention room to setup channel! | ⚠️**`), message.channel.send(embed)
data.Channel = args[2]
     data.save()
     message.channel.send(`worked`)
   }
    /*if (db.has(`${message.guild.id}.serverPostChannel`) && db.get(`${message.guild.id}.serverPostChannel`) == ch.id) {
      embed.setColor('#FF0202').setDescription(`**This room Already on databse! | ❌**`);
      message.channel.send(embed)
      return;
    };*/

    ///db.set(`${message.guild.id}.serverPostChannel`, ch.id);
    embed.setDescription(`** This channel saved on database | ☑️**`), message.channel.send(embed)

  }}