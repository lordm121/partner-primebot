const fs = require("fs");
const Discord = require("discord.js");
const { Color} = require("../../config.js");
module.exports = {
  name: "help",
  aliases: ["commands"],
  description: "To show you all command of the bot",
  usage: ["p!help","p!help <command>"],
  category: ["General"],
  enabled: true,            
  memberPermissions: [ "SEND_MESSAGES" ],            
  botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS" ],        
  ownerOnly: false,            
  cooldown: 10,
  run: async (bot, message, args, dev, data) => {
   
    if (!args[1]) {
  let embed = new Discord.MessageEmbed()
     .setColor(Color)
     
.setColor(Color)
         .setTitle(bot.pro.get(data.lang, "general","help_embed"))
         .setDescription(`
    [ Top.gg ](https://top.gg/838593240328044554) [discord.ly](https://discord.ly/partner-bot-5806) - [ Invite ](https://discord.com/api/oauth2/authorize?client_id=${bot.user.id}&permissions=67206193&scope=bot) - [ Support ](https://discord.gg/aW6TnhGeSS) - if you want know how to setup Partner bot [click her](https://cdn.discordapp.com/attachments/847495685716443246/856250092025282561/VivaCut_video_1624207856278_HD.mp4)
    `)
         .addField
("ℹ️ General", "`invite`,`help prime`,`support`, `about`, `ping`, `vote(soon)`, `premium`,")
     .addField("⚙️ Admin", "`share`,`setchannel`,`setcolor`,`setprefix`,`setdescription`,`setbanner`,`preview`")
  .addField("💸 Economy","`balance`,`daily`,`sendcredit`")
.addField("🔮 Premium","`auto`")
     
 return message.channel.send(embed);
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
      .setTitle(`**If you a new user Please go to dashboard and setup [dashboard](https://www.partner-bot.tk)**`)
      .setDescription(command.description || command.name + " this command don't have a description")
       .addField(`[DASHBOARD](https://www.partner-bot.tk)`)
      .addField("**Usage**", "" + command.usage.join(", ") + "" )
      .addField("**Category**", "" + command.category.join(", ") + "" )
      .addField("**Command is**", ccmd);
      message.channel.send(embed)
        }
    }
  }};
