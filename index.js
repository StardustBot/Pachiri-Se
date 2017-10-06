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
case "help":
            message.channel.send({
                embed: {
                    color: EMBCOLOR,
                    author: {
                        "name": "Star Fragments",
                        "url": "https://github.com/StardustBot/Stardust",
                        "icon_url": "https://i.pinimg.com/736x/2f/6b/a6/2f6ba6c37cd47061ffb209797e50bc7a--anime-kawaii-anime-chibi.jpg"
                    },
                    fields: [
                    {
                        name: "Main",
                        value: "help\ninfo\nping"
                    },        
                    {
                        name: "Roleplay",
                        value: "bite\nhug\npat\nshrug\nthumbsup\nwag\nweapon"
                    
                    },                    
                    {
                        name: "Music",
                        value: "musichelp\nwowaka\nnayusenjin\ndaniwell\nkuruosa\npinnochio\nmateru\nmitchie\n40mp\nhalysoy\nmothy\ncircus\ncrusher\njubyphonic\nrachie"
                    }
                    ]
                }
            });
            break;

});

bot.login(process.env.BOT_TOKEN);

