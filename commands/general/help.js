const fs = require("fs");
const Discord = require("discord.js");
const { Color } = require("../../config.js")
const { MessageEmbed } = require("discord.js")
module.exports = {
  name: "help",
  cmdHelp: "Get help embed",
  cmdUsage: ".help",
  cmdCatagory: "General",
  aliases: ["help","command","commands"],
  enabled: true,            
  memberPermissions: [ "SEND_MESSAGES" ],            
  botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS" ],        
  ownerOnly: false,            
  cooldown: 3000,
  run: async (bot, message, args, dev,data) => {
    if (!args[1]) {
let embed = new Discord.MessageEmbed()
         .setColor(Color)
         .setTitle(bot.pro.get(data.lang, "general","help_embed"))
         .setDescription(`
    [ Top.gg soon ](https://top.gg/) - [ Invite ](https://discord.com/api/oauth2/authorize?client_id=${bot.user.id}&permissions=67206193&scope=bot) - [ Support ](https://discord.gg/aW6TnhGeSS)
    `)
         .addField
("ℹ️ General", "`invite`, `support`, `about`, `ping`, `vote(soon)`")
     .addField("⚙️ Admin", "`share`, `set-room`,`prefix`, `lang`")
    /// .addField("🔨 Security", "`anti`, `settings`, `punishment`, `whitelist`")
  message.channel.send(embed)

      
    } else {
      let command = bot.commands.get(args[1]);
      if (!command) command = bot.commands.get(bot.aliases.get(args[1]));
      if (command) {
        if (!command.cmdUsage) {
          command.cmdUsage = "No usage for this command"
        }
        if (!command.cmdHelp) {
          command.cmdHelp = "No help for this command"
        }
        if (!command.cmdCatagory) {
          command.cmdCatagory = "Null"
        }
        let embed = new MessageEmbed()
          .setColor(Color)
          .setTitle("Command Help")
          .setDescription(`
**Help:** ${command.cmdHelp}
**Usage:** ${command.cmdUsage}
**Category:** ${command.cmdCatagory}`)
        message.channel.send(embed);
      } else {
        return message.channel.send(`We don't have command by this name **${args[0]}**`)
      }
    }
  }
}