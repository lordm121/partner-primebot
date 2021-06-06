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
  cooldown: 160000000,
  run: async (bot, message, args) => {
    
    

            var invite = await message.channel.createInvite();

  bot.guilds.cache.forEach(c =>{
    
    let rooms = db.get(`shareroom_${c.id}`);

if(!rooms){

 c.channels

            .create("Partners", {

              //optional

              type: "text" //optional

            }).then(r=>{

      r.createOverwrite(message.guild.id,{

        SEND_MESSAGES: false

    })

          db.set(`shareroom_${c.id}`, r.id);

          rooms = r.id;

                      let room = c.channels.cache.get(rooms);

            room.send(`**Server Name : ${message.guild.name}** \n **Server Description : ${"Pls Join To Our Server"}**\n **MemberCount : ${message.guild.memberCount}** \n **Invite : ${invite} ** `);

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

room.send(`**Server Name : ${message.guild.name}** \n **Server Description : ${"Pls Join To Our Server"}**\n **MemberCount : ${message.guild.memberCount}** \n **Invite : ${invite} ** `);

}

  })

  message.channel.send(`**you server shared to${bot.guilds.cache.size}guilds**`);

  db.set(`coolshare_${message.guild.id}`, Date.now());



            dba.set(`cool_${message.author.id}`, Date.now());

  }} 


    


  
