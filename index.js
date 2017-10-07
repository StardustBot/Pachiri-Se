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
						value: "musichelp\nwowaka\nnayutanseijin\ndaniwell\nkuruosa\npinnochio\nmateru\nmitchiem\n40mp\nhalysoy\nmothy\ncircus\ncrusher\njuby\nrachie"
					}
					]
				}
			});
	break;
	
	case "wowaka":
			message.channel.send({
				embed: {
					color: EMBCOLOR,
					author: {
						"name": "wowaka profile",
						"icon_url":"http://st.cdjapan.co.jp/pictures/l/08/46/DGLA-10002.jpg",
						"url": "http://www.nicovideo.jp/user/11912389"
					},
					fields: [
					{
						name: "Recent",
						value: "Unknown - Mother Goose\nhttp://www.nicovideo.jp/watch/sm31791630"
					},		
					{
						name: "All Music",
						value: "http://www.nicovideo.jp/mylist/12484677"
					},					
					{
						name: "Status",
						value: "Unactive"
					}
					]
				}
			});
	break;
	
	case "nayutanseijin":
		 	message.channel.send({
				embed: {
					color: EMBCOLOR,
					author: {
						"name": "Nayutan Seijin (NayutAlien) profile",
						"icon_url":"https://t00.deviantart.net/_gJ6XZ8myhLxCxRZdshp9jel5AE=/fit-in/700x350/filters:fixed_height(100,100):origin()/pre00/809b/th/pre/f/2017/074/7/3/alien_alien_by_kurohaai-db2edth.png",
						"url": "http://www.nicovideo.jp/user/49716308"
					},
					fields: [
					{
						name: "Recent",
						value: "Reverse Universe\nhttp://www.nicovideo.jp/watch/sm31843582"
					},		
					{
						name: "All Music",
						value: "http://www.nicovideo.jp/mylist/50857506"
					},					
					{
						name: "Status",
						value: "Active as of August 2017"
					}
					]
				}
			});
	break;
	
	case "mitchie":
		 	message.channel.send([
				embed: {
					color: EMBCOLOR,
					author: {
						"name": "MITCHIE M profile",
						"icon_url":"https://vignette.wikia.nocookie.net/vocaloid/images/8/89/MitchieM.jpg/revision/latest/scale-to-width-down/100?cb=20120613065723",						
						"url": "http://www.nicovideo.jp/user/22580750a"
					},
					fields: [
					{
						name: "Recent",
						value: "Ohedo Juliet Night\nhttp://www.nicovideo.jp/watch/sm31812792"
					},		
					{
						name: "All Music",
						value: "http://www.nicovideo.jp/mylist/26375614"
					},					
					{
						name: "Status",
						value: "Active as of September 2017"
					}
					]
				}
			});
	break;	
		
	case "40mp":
		 	message.channel.send([
				embed: {
					color: EMBCOLOR,
					author: {
						"name": "40MeterP profile",
						"icon_url":"https://vignette.wikia.nocookie.net/vocaloid/images/8/89/MitchieM.jpg/revision/latest/scale-to-width-down/100?cb=20120613065723",						
						"url": "http://www.nicovideo.jp/user/49716308"
					},
					fields: [
					{
						name: "Recent",
						value: "Ohedo Juliet Night\nhttp://www.nicovideo.jp/watch/sm31812792"
					},		
					{
						name: "All Music",
						value: "http://www.nicovideo.jp/mylist/26375614"
					},					
					{
						name: "Status",
						value: "Active as of September 2017"
					}
					]
				}
			});
	break;	
}
	

});

bot.login(process.env.BOT_TOKEN);
