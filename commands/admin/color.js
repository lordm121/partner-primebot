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

   let data = await Guild.findOne({guildID: message.guild.id});
      // let data = await Guild.findOneAndUpdate({guildID: message.guild.id})
  if (args[1].startsWith('#')) {
            var color = args[1].slice(1)
        } else {
            emb.setDescription("**You need to enter a hex color code qwq**")
            return message.channel.send(`usage: .color #color code`)
         /// let data = await Prime.findOne({ guildID: message.guild.id});
      if (data) {
        data.Color = color
        data.guild.id = message.guild.id
        data.save()
      }
          if(!data) { Guild.create({
        Color: color,
        guildID: message.guild.id
      
      }); } 
      ///db.set(`${message.guild.id}.serverColor`, color)
         message.channel.send(emb.setDescription("**Changed color succesfully**"))
     /// db.set(`${message.guild.id}.serverColor`,color)
    }}}