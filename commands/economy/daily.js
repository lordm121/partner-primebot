const ms = require('ms');
const fs = require("fs");
const pretty = require("pretty-ms")
const Discord = require("discord.js");
module.exports = {
  name: "daily",
  aliases: ["getmony"],
  description: "To get your daily", 
  usage: ["daily"], 
  enabled: true,			
  memberPermissions: [ "SEND_MESSAGES" ],			
  botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS" ],		
  ownerOnly: false,			
  cooldown: 15,
  run: async (client, message, args, dev,dev2) => {
  
      let data = await User.findOne({ guildID: message.guild.id, userID: message.author.id });
      if(data.time !== null && 86400000 - (Date.now() - data.time) > 0) return message.reply(` You need wait ${ms(86400000 - (Date.now() - data.time))} to daily again`)

      let DR = Math.floor(Math.random() * 500) + 200
      
      message.channel.send(`you get \`${DR}\` credits`)
      
      data.time = Date.now();
    data.money += parseInt(DR);
    data.save()
  }};
