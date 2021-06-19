const Discord = require("discord.js")
const db = require("quick.db")
let embed = new Discord.MessageEmbed()
module.exports = {
    name: "preview",
    aliases: ["prev"],
    description: "You can ban a member, or multiple members using this command",
    usage: ["s!ban [@User]"],
    category: ["admin"],
    enabled: true,
    memberPermissions: ["B"],
    botPermissions: ["SEND_MESSAGES", "EMBED_LINKS", "BAN_MEMBERS"],
    ownerOnly: false,
    cooldown: 6000,
    run: async (client, message, args, dev) => {
      
  let des= db.get(`${message.guild.id}.serverDescription`)
  let channel = db.get(`${message.guild.id}.serverPostChannel`)
  let color = db.get(`${message.guild.id}.serverColor`)
  let banner = db.get(`${message.guild.id}.serverBanner`)
           embed .setTitle(` Preview [${message.guild.name}]`)
           embed .setColor("")
 
        .setDescription(`
\`Description\`: \n **${des} **
\`share channel\`:**<#${channel}>**
\`server banner\`: **${banner}**
\`embed Color code\` : **${color}**
:globe_with_meridians: ${message.guild.region}

    `)
        return message.channel.send(embed)
    }}