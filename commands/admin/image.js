const Discord = require("discord.js")
module.exports = {
  name: "image",
  aliases: ["iamge"],
  description: "To show you all command of the bot",
  usage: ["s!help","s!help <command>"],
  category: ["General"],
  enabled: true,            
  memberPermissions: [ "SEND_MESSAGES" ],            
  botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS" ],        
  ownerOnly: false,            
  cooldown: 1000,
  run: async (bot, message, args, dev, data) => {
  const image = args.join("")
  message.channel.send(`https://cdn.discordapp.com/attachments/805417634102640690/856098452669071380/Screenshot_20210620_120145_com.discord.jpg`)
  }}