const Discord = require("discord.js")
const db = require("quick.db")
const devs = "768944616724103170"
let embed = new Discord.MessageEmbed()
module.exports = {
  name: "add-prime",
  aliases: ["addpre"],
  description: "To show server support",
  usage: [".support"],
  category: ["General"],
  enabled: true,
  memberPermissions: ["SEND_MESSAGES"],
  botPermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
  ownerOnly: false,
  cooldown: 2000,
  run: async (bot, message,  dev) => {
if (!devs.includes(message.author.id)) return;
   const args = message.content.split(" ").slice(1).join(" ");
    if (!args) return embed.setDescription(`**برجاء ادخال ايدي السيرفر**`), message.channel.send(embed)
    if (db.get(`${args}.serverPlan`) == 'Premium') return embed.setDescription(`**ان سيرفر \`${db.get(`${args}.serverName`)}\` \`Premium\` بالفعل ⚠️**`), message.channel.send(embed)
    db.set(`${args}.serverPlan`, 'Premium');
    db.set(`${args}.serverPlanTime`, Date.now());
    embed.setDescription(`**تم إضافة سيرفر \`${db.get(`${args}.serverName`)}\` إلي الـ \`Premium\` بنجاح **`), message.channel.send(embed)

  }}