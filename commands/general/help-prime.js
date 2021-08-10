const fs = require("fs");
const Discord = require("discord.js")
const { Color } = require("../../config.js");

module.exports = {
  name: "help-prime",
  aliases: ["buy","prime buy","buy prime","help prime","helpprime","helprime"],
  description: "show all premium features",
  usage: ["p!buy prime"],
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
 .setDescription(`You can by a prime bot to you server 
1month: 100000pconis
3month: 200000pconis 
Pcoins: a partner coins  you can get it daily by \`p!daily\`
And rich the value to by prime bot 
p!buy 1month <guildID>
p!buy 3month <guildID>
`


)
 .setFooter(`by : ${message.author.tag}`)
message.channel.send(embed);
    }
}
