 
const fs = require("fs");
const Discord = require("discord.js");
///const { Color } = require("../../config.js");
const db = require("quick.db")
let embed = new Discord.MessageEmbed()
module.exports = {
  name: "setchannel",
  aliases: ["channel"],
  description: "Change the prefix of the bot",
  usage: ["s!prefix [Prefix]"],
  category: ["Moderation"],
  enabled: true,            
  memberPermissions: [ "ADMINISTRATOR" ],            
  botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS" ],        
  ownerOnly: false,            
  cooldown: 10,
  run: async (bot, message, args) => {
   
    
    let m = message.mentions.channels.first()
    let ch = message.guild.channels.cache.find(c => c.id == m.id)
    if(args[1]){
    
    let data = await Guild.findOne({guildID: message.guild.id})
    
    
    

    if (!args[1]) return embed.setColor('#FF0202').setDescription(`**برجاء قم بعمل منشن للروم/التشانل الخاصة للنشر! | ⚠️**`), message.channel.send(embed)
if (data) {
await Guild.findOneAndDelete({ // If data was found then it will delete the data to disable the modlogs
    guildID: message.guild.id
})

message.channel.send('share channel  have been disabled in this guild!\nTo enable them use the command \`>setchannel <channel>\`')
} else if (!data) {

if(data) {Guild.create({ // If no data was found then this is defining the new data to be saved
    guildName: message.guild.name,
    guildID: message.guild.id,
    Channel: m.id
})}

    
    message.channel.send(`seteee`)


  }}}}