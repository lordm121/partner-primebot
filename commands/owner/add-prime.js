const Discord = require("discord.js")
const db = require("quick.db")
const devs = "768944616724103170"
let embed = new Discord.MessageEmbed()
module.exports = {
  name: "add-prime",
  aliases: ["addpre"],
  description: "only owenr of bot can use command",
  usage: [""],
  category: ["owner"],
  enabled: true,
  memberPermissions: ["OWNER_BOT"],
  botPermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
  ownerOnly: false,
  cooldown: 2000,
  run: async (bot, message,  dev) => {
if (!devs.includes(message.author.id)) return;
   const args = message.content.split(" ").slice(1).join(" ");
    if (!args) return embed.setDescription(`**Please write id server**`), message.channel.send(embed)
    if (db.get(`${args}.serverPlan`) == 'Premium') return embed.setDescription(`**\`${db.get(`**This server** ${args}.serverName`)}\` **Already on** \`Premium\` **Version**⚠️**`), message.channel.send(embed)
    db.set(`${args}.serverPlan`, 'Premium');
    db.set(`${args}.serverPlanTime`, Date.now());
    embed.setDescription(`** \`${db.get(`${args}.serverName`)}\` **has been added to** \`Premium\` **version **`), message.channel.send(embed)

  }}