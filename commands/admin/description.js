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
  cooldown: 6000,
  run: async (bot, message, args, dev) => {
  if (!message.guild.member(message.author).hasPermission('ADMINISTRATOR')) return embed.setColor('#FF0202').setDescription(`**You dont have \`ADMINISTRATOR\` Premission| 🤔**`), message.channel.send(embed)

    let description = message.content.split(' ').slice(1).join(' ');

    if (!description) return embed.setColor('#FF0202').setDescription(`**Please setup server \`Description\`! | ⚠️**`), message.channel.send(embed)

    if (db.has(`${message.guild.id}.serverDescription`) && db.get(`${message.guild.id}.serverDescription`) == description) {
      embed.setColor('#FF0202').setDescription(`**Server description already on** \`database\` ❌`);
      message.channel.send(embed)
      return;
    };
    let des = description.includes('@')?description.replace(/@/gi, '-'):description;
    db.set(`${message.guild.id}.serverDescription`, des);


    embed.setDescription(`**server description has been saved on** \`database\`☑️`), message.channel.send(embed)

  }

}


