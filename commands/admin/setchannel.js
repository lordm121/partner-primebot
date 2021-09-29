 
const fs = require("fs");
const Discord = require("discord.js");
///const { Color } = require("../../config.js");
///const db = require("quick.db")
///const schema = require ('../../data/guild.js')

let embed = new Discord.MessageEmbed()
module.exports = {
  name: "setchannel",
  aliases: ["channel","setchannel"],
  description: "Set up share channel",
  usage: ["p!setchannel <#channel>"],
  category: ["admin"],
  enabled: true,            
  memberPermissions: [ "ADMINISTRATOR" ],            
  botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS","MANAGE_GUILD" ],        
  ownerOnly: false,            
  cooldown: 10,
  prime: false,
  run: async (bot, message, args, data) => {
   
    
    let m = message.mentions.channels.first()
    let ch = message.guild.channels.cache.find(c => c.id == m.id)
    if(args[1]){
    
    let dataa = await Servers.findOne({serverID: message.guild.id})
    
    
    

    if (!args[1]) return embed.setColor('#FF0202').setDescription(`**Please mention channel to setup share channel usage: p!setchannel <#channel>**`), message.channel.send(embed)
if (dataa) {
  dataa.channelID = m.id
  dataa.serverID = message.guild.id
  dataa.save()
  
  
}
      
      if(!dataa) { Servers.create({
        channelID: m.id
      }); }
      message.channel.send(`share channel has been set-up in this channel <#${dataa.Channel}>`)
   }}}
