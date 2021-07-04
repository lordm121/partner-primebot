const Discord = require('discord.js')
const ms1 = require("ms");
const { Color } = require("../../config.js")
//const x73db = require("x73db")
//c/onst db = new x73db("coolshare")
///const dba = new x73db("cooldown")
const db = require("quick.db")
//const moment = require("moment");
module.exports = {
  name: "set-room",
  aliases: ["st","set-room","setchannel","channel"],
  description: "this command use to set room share",
  usage: [".set-room or .st <#channel>"],
  category: ["Admin"],
  enabled: true,
  memberPermissions: ["SEND_MESSAGES","ADMINISTRATOR"],
  botPermissions: ["SEND_MESSAGES", "EMBED_LINKS","MANAGE_CHANNELS"],
  ownerOnly: false,
  guilOwnerOnly: false,
  cooldown: 3000,
  run: async (bot, message, args) => {
   
let data = await Guild.findOne({guildID: message.guild.id});

    
            room = message.mentions.channels.first();

            if(!room) return message.reply(`**I Can't Find ${args[1]}**`);
  data.Channel = room.id
    data.save()
       
            let em = new Discord.MessageEmbed()
            .setColor("")
            .setDescription(`**Done Set ${room} Share Room ID ROOM : \`${room.id}\`**`)
            message.channel.send(em)

         ///   db.set(`shareroom_${message.guild.id}`, room.id)

        ///    db.set(`cool_${message.author.id}`, Date.now());

          }
}