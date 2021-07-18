 
const fs = require("fs");
const Discord = require("discord.js");
///const { Color } = require("../../config.js");
const db = require("quick.db")
let embed = new Discord.MessageEmbed()
module.exports = {
  name: "setchannel",
  aliases: ["channel"],
  description: "Change the prefix of the bot",
  usage: ["s!prefix [Prefix]"],
  category: ["Moderation"],
  enabled: true,            
  memberPermissions: [ "ADMINISTRATOR" ],            
  botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS" ],        
  ownerOnly: false,            
  cooldown: 10000,
  run: async (bot, message, args) => {
    let data = await Guild.findOne({})
    
    
    
if (!message.guild.member(message.author).hasPermission('ADMINISTRATOR')) return embed.setColor('#FF0202').setDescription(`**لا تمتلك صلاحية \`ADMINISTRATOR\` | 🤔**`), message.channel.send(embed)

    let messageSetting = message.mentions.channels.first();
    let ch = message.guild.channels.cache.find(c => c.id == args[1].id)//// messageSetting.id);

    if (!args[1]) return embed.setColor('#FF0202').setDescription(`**برجاء قم بعمل منشن للروم/التشانل الخاصة للنشر! | ⚠️**`), message.channel.send(embed)

/*    if (db.has(`${message.guild.id}.serverPostChannel`) && db.get(`${message.guild.id}.serverPostChannel`) == ch.id) {
      embed.setColor('#FF0202').setDescription(`**لقد قمت بالفعل بإضافة تلك التشانل من قبل! | ❌**`);
      message.channel.send(embed)
      return;
    };*/
    if(data.Channel) return message.channel.send(`your chnannel on database`)
if(!data){
  data.Channel = args[1].id
data.save}
    message.channel.send(`seteee`)
    db.set(`${message.guild.id}.serverPostChannel`, ch.id);
    embed.setDescription(`**.لقد تم التثبيت بنجاح | ☑️**`), message.channel.send(embed)

  }}