const fs = require("fs");
const Discord = require("discord.js")
const { Color } = require("../../config.js");

module.exports = {
  name: "premium",
  aliases: ["premium"],
  description: "show all premium features",
  usage: ["p!premium"],
  category: ["General"],
  enabled: true,
  memberPermissions: ["SEND_MESSAGES"],
  botPermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
  ownerOnly: false,
  cooldown: 10,
  run: async (bot, message, args, dev, data) => {
    
const embed = new Discord.MessageEmbed()
 .setColor(Color)
 .setTitle("premium features")
 .setDescription(bot.pro.get(data.lang, "general","premium_info"))
 .setFooter(`by : ${message.author.tag}`)
message.channel.send({embeds:[embed]});
    }
}
