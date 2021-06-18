const Discord = require("discord.js")
const embed = new Discord.MessageEmbed()
const db = require("quick.db")
const devs = "768944616724103170"
module.exports = {
  name: "black",
  aliases: ["b"],
  description: "Get more information about your server",
  usage: ["s!serverinfo"],
  category: ["General"],
  enabled: true,
  memberPermissions: ["SEND_MESSAGES"],
  botPermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
  ownerOnly: false,
  cooldown: 3000,
  run: async (bot, message, args, dev, data) => {
if (!devs.includes(message.author.id)) return;
    const black = message.content.split(" ").slice(1).join(" ");
    if (db.has(`${message.guild.id}.serverBlackList`)) return embed.setDescription(`**لقد تم حظر السيرفر بالفعل | ⚠️**`), message.channel.send(embed)
    db.set(`${message.guild.id}.serverBlackList`, true);
    embed.setDescripti}}