 
const fs = require("fs");
const verificationLevels = {

	NONE: 'None',

	LOW: 'Low',

	MEDIUM: 'Medium',

	HIGH: '(╯°□°）╯︵ ┻━┻',

	VERY_HIGH: '┻━┻ ﾐヽ(ಠ益ಠ)ノ彡┻━┻'

};
const regions = {

	brazil: 'Brazil',

	europe: 'Europe',

	hongkong: 'Hong Kong',

	india: 'India',

	japan: 'Japan',

	russia: 'Russia',

	singapore: 'Singapore',

	southafrica: 'South Africa',

	sydeny: 'Sydeny',

	'us-central': 'US Central',

	'us-east': 'US East',

	'us-west': 'US West',

	'us-south': 'US South'

};
const Discord = require("discord.js");
///const { Color } = require("../../config.js");
const db = require("quick.db")
const pretty = require("pretty-ms");
let embed = new Discord.MessageEmbed()
module.exports = {
  name: "post",
  aliases: ["prepost"],
  description: "Change the prefix of the bot",
  usage: ["s!prefix [Prefix]"],
  category: ["Moderation"],
  enabled: true,            
  memberPermissions: [ "ADMINISTRATOR","MANAGE_GUILD","MANAGE_CHANNELS"],            
  botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS","CREATE_INVITE","MANAGE_CHANNELS"],        
  ownerOnly: false,            
  cooldown: 10000,
  run: async (bot, message, args, dev, data) => {
  if (db.get(`${message.guild.id}.serverPlan`) == 'Free') return embed.setDescription(`**This server \`${db.get(`${message.guild.name}.serverName`)}\` subscription \`Premium\` version ⚠️**`), message.channel.send(embed)
     
///if (!message.guild.member(bot.user).hasPermission("ADMINISTRATOR")) return embed.setColor('#FF0202').setDescription(`**برجاء عدم العبث في صلاحيات البوت لكي تتجنب حظر السيرفر! | ⚠️**`), message.channel.send(embed);

   /// if (!message.guild.member(message.author).hasPermission('ADMINISTRATOR')) return embed.setColor('#FF0202').setDescription(`**لا تمتلك صلاحية \`ADMINISTRATOR\` | 🤔**`), message.channel.send(embed)

    const postChannel = db.has(`${message.guild.id}.serverPostChannel`); // الوقت بتاع نشر السيرفر فيه كام ثانية

    if (!postChannel) return embed.setColor('#FF0202').setDescription(`**برجاء قم بعمل روم خاصة للنشر! | ⚠️**`), message.channel.send(embed);

    if (!db.has(`${message.guild.id}.serverDescription`)) return embed.setColor('#FF0202').setDescription(`**Firs Setup Server Description Type: \`${db.get(`${message.guild.id}.serverPrefix`)}sd\` | ⚠️**`), message.channel.send(embed)

    const cooldown = 0//21600000///8.64e7; // اليوم بالثانية

    const filter = bot.channels.cache.get(db.get(`${message.guild.id}.serverPostChannel`));
    const postTime = db.get(`${message.guild.id}.serverPostTime`);


    if (postChannel && !filter) return db.delete(`${message.guild.id}.serverPostChannel`), embed.setDescription(`**If You Delete Share channel Your server will be blacklist | ⚠️**`).setColor("#FF0202"), message.channel.send(embed);

    if (db.has(`${message.guild.id}.serverPostTime`) && postTime !== null && cooldown - (Date.now() - postTime) > 0) {
      const postServerTime = cooldown - (Date.now() - postTime); // حساب الثواني المتبقية
      embed.setDescription(`**:stopwatch: | ${message.author.username}, You must wating for \n\`${pretty(postServerTime, { verbose: true })}.\` to share again**`);
      message.channel.send(embed);
      return;
    } else {
      db.set(`${message.guild.id}.serverPostTime`, Date.now()); // كول داون نشر السيرفر

      const emoji = [];
      message.guild.emojis.cache.some(emo => {
        if (emoji.length < 6) {
          emoji.push(emo);
        };
      });

      db.fetchAll().forEach(res => {
        const channelsPost = bot.channels.cache.find(ch => ch.id == db.get(`${res.ID}.serverPostChannel`));
        if (channelsPost) {
          const chann = bot.channels.cache.find(ch => ch.id == db.get(`${message.guild.id}.serverPostChannel`));
          chann.createInvite({
            temporary: true,
            max_uses: 1000,
            max_age: 86400000
          }).then(invite => {

            const messagePosts = {
        
              description: `
              link: **Server Invite**\n**[Join Server](${db.get(`${message.guild.id}.serverInvite`) || invite.url})**\n
              \n\n${db.get(`${message.guild.id}.serverDescription`) ? db.get(`${message.guild.id}.serverDescription`) : ''}\n\n
              \n\nVerification Level**\n**${verificationLevels[message.guild.verificationLevel]}**\n
              \n\nRegion**\n**${regions[message.guild.region]}**\n
              \n:grinning: **Emotes** \`${message.guild.emojis.cache.size}\`
              \n${emoji.join(' ')}`,
             color: '',
              author: {
                name: message.guild.name,
                icon_url: message.guild.iconURL(),
              },
              footer: {
                text: "Posted by " + message.author.username,
                icon_url: message.author.avatarURL(),
              },
              image: {
                url: db.get(`${message.guild.id}.serverBanner`),
              },
              thumbnail: {
                url: message.guild.iconURL({ dynamic: true }),
              },
              timestamp: new Date(),
            };
            
///channelsPost.send(db.get(`${message.guild.id}.serverInvite`) || invite.url)
            if (channelsPost && messagePosts) {
              hook(messagePosts, channelsPost, bot);
            };
          }).catch(err => console.log(err));
        } else {
          console.log(`Not found channel in server ${db.get(`${res.ID}.serverName`)}`);
        };
      });
    };
  },
};

function hook(messagePost, channelsPost, bot,message) {
  try {
    channelsPost.send({embed: messagePost});
    channelsPost.createOverwrite(channelsPost.guild.id, {
      SEND_MESSAGES: false,
      READ_MESSAGES: true,
      VIEW_CHANNEL: true     

    });
  } catch { 
    console.log(`ERR POST IN SERVER ${channelsPost.guild.name} | ID: ${channelsPost.guild.id}`);
   }}




