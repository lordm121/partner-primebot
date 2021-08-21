const fs = require("fs");
const Discord = require("discord.js");
module.exports = {
  name: "sendcredit",
  aliases: ["credit","credits"],
  description: "To send credit",
  usage: ["credits @user @amount"], 
  enabled: true,			
  memberPermissions: [ "SEND_MESSAGES" ],			
  botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS" ],		
  ownerOnly: false,			
  cooldown: 15,
  run: async (bot, message, args, dev,dev2) => {
  if (!args[2]) return;
    let member = message.guild.member(message.mentions.users.first())
    if(!member) return message.channel.send(`Mention someone!`)
    if(!args[2]) return message.channel.send(`Type credit!`)
    if(args[2] < 1) return message.channel.send(`You can't send 0 credit!`)

    let author = await User.findOne({ userID: message.author.id });
    let loc = await User.findOne({ userID: member.id });
    if(!loc) return bot.nodb(member.user)
            
    if(author.money < args[2]) return message.channel.send(`You don't have this amount credit!`)
    if(author.userID == member.id) return message.channel.send(`You can't send credit to yourself!`)
    if(member.user.bot) return message.channel.send(`You can send credit to the bot!`)
    
    author.money -= Math.floor(parseInt(args[2]));
    loc.money += Math.floor(parseInt(args[2]));
    author.save();
    loc.save()
    message.channel.send(`**${message.author.username}** send credit to **${member.user.username}** amount \`${args[2]}\``)
    }};
