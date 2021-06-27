 
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
const { Color } = require("../../config.js");
const db = require("quick.db")

const pretty = require("pretty-ms");
let embed = new Discord.MessageEmbed()
module.exports = {
  name: "share",
  aliases: ["share"],
  description: "share your server .share ",
  usage: ["only .share or prefix+ share"],
  category: ["Admin"],
  enabled: true,            
  memberPermissions: [ "ADMINISTRATOR","MANAGE_GUILD","MANAGE_CHANNELS"],            
  botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS","CREATE_INVITE","MANAGE_CHANNELS"],        
  ownerOnly: false,            
  cooldown: 10000,
  run: async (bot, message, args, dev) => {
    const members = message.guild.members.cache;

		const channels = message.guild.channels.cache;
    let data = await Guild.findOne({ guildID: message.guild.id})

  const postChannel = db.has(`${message.guild.id}.serverPostChannel`); // الوقت بتاع نشر السيرفر فيه كام ثانية

    if (!postChannel) return embed.setColor('#FF0202').setDescription(`** set up share channel to share your server ! | ⚠️**`), message.channel.send(embed);

    if (!db.has(`${message.guild.id}.serverDescription`)) return embed.setColor('#FF0202').setDescription(`**Firs Setup Server Description Type: \`${db.get(`${message.guild.id}.serverPrefix`)}sd\` | ⚠️**`), message.channel.send(embed)

    const cooldown = 0////21600000///8.64e7; // اليوم بالثانية

    const filter = bot.channels.cache.get(db.get(`${message.guild.id}.serverPostChannel`));
    const postTime = db.get(`${message.guild.id}.serverPostTime`);
    
if (db.get(`${message.guild.id}.autoPost`) == false) {
        db.set(`${message.guild.id}.autoPost`, true)
        
        const name = db.get(`${message.guild.id}.serverName`);
            
        const chpost = bot.channels.cache.find(ch => ch.id == db.get(`${message.guild.id}.serverPostChannel`));
       /// share(bot, db, name, chpost);
        embed.setDescription(`** | لقد تم تفعيل النشر التلقائي.**`);
        message.channel.send(embed);
      } else if (db.get(`${message.guild.id}.autoPost`) == true) {
        embed.setDescription(`**$ | النشر التلقائي مفعل بالفعل.**`);
        message.channel.send(embed);
        return;
      }; 
    

    if (postChannel && !filter) return db.delete(`${message.guild.id}.serverPostChannel`), embed.setDescription(`**If You Delete Share channel Your server will be blacklist | ⚠️**`).setColor("#FF0202"), message.channel.send(embed);

    if (db.has(`${message.guild.id}.serverPostTime`) && postTime !== null && cooldown - (Date.now() - postTime) > 0) {
      const postServerTime = cooldown - (Date.now() - postTime); // حساب الثواني المتبقية
      embed.setDescription(`**:stopwatch: | ${message.author.username}, You must wating for \n\`${pretty(postServerTime, { verbose: true })}.\` to share again**`);
      message.channel.send(embed);
      return;
    } else {
      db.set(`${message.guild.id}.serverPostTime`, Date.now()); // كول داون نشر السيرفر
message.channel.send(new Discord.MessageEmbed().setColor(Color).setDescription(`Your Server Shared`))
      const emoji = [];
      message.guild.emojis.cache.some(emo => {
        if (emoji.length < 6) {
          emoji.push(emo);
        };
      });

      //data.fetchAll()
      data.channelID.forEach(res => {
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
              [Join Server](${db.get(`${message.guild.id}.serverInvite`) || invite.url})
              \n\n${db.get(`${message.guild.id}.serverDescription`) ? db.get(`${message.guild.id}.serverDescription`) : ''}\n\n
              
              

• Verification Level:  ${verificationLevels[message.guild.verificationLevel]}
•:earth_africa:Region:  ${regions[message.guild.region]}
•:busts_in_silhouette:Member Count:  ${message.guild.memberCount} | •:bust_in_silhouette:Humans:  ${members.filter(member => !member.user.bot).size} | •:robot:Bots:  ${members.filter(member => member.user.bot).size}
•:sparkles:Boost Count: ${message.guild.premiumSubscriptionCount || '0'}
•:speech_balloon:Text Channels: ${channels.filter(channel => channel.type === 'text').size}
•:loud_sound:Voice Channels: ${channels.filter(channel => channel.type === 'voice').size}`,

                             
              
             color: db.get(`${message.guild.id}.serverColor`), 
              author: {
                name: message.guild.name,
                icon_url: message.guild.iconURL(),
              },
              footer: {
                text: "Posted by " + message.author.username,
                icon_url: message.author.avatarURL(),
              },
              image: {
                
                url: data.Banner,
             
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
    message.reply(`Your server shared to ${message.guilds.cache.size}`)
   }}
///message.channel.send(`Your server Shared to ${message.guilds.cache.size}`)
    
  }}




