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
    cooldown: 6000,
    run: async (client, message, args, dev) => {
      
  let des= db.get(`${message.guild.id}.serverDescription`)
  let channel = db.get(`${message.guild.id}.serverPostChannel`)
  let color = db.get(`${message.guild.id}.serverColor`)
  let banner = db.get(`${message.guild.id}.serverBanner`)
           embed .setTitle(` Preview [${message.guild.name}]`)
           embed .setColor(Color)
 
        .setDescription(`
\`Description\`: \n **${des} **
\`share channel\`:**<#${channel}>**
\`server banner\`: **${banner}**
\`embed Color code\` : **${color}**
\`server region\`:globe_with_meridians:: ${message.guild.region}

    `)
        return message.channel.send(embed)
    }}