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
      let  command = args[1]
      if (bot.commands.has(command) || 
      bot.aliases.has(command)) {  
      
      command = bot.commands.get(command) || bot.aliases.get(command);
        let ccmd = "<:disable:840230135046471711> Disabled"
        if ( command.enabled ) {
        ccmd = "<:enable:840230134899671060> Enabled"
        }
      let embed = new Discord.MessageEmbed()
      .setColor(Color) 
      .setThumbnail(message.author.avatarURL())
      .setTitle("**Help**")
      .setDescription(command.description || command.name + " this command don't have a description")
//      .addField("**Usage**", "" + command.usage.join(", ") + "" )
      .addField("**Category**", "" + command.category.join(", ") + "" )
      .addField("**Command is**", ccmd);
      message.channel.send(embed)
        }
    }  
  
  }
}