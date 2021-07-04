const Discord = require('discord.js')
///const { Color } = require("../../config.js");
let embed = new Discord.MessageEmbed();
const db = require("quick.db")
const pretty = require("pretty-ms")
module.exports = {
    name: "auto",
    aliases: ["color"],
    description: "You can ban a member, or multiple members using this command",
    usage: ["s!ban [@User]"],
    category: ["Moderation"],
    enabled: true,
    memberPermissions: ["BAN_MEMBERS"],
    botPermissions: ["SEND_MESSAGES", "EMBED_LINKS", "BAN_MEMBERS"],
    ownerOnly: false,
    cooldown: 6000,
    run: async (bot, message, args, dev,client) => {

    const cooldown = 0// 8.64e7; // ال6 ساعات بالثانية
    const postServer = db.get(`${message.guild.id}.serverPostChannel`); // الوقت بتاع نشر السيرفر فيه كام ثانية
    const postTime = db.get(`${message.guild.id}.serverPostTime`);
    const postServerTime = cooldown - (Date.now() - postTime); // حساب الثواني المتبقية
    
    if (!postServer && postServer === null) return embed.setDescription(`**برجاء قم بعمل روم خاصة للنشر! ⚠️**`), message.channel.send(embed);
    if (!postServer && postServer != null) return postServer = 0, embed.setDescription(`**إذا قمت بحذف الروم مرة اخري سوف يتم حظر السيرفر! ⚠️**`), message.channel.send(embed);
    if (db.get(`${message.guild.id}.serverPlan`) == 'Free') return embed.setDescription(`**ان سيرفر \`${db.get(`${message.guild.id}.serverName`)}\`  ليس مشترك في الـ \`Premium\` ⚠️**`), message.channel.send(embed)
    if (postTime !== null && cooldown - (Date.now() - postTime) > 0) {
      embed.setDescription(`**:stopwatch: | ${message.author.username}, الوقت المتبقي لإعادة نشر السيرفر\n\`${pretty(postServerTime, { verbose: true })}.\`**`);
      message.channel.send(embed);
      return;
    } else {
      if (db.get(`${message.guild.id}.autoPost`) == true) {
        db.set(`${message.guild.id}.autoPost`, true)
        
        const name = db.get(`${message.guild.id}.serverName`);
            
       const chpost = db.get(`${message.guild.id}.serverPostChannel`)////bot.channels.cache.find(ch => ch.id == db.get(`${message.guild.id}.serverPostChannel`));
       //share(bot, db, name, chpost);
        embed.setDescription(`** | لقد تم تفعيل النشر التلقائي.**`);
        message.channel.send(embed);
      } else 
        if (db.get(`${message.guild.id}.autoPost`) == true) {
        embed.setDescription(`** | النشر التلقائي مفعل بالفعل.**`);
        message.channel.send(embed);
        return;
      }; 
      
      // نشر تلقائي
      setInterval(() => {
        db.fetchAll().forEach(res => {
          if (db.get(`${res.ID}.serverPostTime`) == null &&
          cooldown - (Date.now() - db.get(`${res.ID}.serverPostTime`)) <= 0 &&
          db.get(`${res.ID}.serverPlan`) == 'Premium' && db.get(`${res.ID}.autoPost`) == true) {
            
            db.set(`${res.ID}.serverPostTime`, Date.now()); // كول داون نشر السيرفر
            
            let name = db.get(`${res.ID}.serverName`);
            
           const chpost = db.get(`${res.ID}.serverPost.Channel`)//bot.channels.cache.find(ch => ch.id == db.get(`${res.ID}.serverPostChannel`));
           ///share(bot, db, name, chpost);
          };
        });
      }, 0);
    };
    


  



//onst share = (bot, db, name, chpost) => {
  db.fetchAll().forEach(res => {
      const channelsPost = bot.channels.cache.find(ch => ch.id == db.get(`${res.ID}.serverPostChannel`));
      if (channelsPost) {
        chpost.createInvite({
          temporary: true,
          max_uses: 0,
          max_age: 0
        }).then(invite => {
          const messagePosts = `**${name}**\n**Plan: Premium**\n**:mailbox_with_no_mail: :** ${invite.url}`;
          if (channelsPost && messagePosts) {
            hook(messagePosts, channelsPost, bot);
          };
        }).catch(err => console.log(err));
      } else {
        console.log(`Not found channel in server ${db.get(`${res.ID}.serverName`)}`);
      };
  });

function hook(messagePost, channelsPost, client) {
  channelsPost.fetchWebhooks().then(webhook => {
    const foundhook = webhook.find(we => we.name === client.user.username);
    try {
      foundhook.send(messagePost, {
        'username': client.user.username,
        'avatar': client.user.avatarURL()
      });
      channelsPost.createOverwrite(channelsPost.guild.id, {
        SEND_MESSAGES: false,
        READ_MESSAGES: true,
        EMBED_LINKS: true
      });
    } catch {
      channelsPost.createWebhook(`${client.user.username}`, { avatar: client.user.avatarURL() })
        .then(weebhook => {
          weebhook.send(messagePost, {
            'username': client.user.username,
            'avatar': client.user.avatarURL()
          });
          channelsPost.createOverwrite(channelsPost.guild.id, {
            SEND_MESSAGES: false,
            READ_MESSAGES: true,
            EMBED_LINKS: true
          });
        });
    };
  });

    }}}