const Discord = require("discord.js");
const { Color } = require("../../config.js");
var db = require("quick.db")
module.exports = {
  name: "channel",
  aliases: ['ch'],
  description: "To show MS",
  usage: [".pong"],
  category: ["General"],
  enabled: true,			
  memberPermissions: [ "SEND_MESSAGES" ],			
  botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS" ],		
  ownerOnly: false,			
  cooldown: 2000,
  run: async (bot, message, args, dev,embed,) => {
if (!message.guild.member(message.author).hasPermission('ADMINISTRATOR')) return embed.setColor('#FF0202').setDescription(`**لا تمتلك صلاحية \`ADMINISTRATOR\` | 🤔**`), message.channel.send(embed).then(deleteMessage);

    let messageSetting = message.mentions.channels.first();
    let ch = message.guild.channels.cache.find(c => c.id == messageSetting.id);

    if (!messageSetting || !ch) return embed.setColor('#FF0202').setDescription(`**برجاء قم بعمل منشن للروم/التشانل الخاصة للنشر! | ⚠️**`), message.channel.send(embed).then(deleteMessage);

    if (db.has(`${serverID}.serverPostChannel`) && db.get(`${serverID}.serverPostChannel`) == ch.id) {
      embed.setColor('#FF0202').setDescription(`**لقد قمت بالفعل بإضافة تلك التشانل من قبل! | ❌**`);
      message.channel.send(embed).then(deleteMessage);
      return;
    };

    db.set(`${serverID}.serverPostChannel`, ch.id);
    embed.setDescription(`**.لقد تم التثبيت بنجاح | ☑️**`), message.channel.send(embed).then(deleteMessage);

  },}