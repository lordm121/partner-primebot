const Discord = require('discord.js')
const ms1 = require("ms");

const x73db = require("x73db")
const db = new x73db("coolshare")
const dba = new x73db("cooldown")
const moment = require("moment");
module.exports = {
  name: "set-room",
  aliases: ["st"],
  description: "Prevent others from mass banning your members",
  usage: ["s!antiban [number/on/off]"],
  category: ["Security"],
  enabled: true,
  memberPermissions: ["SEND_MESSAGES"],
  botPermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
  ownerOnly: false,
  guilOwnerOnly: true,
  cooldown: 3000,
  run: async (bot, message, args) => {
   


    
let room = message.mentions.channels.first();

            if(!room) return message.reply(`**I Can't Find ${args[1]}**`);
            let em = new Discord.MessageEmbed()
            .setColor("BLUE")
            .setDescription(`**Done Set ${room} Share Room ID ROOM : \`${room.id}\`**`)
            message.channel.send(em)

            db.set(`shareroom_${message.guild.id}`, room.id)

            dba.set(`cool_${message.author.id}`, Date.now());

          }
  }