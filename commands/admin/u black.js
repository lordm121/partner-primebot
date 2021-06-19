/*const Discord = require("discord.js")
const embed = new Discord.MessageEmbed()
const db = require("quick.db")
const devs = "768944616724103170"
module.exports = {
  name: "unblack",
  aliases: ["unb"],
  description: "unblacklist server",
  usage: ["unblack"],
  category: ["onwer"],
  enabled: true,
  memberPermissions: ["SEND_MESSAGES"],
  botPermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
  ownerOnly: false,
  cooldown: 3000,
  run: async (bot, message, args, dev, data) => {
    if (!devs.includes(message.author.id)) return;

    var black = message.content.split(" ").slice(1).join(" ");

    if (db.has(`${black}.serverBlackList`)) return embed.setDescription(`**ان السيرفر ليس في قائمة الحظر | ⚠️**`), message.channel.send(embed)
    db.delete(`${black}.serverBlackList`);

    embed.setDescription(`**لقد تم إزالة الحظر من السيرفر بنجاح | ☑️**`), message.channel.send(embed)
  }}*/