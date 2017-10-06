const Discord = require("discord.js");
const bot = new Discord.Client();

const PREFIX = "-star "
const HELP = "-star help"
const EMBCOLOR = 0x000000

bot.on("ready", function() {
    console.log("Ready.");
    bot.user.setGame(HELP)
});

bot.on("message", async message => {
    
if (message.author.equals(bot.user)) return;
if (!message.content.startsWith(PREFIX)) return;
var args = message.content.substring(PREFIX.length).split(" ");

switch (args[0].toLowerCase()) {
    case "ping":
        message.channel.send("Pong!");
    break;
}

}

bot.login(process.env.BOT_TOKEN);
