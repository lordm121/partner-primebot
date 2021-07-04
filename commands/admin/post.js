const Discord = require('discord.js')
//const schema = require ('../../data/guild.js')
const ms1 = require("ms");
const x73db = require("x73db")
const db = new x73db("coolshare")
const dba = new x73db("cooldown")
const moment = require("moment");
module.exports = {
  name: "post",
  aliases: ["s","نشر"],
  description: "this command use to share your server",
  usage: [".share or نشر."],
  category: ["Admin"],
  //dirname: __dirname,
  enabled: true,
  memberPermissions: ["SEND_MESSAGES","ADMINISTRATOR","MANAGE_GUILD"],
  botPermissions: ["SEND_MESSAGES", "EMBED_LINKS","CREATE_INVITE","MANAGE_CHANNELS"],
  ownerOnly: false,
  guilOwnerOnly: false,
  cooldown: 6000,
  run: async (bot, message, args) => {
   /// let data = await Guild.find();
    
  let bl = db.get(`bl_${message.guild.id}`);

  let des = db.get(`des_${message.guild.id}`);
let timeshare = 0

let times = db.get(`coolshare_${message.guild.id}`);

if (times !== null && timeshare - (Date.now() - times) > 0) {

let s = ms1(timeshare - (Date.now() - times), { long: true })

message.channel.send(new Discord.MessageEmbed().setTitle(`${message.guild.name}`).setFooter(``).setDescription(`you muste waiting until end ${s}`))
}else{
    let data = await Guild.find({})

            var invite = await message.channel.createInvite();

  data.forEach( function (c){
    
    let rooms = data.Channel//db.get(`shareroom_${c.id}`);

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

            room.send(`
            \`Server Name\`: ${message.guild.name}
            
            \`Server Description\`: ${des || null}
            
            \`Server Owner\`: ${message.guild.owner}
            \`Invite\`: ${invite}`)

            return;

})
}
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

    r.send(` `);

      db.set(`bl_${message.guild.id}`, "on");

    
  })
}else{

room.send(`
\`Server Name\`: ${message.guild.name}
\`Servrer Description\`: ${des || null}
\`Server Owner\`: ${message.guild.owner}
\`Invite\`: ${invite}`)
          

  message.channel.send(new Discord.MessageEmbed().setDescription(`Your Server Shared to ${bot.guilds.cache.size} Guilds`))

  db.set(`coolshare_${message.guild.id}`, Date.now());



            dba.set(`cool_${message.author.id}`, Date.now());

  }}
  
                
)
    


  
}}}