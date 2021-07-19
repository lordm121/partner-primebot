const Discord = require("discord.js")
const db = require("quick.db")
let embed = new Discord.MessageEmbed()
const Color = require("../../config.js")
module.exports = {
    name: "preview",
    aliases: ["prev","preview"],
    description: "show all configuration befor bump your server",
    usage: [".preview"],
    category: ["Admin"],
    enabled: true,
    memberPermissions: ["MANAGE_GUILD","ADMINISTRATOR"],
    botPermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
    ownerOnly: false,
    cooldown: 10,
    run: async (client, message, args, dev) => {
      
  let data = await Guild.findOne({guildID: message.guild.id})
        message.channel.send(` your share design
\`Description\`: \n **${data.Description} **
\`share channel\`:**<#${data.Channel}>**
\`server banner\`: **${data.Banner}**
\`Embed Color\`: **${data.Color}**
`)
      
    }}