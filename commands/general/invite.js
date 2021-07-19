const fs = require("fs");
const Discord = require("discord.js")
const { Color } = require("../../config.js");

module.exports = {
  name: "invite",
  aliases: ["invitelink","inv","invite"],
  description: "Use this command to get the invite link",
  usage: ["p!invite"],
  category: ["General"],
  enabled: true,
  memberPermissions: ["SEND_MESSAGES"],
  botPermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
  ownerOnly: false,
  cooldown: 5,
  run: async (bot, message, args, dev, data) => {
    
const embed = new Discord.MessageEmbed()
 .setColor(Color)
 .setTitle("Invite Link")
 .setDescription(`[Partner Bot](https://discord.com/api/oauth2/authorize?client_id=838593240328044554&permissions=67206193&scope=bot)`)
 .setFooter(`by : ${message.author.tag}`)
message.channel.send(embed);
    }
}
