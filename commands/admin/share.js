const Discord = require('discord.js')
const schema = require ('../../data/guild.js')
const ms1 = require("ms");
const x73db = require("x73db")
const db = new x73db("coolshare")
const dba = new x73db("cooldown")
const moment = require("moment");
module.exports = {
  name: "share.js",
  aliases: ["s"],
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
    
    const data = await schema.findOne({
    guildID: message.guild.id
})
if (data) {

            var invite = await message.channel.createInvite();

  bot.guilds.cache.forEach(c =>{

let rooms = bot.channels.cache.get(data.channelID)
  const embed = new Discord.MessageEmbed()
.setFooter(`Executor ID:  `)
.setColor('#36393f')
.addFields(
    {name: `Executor`, value: ``, inline: true},
    {name: 'Channel Made', value: `Name: ${rooms.name} (<#${rooms.id}>)`}
)

rooms.send(embed)
}) 
  }}}
