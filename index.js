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
						"name": "Nano Commands",
						"url": "https://github.com/heyimnox/nano-bot",
						"icon_url": "http://i0.kym-cdn.com/profiles/icons/big/000/041/786/steame.jpg"
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
						value: "musichelp\nwowaka\nnayusenjin\ndaniwell\nkuruosa\npinnochio\nmateru\nmitchie\n40mp\nhalysoy\nmothy\ncircus\ncrusher\njuby\nrachie"
					}
					]
				}
			});
	break;
	
}

});

bot.login("MzY1NjU5Mzk2MjQ1NTUzMTU0.DLhrVg.w_3WhfgLCFbWYaTqlWAqa3Lzn8c");
//bot.login(process.env.BOT_TOKEN);