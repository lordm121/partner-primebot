const Discord = require('discord.js')

let emb = new Discord.MessageEmbed();
const db = require("quick.db")
module.exports = {
    name: "color",
    aliases: ["color"],
    description: "set your emebd message ",
    usage: [".color #color code"],
    category: ["admin"],
    enabled: true,
    memberPermissions: ["MANAGE_GUILD"],
    botPermissions: ["SEND_MESSAGES", "EMBED_LINKS", "MANAGE_MESSAGES"],
    ownerOnly: false,
    cooldown: 10,
    run: async (bot, message, args, dev) => {
////if (db.get(`${args}.serverPlan`) == 'Free') return embed.setDescription(`** This command Only for \`Premuim\` version⚠️**`), message.channel.send(embed).then(deleteMessage);

      let data = await Guild.findOneAndUpdate({guildID: message.guild.id})
  if (args[1].startsWith('#')) {
            var color = args[1].slice(1)
        } else {
            emb.setDescription("**You need to enter a hex color code qwq**")
            return message.channel.send(`usage: .color #color code `)
        }
      if(data.Color) {
        data.Color 
        data.delete
        
        return message.channel.send(`you used this color befor${data.Color}`)
      }
      if(data){
        data.Color = args[1]
        data.save()
      }
      ///db.set(`${message.guild.id}.serverColor`, color)
        return message.channel.send(emb.setDescription("**Changed color succesfully**"))
     /// db.set(`${message.guild.id}.serverColor`,color)
    }}