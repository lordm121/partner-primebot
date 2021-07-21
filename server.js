const Discord = require("discord.js");

///const Discord = require("discord.js");
const bot = new Discord.Client();
const db = require('quick.db')
//const { Color } = require("./config.js");
const fs = require("fs");
const request = require("request");
const prefix = "p!";
const { Collection, MessageEmbed } = require("discord.js");




const vCodes = require("vcodes.js");
const dbl = new vCodes("rhrDwFLoqi4ywyYBd1UuYi1hJqnTGmjBijO8wBPgK3YVhMpPzmtR5v1VOeBy3QVUSZVlpWdj8jFo5LsRFoZOQgft87c9ZPCICexrUHtoSo9PPXzQyn2MiEGOWOpInP27", bot);

bot.on("ready", () => {
  dbl.serverCount();
})



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
////global.Premuim = require("./data/premuim.js")
global.Prime = require("./data/prime.js");
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
let data = await Guild.findOne({guildID: message.guild.id})
    function randomStatus() {
        let status = [`${data.prefix}help | share your server with partner bot`, `${data.prefix}help | v1.4.8`,`invite me to growing your server`,`${data.prefix}help`]
        let rstatus = Math.floor(Math.random() * status.length);
        bot.user.setActivity(status[rstatus], {type: "PLAYING"});    
    }; setInterval(randomStatus, 3000)
})
bot.login("ODM4NTkzMjQwMzI4MDQ0NTU0.YI9W0A.KC9BlcYZQeSSk6QgQNAkFOz36No");
