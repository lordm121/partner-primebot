const fs = require("fs");
const Discord = require("discord.js")
const { Color } = require("../../config.js");
const db = require("quick.db")
let embed = new Discord.MessageEmbed()
module.exports = {
  name: "autoshare",
  aliases: ["as"],
  description: "Use this command to get the invite link",
  usage: [".invite"],
  category: ["General"],
  enabled: true,
  memberPermissions: ["SEND_MESSAGES"],
  botPermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
  ownerOnly: false,
  cooldown: 2000,
  run: async (bot, message, args, dev, data,client,deleteMessage,serverID) => {
const pretty = require("pretty-ms");

    
    const cooldown = 8.64e7; // ال6 ساعات بالثانية

    const postServer = db.get(`${serverID}.serverPostChannel`); // الوقت بتاع نشر السيرفر فيه كام ثانية

    const postTime = db.get(`${message.guild.id}.serverPostTime`);

    const postServerTime = cooldown - (Date.now() - postTime); // حساب الثواني المتبقية

 //   if (!message.guild.member(client.user).hasPermission("ADMINISTRATOR")) return embed.setDescription(`**برجاء عدم العبث في صلاحيات البوت لكي تتجنب حظر السيرفر! ⚠️**`), message.channel.send(embed);

    if (!message.guild.member(message.author).hasPermission('ADMINISTRATOR')) return embed.setDescription(`**لا تمتلك صلاحية \`ADMINISTRATOR\` :no_mouth:**`), message.channel.send(embed).then(deleteMessage);

    if (!postServer && postServer === null) return embed.setDescription(`**برجاء قم بعمل روم خاصة للنشر! ⚠️**`), message.channel.send(embed);

    if (!postServer && postServer != null) return postServer = 0, embed.setDescription(`**إذا قمت بحذف الروم مرة اخري سوف يتم حظر السيرفر! ⚠️**`), message.channel.send(embed);

    if (db.get(`${message.guild.id}.serverPlan`) == 'Free') return embed.setDescription(`**ان سيرفر \`${db.get(`${message.guild.id}.serverName`)}\`  ليس مشترك في الـ \`Premium\` ⚠️**`), message.channel.send(embed).then(deleteMessage);

    if (postTime !== null && cooldown - (Date.now() - postTime) > 0) {
      embed.setDescription(`**:stopwatch: | ${message.author.username}, الوقت المتبقي لإعادة نشر السيرفر\n\`${pretty(postServerTime, { verbose: true })}.\`**`);
      message.channel.send(embed);
      return;
    } else {


      if (db.get(`${serverID}.autoPost`) == false) {
        db.set(`${serverID}.autoPost`, true)
        
        const name = db.get(`${serverID}.serverName`);
            
        const chpost = client.channels.cache.find(ch => ch.id == db.get(`${message.guild.id}.serverPostChannel`));

        share(client, db, name, chpost);
        embed.setDescription(`**| لقد تم تفعيل النشر التلقائي.**`);
        message.channel.send(embed);
      } else if (db.get(`${serverID}.autoPost`) == true) {
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
            
            const chpost = client.channels.cache.find(ch => ch.id == db.get(`${res.ID}.serverPostChannel`));

            share(client, db, name, chpost);

          };
        });
      }, 60000 * 15);

    };
    


  },
};


const share = (client, db, name, chpost) => {
  db.fetchAll().forEach(res => {
      const channelsPost = client.channels.cache.find(ch => ch.id == db.get(`${res.ID}.serverPostChannel`));
      if (channelsPost) {
        chpost.createInvite({
          temporary: true,
          max_uses: 0,
          max_age: 0
        }).then(invite => {
          const messagePosts = `**${name}**\n**Plan: Premium**\n**:mailbox_with_no_mail: :** ${invite.url}`;
          if (channelsPost && messagePosts) {
            hook(messagePosts, channelsPost, client);
          };
        }).catch(err => console.log(err));
      } else {
        console.log(`Not found channel in server ${db.get(`${res.ID}.serverName`)}`);
      };
  });
};

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
};
