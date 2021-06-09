const Discord = require('discord.js')
//onst schema = require ('../../data/guild.js')
const ms1 = require("ms");
//const x73db = require("x73db")
//const db = new x73db("coolshare")
const db = require("quick.db")
//const dba = new x73db("cooldown")
const moment = require("moment");
module.exports = {
  name: "share.js",
  aliases: ["share","نشر"],
  description: "this command use to share your server",
  usage: [".share or نشر."],
  category: ["Admin"],
  //dirname: __dirname,
  enabled: true,
  memberPermissions: ["SEND_MESSAGES","ADMINISTRATOR"],
  botPermissions: ["SEND_MESSAGES", "EMBED_LINKS","CREATE_INVITE"],
  ownerOnly: false,
  guilOwnerOnly: false,
  cooldown: 0,
  run: async (bot, message, args, data) => {
    let guild = await Guild.findOne({guildId: message.guild.id, guildName: message.guild.name});
    
  let bl = db.get(`bl_${message.guild.id}`);

  let des = db.get(`description_${message.guild.id}`);
let timeshare = 0

let times = db.get(`coolshare_${message.guild.id}`);

if (times !== null && timeshare - (Date.now() - times) > 0) {

let s = ms1(timeshare - (Date.now() - times), { long: true })

message.channel.send(new Discord.MessageEmbed().setTitle(`${message.guild.name}`).setFooter(`hello ${message.author.name} you shared server`).setDescription(`your server shared to ${bot.guilds.cache.size} guilds`))
}else{
    

            var invite = await message.channel.createInvite();

  bot.guilds.cache.forEach(c =>{
    
    let rooms = db.get(`shareroom_${c.id}`);

if(!rooms){
/*
 c.channels
 .create("Partners", {
type: "text" 
 
 })
   .then(r=>{

      r.createOverwrite(message.guild.id,{

        SEND_MESSAGES: false

    })
*/c.channels.create('Partners', {
	type: 'text'}).then(r =>{
	r.permissionOverwrites (
		{
			id: message.guild.id,
			deny: ['SEND_MESSAGES'],
      allow: ['VIEW-CHANNEL'],
		},
		{
			id: message.author.id,
			allow: ['VIEW_CHANNEL','SEND_MESSAGES'],
		},
	)

          db.set(`shareroom_${c.id}`, r.id);

          rooms = r.id;

                      let room = c.channels.cache.get(rooms);

            room.send(`
            \`Server Name\`: ${message.guild.name}
            
            \`Server Description\`: ${des || null}
            
            \`Server Owner\`: ${message.guild.owner}
            \`Invite\`: ${invite}`)
//room.send(bot.pro(data.lang, "general",`share_message`))
            return;

})
}
let room = c.channels.cache.get(rooms);

if(!room) {

  c.channels.create("Partners", {

              //optional

              type: "text" //optional

            }).then(r=>{

      db.set(`shareroom_${c.id}`, r.id)

      r.permissionOverwrites(
        { 
          id: message.guild.id,
          deny: ['SEND_MESSAGES'],
          allow: ['VIEW_CHANNEL'],
        },
        {
          id: message.author.id,
          allow:['VEIW_CHANNEL','SEND_MESSAGES']
        

        

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
        ///  room.send(bot.pro(data.lang, "general",`share_message`))

 /// message.channel.send(new Discord.MessageEmbed().setDescription(`Your Server Shared to ${bot.guilds.cache.size} Guilds`))

  db.set(`coolshare_${message.guild.id}`, Date.now());



            db.set(`cool_${message.author.id}`, Date.now());
message.channel.send(`share your server`)
  }}
  
                
)
    


  
}}}