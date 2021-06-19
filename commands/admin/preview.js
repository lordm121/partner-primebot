const Discord = require("disocrd.js")
const db = require("quick.db")
let embed = new Discord.MessageEmbed()
module.exports = {
    name: "preview",
    aliases: ["prev"],
    description: "You can ban a member, or multiple members using this command",
    usage: ["s!ban [@User]"],
    category: ["Moderation"],
    enabled: true,
    memberPermissions: ["BAN_MEMBERS"],
    botPermissions: ["SEND_MESSAGES", "EMBED_LINKS", "BAN_MEMBERS"],
    ownerOnly: false,
    cooldown: 6000,
    run: async (client, message, args, dev) => {
  let des= db.get(`${message.guild.id}.serverDescription`)
           embed .setTitle(` Preview [${message.guild.name}]`)
           embed .setColor("")
 
        .setDescription(`\n **Description:**\n ${des} 
    \n **Invite: [klick]** 
    \n :globe_with_meridians: ${message.guild.region}
    \n ${message.guild.memberCount}
    `)
        return message.channel.send(embed)
    }}