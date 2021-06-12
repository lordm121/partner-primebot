const Discord = require("discord.js")
const db = require("quick.db")
const pretty = require('pretty-ms');
const devs = "768944616724103170"
let embed = new Discord.MessageEmbed()
module.exports = {
  name: "premuim",
  aliases: ["pre","prime"],
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
      return message.channel.send(`You don't buy Premuim version`)
   /* embed.setDescription(`**Your server dont have premuim version \`${db.get(`${message.guild.id}.serverName`)}\`ـ 
    if you want\`Premium\` version please join support server and send messag to <@768944616724103170> ⚠️**`),
        message.channel.send(embed)*/
   // const cooldown = 2.4192e9;
  const cooldown = 2592000000;
    const preTime = db.get(`${message.guild.id}.serverPlanTime`); // الوقت بتاع المستخدم فيه كام ثانية
    const preNow = cooldown - (Date.now() - preTime);
    if (preTime !== null && preNow > 0) {
      embed.setDescription(`**premuim version time**   \`${pretty(preNow, { verbose: true })}\`**`), message.channel.send(embed);
    } else {
      db.set(`${message.guild.id}.serverLanguage`, 'english')
      db.set(`${message.guild.id}.serverPrefix`, '-')
      db.set(`${message.guild.id}.serverPlan`, 'Free')
      db.set(`${message.guild.id}.serverPlanTime`, null)
      embed.setDescription(`**Premium version ended ⚠️**`),
      message.channel.send(embed)
    }}}