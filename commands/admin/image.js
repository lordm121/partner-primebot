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
  /*
  const image = args.join("")
  message.channel.send(`https://cdn.discordapp.com/attachments/805417634102640690/856098452669071380/Screenshot_20210620_120145_com.discord.jpg`)
  */
  
  let l = args.join(' ');

    if (!l) return embed.setColor('#FF0202').setDescription(`**only url! | ⚠️**`), message.channel.send(embed)

    if (db.has(`${message.guild.id}.image`) && db.get(`${message.guild.id}.image`) == l) {
      embed.setColor('#FF0202').setDescription(`**befor  | ❌**`);
      message.channel.send(embed)
      return;
    };

    db.set(`${message.guild.id}.image`, l);
    embed.setDescription(`**| ☑️**`), message.channel.send(embed)
    message.channel.send(`${l}`)

  }

  
  
  
  }