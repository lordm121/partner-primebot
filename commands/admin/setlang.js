const Discord = require('discord.js')
const { Color } = require("../../config.js");

module.exports = {
    name: "setlang.js",
    aliases: ["setlang"],
    description: "You can ban a member, or multiple members using this command",
    usage: ["p!setlang"],
    category: ["Admin"],
    enabled: false,
    memberPermissions: ["MANAGE_GUILD"],
    botPermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
    ownerOnly: false,
    cooldown: 30,
    prime: false,
    run: async (bot, message, args, dev) => {
 //let lang = await Lang.findIne({guildID: message.guild.id})

  if (!args[1])
        return message.channel.send(new Discord.MessageEmbed().setColor(Color).setDescription(``));
      let data = await Lang.findOne({ guildID: message.guild.id })
      if (args[1].toLowerCase() === "english" || args[1].toLowerCase() === "kurdish" || args[1].toLowerCase() === "arabic" || args[1].toLowerCase() === "french" || args[1].toLowerCase() === "germany") {
        data.language = args[1].toLowerCase();
        message.channel.send({content:
          `language your server has been changed to **${data.language}**`
        });
      data.save();
      } else if (args[1] === "list") {
        message.channel.send({content:`Language list is :\n **english** ,**kurdish** ,**arabic** ,**french**`});
      } else {
        message.channel.send({content:` Please Type\n \`p!lang english\` \n \`p!lang kurdish\` \n \`p!lang arabic\` \n \`p!lang french\``
                             });
     }}}
