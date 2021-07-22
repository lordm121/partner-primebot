const Discord = require('discord.js')

let emb = new Discord.MessageEmbed();
const db = require("quick.db")
module.exports = {
    name: "color",
    aliases: ["color"],
    description: "set your emebd message ",
    usage: ["p!color #color code"],
    category: ["admin"],
    enabled: true,
    memberPermissions: ["MANAGE_GUILD"],
    botPermissions: ["SEND_MESSAGES", "EMBED_LINKS", "MANAGE_MESSAGES"],
    ownerOnly: false,
    cooldown: 10,
   prime:true,
    run: async (bot, message, args, dev, data) => {
////if (db.get(`${args}.serverPlan`) == 'Free') return embed.setDescription(`** This command Only for \`Premuim\` version⚠️**`), message.channel.send(embed).then(deleteMessage);

   let guild = await Guild.findOne({guildID: message.guild.id});
      // let data = await Guild.findOneAndUpdate({guildID: message.guild.id})
  if (args[1].startsWith('#')) {
            var color = args[1].slice(1)
        }else {
let data = await Guild.findOne({ guildID: message.guild.id});
            emb.setDescription(bot.pro.get(data.lang, "admin","color_description"))
            return message.channel.send(`usage: p!color #color code`)
          
        }if (guild) {
        guild.Color = args[1]
        guild.guildID = message.guild.id
        guild.save()
      }
          if(!guild) { Guild.create({
        Color: args[1],
        guildID: message.guild.id
      
      }); } 
          message.channel.send(bot.pro.get(data.lang, "admin","sec_color"))
    }}
