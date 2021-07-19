 
const fs = require("fs");
const Discord = require("discord.js");
///const { Color } = require("../../config.js");
const db = require("quick.db")
const schema = require ('../../data/guild.js')

let embed = new Discord.MessageEmbed()
module.exports = {
  name: "setchannel",
  aliases: ["channel","setchannel"],
  description: "Change the prefix of the bot",
  usage: ["p!setchannel <#channel>"],
  category: ["Admin"],
  enabled: true,            
  memberPermissions: [ "ADMINISTRATOR" ],            
  botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS","MANAGE_GUILD" ],        
  ownerOnly: false,            
  cooldown: 10,
  prime: false,
  run: async (bot, message, args) => {
   
    
    let m = message.mentions.channels.first()
    let ch = message.guild.channels.cache.find(c => c.id == m.id)
    if(args[1]){
    
    let data = await Guild.findOne({guildID: message.guild.id})
    
    
    

   /// if (!args[1]) return embed.setColor('#FF0202').setDescription(`**برجاء قم بعمل منشن للروم/التشانل الخاصة للنشر! | ⚠️**`), message.channel.send(embed)
if (data) {
  data.Channel = m.id
  data.guildID = message.guild.id
  data.save()
  
  
}
      
      if(!data) { Guild.create({
        Channel: m.id
      }); }
      message.channel.send(`share channel setuped in this channel ${m}`)
   }}}
