const Discord = require("discord.js")
const devs = "768944616724103170"
const db = require("quick.db")
let embed = new Discord.MessageEmbed()
module.exports = {
  name: "image",
  aliases: ["iamge"],
  description: "onlyo for onwer bot",
  usage: ["im"],
  category: ["owner"],
  enabled: true,            
  memberPermissions: [ "SEND_MESSAGES" ],            
  botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS" ],        
  ownerOnly: false,            
  cooldown: 1000,
  run: async (bot, message, args, dev, data) => {
    if (!devs.includes(message.author.id)) return;
  
  const image = args.join("")
  message.channel.send(``)
  

  } 
}