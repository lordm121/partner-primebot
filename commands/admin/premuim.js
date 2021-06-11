const Discord = require("discord.js")
const db = require("quick.db")
const pretty = require('pretty-ms');
const devs = "768944616724103170"
let embed = new Discord.MessageEmbed()
module.exports = {
  name: "premuim",
  aliases: ["pre"],
  description: "To show server support",
  usage: [".support"],
  category: ["General"],
  enabled: true,
  memberPermissions: ["SEND_MESSAGES"],
  botPermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
  ownerOnly: false,
  cooldown: 2000,
  run: async (bot, message, args, dev) => {
if (!devs.includes(message.author.id)) return;
    if (db.get(`${message.guild.id}.serverPlan`) == 'Free') 
      return embed.setDescription(`**ان سيرفر \`${db.get(`${message.guild.id}.serverName`)}\`  ليس مشترك في الـ \`Premium\` ⚠️**`),
        message.channel.send(embed)
   // const cooldown = 2.4192e9;
  const cooldown = (30 * 24 * 3600);
    const preTime = db.get(`${message.guild.id}.serverPlanTime`); // الوقت بتاع المستخدم فيه كام ثانية
    const preNow = cooldown - (Date.now() - preTime);
    if (preTime !== null && preNow > 0) {
      embed.setDescription(`** \`${pretty(preNow, { verbose: true })}\`**`), message.channel.send(embed);
    } else {
      db.set(`${message.guild.id}.serverLanguage`, 'arabic')
      db.set(`${message.guild.id}.serverPrefix`, '-')
      db.set(`${message.guild.id}.serverPlan`, 'Free')
      db.set(`${message.guild.id}.serverPlanTime`, null)
      embed.setDescription(`**انتهي اشتراك البرايم في هذا السيرفر ⚠️**`),
      message.channel.send(embed)
    }}}