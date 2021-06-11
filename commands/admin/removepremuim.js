
const fs = require("fs");
const Discord = require("discord.js");
//nst { Color } = require("../../config.js");
const db = require("quick.db")
let embed = new Discord.MessageEmbed()
const devs = "768944616724103170"
module.exports = {
  name: "removepremuim",
  aliases: ["removepre"],
  description: "Change the prefix of the bot",
  usage: ["s!prefix [Prefix]"],
  category: ["Moderation"],
  enabled: true,            
  memberPermissions: [ "ADMINISTRATOR" ],            
  botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS" ],        
  ownerOnly: false,            
  cooldown: 10000,
  run: async (bot, message, args, dev, data) => {
if (!devs.includes(message.author.id)) return;

    let premium = message.content.split(" ").slice(1).join(" ");

    if (!db.has(`${premium}.serverPlan`)) return embed.setDescription(`**ان سيرفر \`${db.get(`${premium}.serverName`)}\` \`Free\` بالفعل ⚠️**`), message.channel.send(embed)

    db.delete(`${premium}.serverPlan`, 'premium');
    db.delete(`${premium}.serverPlanTime`, null);

    embed.setDescription(`**تم إزالة سيرفر \`${db.get(`${premium}.serverName`)}\` من الـ \`Premium\` بنجاح ☑️**`), message.channel.send(embed)
  }}