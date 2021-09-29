const Discord = require("discord.js")
const db = require("quick.db")
let embed = new Discord.MessageEmbed()
module.exports = {
  name: "description.js",
  aliases: ["sd","description","set-description","setdescription"],
  enabled: true,
  memberPermissions: ["SEND_MESSAGES"],
  botPermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
  ownerOnly: false,
  guilOwnerOnly: true,
  cooldown: 20,
  prime: false,
  run: async (bot, message, args, dev, data) => {
 /// if (!message.guild.member(message.author).hasPermission('ADMINISTRATOR')) return embed.setColor('#FF0202').setDescription(`**You dont have \`ADMINISTRATOR\` Premission| 🤔**`), message.channel.send(embed)
let server= await Servers.findOne({serverIDID:message.guild.id})
    let description = message.content.split(' ').slice(1).join(' ');

    if (!description) return message.channel.send(bot.pro.get(data.lang, "admin","err_description"))

  
    
    let des = description.includes('@')?description.replace(/@/gi, '-'):description;
   
      if (server) {
        server.longDesc = description
        server.serverID = message.guild.id
        server.save()
      }
    if(!server) { Servers.create({
      longDesc: description,
      serverID: message.guild.id
      
        
      }); } 
message.channel.send(bot.pro.get(data.lang, "admin","sec_description"))
    ///embed.setDescription(`**server description has been saved on** \`database\`☑️`), message.channel.send(embed)

  }

}


