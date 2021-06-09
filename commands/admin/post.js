const Discord = require('discord.js')
const { Color } = require("../../config.js");
const db = require("quick.db")
const ms1 = require("ms")
module.exports = {
    name: "post.js",
    aliases: ["p"],
    description: "You can ban a member, or multiple members using this command",
    usage: ["s!ban [@User]"],
    category: ["Moderation"],
    enabled: true,
    memberPermissions: ["BAN_MEMBERS"],
    botPermissions: ["SEND_MESSAGES", "EMBED_LINKS", "BAN_MEMBERS"],
    ownerOnly: false,
    cooldown: 6000,
    run: async (bot, message, args, dev) => {
  let bl = db.get(`bl_${message.guild.id}`);

  let des = db.get(`des_${message.guild.id}`);
let timeshare = 0

let times = db.get(`coolshare_${message.guild.id}`);

if (times !== null && timeshare - (Date.now() - times) > 0) {

let s = ms1(timeshare - (Date.now() - times), { long: true })

message.channel.send(new Discord.MessageEmbed().setTitle(`${message.guild.name}`).setFooter(``).setDescription(`you muste waiting until end ${s}`))
}else{
    

            var invite = await message.channel.createInvite();

bot.guilds.cache.forEach(c =>{
let rooms = db.get(`shareroom_${c.id}`);

let room = c.channels.cache.get(rooms);

if(!room) {

  c.channels

            .create("Partners", {

              //optional

              type: "text" //optional

            }).then(r=>{

      db.set(`shareroom_${c.id}`, r.id)

      r.updateOverwrite(message.guild.id,{

        SEND_MESSAGES: false

    })

    db.get(`bl_${message.guild.id}`,"on");

    r.send(`${invite} `);

      db.set(`bl_${message.guild.id}`, "on");

    
  })


room.send(`
\`Server Name\`: ${message.guild.name}
\`Servrer Description\`: ${des || null}
\`Server Owner\`: ${message.guild.owner}
\`Invite\`: ${invite}`)
          

  message.channel.send(new Discord.MessageEmbed().setDescription(`Your Server Shared to ${bot.guilds.cache.size} Guilds`))

  db.set(`coolshare_${message.guild.id}`, Date.now());



            db.set(`cool_${message.author.id}`, Date.now());
}
  }
  
                
)
    

}}}