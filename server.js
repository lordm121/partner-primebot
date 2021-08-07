const Discord = require("discord.js");

///const Discord = require("discord.js");
const bot = new Discord.Client();
const db = require('quick.db')
//const { Color } = require("./config.js");
const fs = require("fs");
const request = require("request");
const prefix = "p!";
const { Collection, MessageEmbed } = require("discord.js");



////Vcode.js
const vCodes = require("vcodes.js");
const dbl = new vCodes("rhrDwFLoqi4ywyYBd1UuYi1hJqnTGmjBijO8wBPgK3YVhMpPzmtR5v1VOeBy3QVUSZVlpWdj8jFo5LsRFoZOQgft87c9ZPCICexrUHtoSo9PPXzQyn2MiEGOWOpInP27", bot);

bot.on("ready", () => {
  dbl.serverCount();
})
/////Top.ggg
const { AutoPoster } = require('topgg-autoposter')

const ap = AutoPoster('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjgzODU5MzI0MDMyODA0NDU1NCIsImJvdCI6dHJ1ZSwiaWF0IjoxNjI2OTA4Njc0fQ.3jziBUhG-5Fmtpd1xh3fVagR7jQSagoRojp0qazPR9M', bot)

ap.on('posted', () => {
  console.log('Posted stats to Top.gg!')
})
//////Top.ggg webhook

const Topgg = require("@top-gg/sdk")
const express = require("express")

const app = express()

const webhook = new Topgg.Webhook("hamalordup")

app.post("/dblwebhook", webhook.listener(vote => {
  // vote will be your vote object, e.g
  console.log(vote.user) // 395526710101278721 < user who voted\

  // You can also throw an error to the listener callback in order to resend the webhook after a few seconds
}))

app.listen(3000)



const { inspect } = require("util");
///let dev = ["738478465870987425","386188491953799178"];
const cmd = require("node-cmd");
const { I18n } = require("locale-parser");
bot.pro = new I18n({ defaultLocale: "en" });

global.logChannel = bot.channels.cache.get("835968578699264011")
global.mongoose = require('mongoose')
mongoose.connect("mongodb+srv://Partner:partner1234@cluster0.fwuix.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }).then(() => {
  console.log("Connected to the Mongodb database.");
}).catch((err) => {
  console.log("Unable to connect to the Mongodb database. Error:" + err);
});
global.Guild = require("./data/guild.js");

///global.User = require("./data/user.js");
global.Lang = require("./data/lang.js");
global.User = require("./data/user.js")
global.Prime = require("./data/prime.js");
global.Servers = require("./data/servers/server.js")
bot.commands = new Collection();
bot.aliases = new Collection();
bot.cooldowns = new Collection();
bot.catagories = fs.readdirSync("./commands/");
["command"].forEach(handler => {
  require(`./handler/${handler}`)(bot);
});

/**/
let util = require("util"),
  readdir = util.promisify(fs.readdir);

const init = async () => {
  // Then we load events, which will include our message and ready event.
  const evtFiles = await readdir("./events/");
  console.log(`Loading a total of ${evtFiles.length} events.`, "log");
  evtFiles.forEach(file => {
    const eventName = file.split(".")[0];
    console.log(`Loading Event: ${eventName}`);
    const event = new(require(`./events/${file}`))(bot);
    bot.on(eventName, (...args) => event.run(...args, bot));
    delete require.cache[require.resolve(`./events/${file}`)];
  });
};
init();

bot.on("ready", () => {
  console.log(`welcome`)
});

bot.on("ready",async (message) => {
    function randomStatus() {
        let status = [`${prefix}help | share your server with partner bot`, `${prefix}help | v1.4.8`,`invite me to growing your server`,`${prefix}help`]
        let rstatus = Math.floor(Math.random() * status.length);
        bot.user.setActivity(status[rstatus], {type: "PLAYING"});    
    }; setInterval(randomStatus, 3000)
})
bot.login("ODM4NTkzMjQwMzI4MDQ0NTU0.YI9W0A.HpsChenu4NRi-Jv2RxTmiHwK4Go");
