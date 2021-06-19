const Discord = require('discord.js')
///const { Color } = require("../../config.js");
let emb = new Discord.MessageEmbed();
const db = require("quick.db")
module.exports = {
    name: "color",
    aliases: ["color"],
    description: "You can ban a member, or multiple members using this command",
    usage: ["s!ban [@User]"],
    category: ["Moderation"],
    enabled: true,
    memberPermissions: ["BAN_MEMBERS"],
    botPermissions: ["SEND_MESSAGES", "EMBED_LINKS", "BAN_MEMBERS"],
    ownerOnly: false,
    cooldown: 6000,
    run: async (bot, message, args, dev) => {
  if (args[1].startsWith('#')) {
            var color = args[1].slice(1)
        } else {
            emb.setDescription("**You need to enter a hex color code qwq**")
            return message.channel.send(`i cant this`)
        }
        
        return message.channel.send(emb.setDescription("**Changed color succesfully**"))
      db.set(`${message.guild.id}.serverColor`)
    }}