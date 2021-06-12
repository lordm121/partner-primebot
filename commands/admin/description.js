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
  if (!message.guild.member(message.author).hasPermission('ADMINISTRATOR')) return embed.setColor('#FF0202').setDescription(`**لا تمتلك صلاحية \`ADMINISTRATOR\` | 🤔**`), message.channel.send(embed)

    let description = message.content.split(' ').slice(1).join(' ');

    if (!description) return embed.setColor('#FF0202').setDescription(`**برجاء قم بكتابة وصف للسيرفر الخاص بك ! | ⚠️**`), message.channel.send(embed)

    if (db.has(`${message.guild.id}.serverDescription`) && db.get(`${message.guild.id}.serverDescription`) == description) {
      embed.setColor('#FF0202').setDescription(`**لقد قمت بالفعل بإضافة ذلك الوصف من قبل ! | ❌**`);
      message.channel.send(embed)
      return;
    };
    let des = description.includes('@')?description.replace(/@/gi, '-'):description;
    db.set(`${message.guild.id}.serverDescription`, des);


    embed.setDescription(`**.لقد تم إضافة وصف السيرفر بنجاح | ☑️**`), message.channel.send(embed)

  }

}


