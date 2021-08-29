
const Discord = require("discord.js")
const db = require("quick.db")
let embed = new Discord.MessageEmbed()
const Color = require("../../config.js")
module.exports = {
    name: "preview",
    aliases: ["prev","preview"],
    description: "show all configuration befor bump your server",
    usage: ["p!preview"],
    category: ["Admin"],
    enabled: true,
    memberPermissions: ["MANAGE_GUILD","ADMINISTRATOR"],
    botPermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
    ownerOnly: false,
    cooldown: 20,
   prime: false,
    run: async (client, message, args, dev) => {
      
  let data = await Guild.findOne({guildID: message.guild.id})
        message.channel.send({content:` your share design
\`Description\`: \n **${data.Description || "no have description"} **
\`share channel\`:**<#${data.Channel || "noe have share channel"}>**
\`server banner\`: **${data.Banner || "no have banner"}**
\`Embed Color\`: **${data.Color || "no have embed color"}**
`})
      
    }}
