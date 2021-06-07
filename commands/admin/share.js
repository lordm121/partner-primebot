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
  description: "this command use to share your server",
  usage: [".share or نشر."],
  category: ["Admin"],
  enabled: true,
  memberPermissions: ["SEND_MESSAGES","ADMINISTRATOR"],
  botPermissions: ["SEND_MESSAGES", "EMBED_LINKS","CREATE_INVITE"],
  ownerOnly: false,
  guilOwnerOnly: true,
  cooldown: 0,
  run: async (bot, message, args) => {
    let guild = await Guild.findOne({guildId: message.guild.id, guildName: message.guild.name});
    
  let bl = db.get(`bl_${message.guild.id}`);

  let des = db.get(`des_${message.guild.id}`);
let timeshare = 6000

let times = db.get(`coolshare_${message.guild.id}`);

if (times !== null && timeshare - (Date.now() - times) > 0) {

let s = ms1(timeshare - (Date.now() - times), { long: true })

message.channel.send(new Discord.MessageEmbed().setTitle(`${message.guild.name}`).setFooter(`hello ${message.author.name} you shared server`).setDescription(`your server shared to ${bot.guilds.cache.size} guilds`))
}else{
    

            var invite = await message.channel.createInvite();

  bot.guilds.cache.forEach(c =>{
    
    let rooms = db.get(`shareroom_${c.id}`);

if(!rooms){

 c.channels
 .create("Partners", {
type: "text" 
 
 })
   .then(r=>{

      r.createOverwrite(message.guild.id,{

        SEND_MESSAGES: false

    })

          db.set(`shareroom_${c.id}`, r.id);

          rooms = r.id;

                      let room = c.channels.cache.get(rooms);

            room.send(`\`Sᴇʀᴠᴇʀ Nᴀᴍᴇ\`: ${message.guild.name}

 \`Sᴇʀᴠʀʀ Dᴇsᴄʀɪᴘᴛɪᴏɴ\`: ${des}

\`Sᴇʀᴠᴇʀ Oᴡɴᴇʀ\`: ${message.guild.owner}

 \`Iɴᴠɪᴛᴇ\`: ${invite}`)

            })

            return;

}
let room = c.channels.cache.get(rooms);

if(!room) {

  c.channels

            .create("Partners", {

              //optional

              type: "text" //optional

            }).then(r=>{

      db.set(`shareroom_${c.id}`, r.id)

      r.createOverwrite(message.guild.id,{

        SEND_MESSAGES: false

    })

    db.get(`bl_${message.guild.id}`,"on");

    r.send(`**Server Name : ${message.guild.name}** \n **Server Description : ${ "Pls Join To Our Server"}**\n **MemberCount : ${message.guild.memberCount}** \n **Invite : ${invite} ** `);

      db.set(`bl_${message.guild.id}`, "on");

    })

}else{

room.send(`\` \`: ${message.guild.name}
\`Sᴇʀᴠᴇʀ Dᴇsᴄʀɪ\`: ${des || "null"}
\`Sᴇʀᴠᴇʀ Oᴡɴᴇʀ\`: ${message.guild.owner}

\`Iɴᴠɪᴛᴇ\`: ${invite}`)
          

  message.channel.send(new Discord.MessageEmbed().setDescription(`Your Server Shared to ${bot.guilds.cache.size} Guilds`))

  db.set(`coolshare_${message.guild.id}`, Date.now());



            dba.set(`cool_${message.author.id}`, Date.now());

  }}

)
    


  
}}}