const Discord = require('discord.js')
const { Color } = require("../../config.js");

module.exports = {
    name: "set-lang.js",
    aliases: ["setlang"],
    description: "You can ban a member, or multiple members using this command",
    usage: [".setlang"],
    category: ["Admin"],
    enabled: true,
    memberPermissions: ["BAN_MEMBERS"],
    botPermissions: ["SEND_MESSAGES", "EMBED_LINKS", "BAN_MEMBERS"],
    ownerOnly: false,
    cooldown: 6000,
    run: async (bot, message, args, dev) => {
 //let lang = await Lang.findIne({guildID: message.guild.id})

  if (!args[1])
        return message.channel.send(new Discord.MessageEmbed().setColor(Color).setDescription(``));
      let data = await Lang.findOne({ guildID: message.guild.id })
      if (args[1].toLowerCase() === "english" || args[1].toLowerCase() === "kurdish" || args[1].toLowerCase() === "arabic" || args[1].toLowerCase() === "spain" || args[1].toLowerCase() === "germany","Germany") {
        data.language = args[1].toLowerCase();
        message.channel.send(new Discord.MessageEmbed().setColor(Color).setDescription(`
          language your server has been changed to **${data.language}**`
        ));
      data.save();
      } else if (args[1] === "list") {
        message.channel.send(new Discord.MessageEmbed().setColor(Color).setDescription(`Language list is :\n **english** ,**kurdish** ,**arabic** ,**spain** ,**germany**`));
      } else {
        message.channel.send(new Discord.MessageEmbed().setColor(Color).setDescription(`
          Please Type\n \`.lang english\` \n \`.lang kurdish\` \n \`.lang arabic\` \n \`.lang spain\` \n \`.lang germany\``
        ));
     }}}