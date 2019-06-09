// Host
const http = require("http");
const express = require("express");
const app = express();
app.get("/", (request, response) => {
  console.log(`${new Date()} Scula Ai {} Ping Received.`);
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

// Calling the Packages and Files
const Discord = require("discord.js");
const botconfig = require("./botconfig.json");
const fs = require("fs");
let bot = new Discord.Client();
bot.commands = new Discord.Collection();
const DBL = require("dblapi.js");
const dbl = new DBL(token, bot);

// Ready event
bot.on('ready', () => {
  console.log("Se incarca......");
  setTimeout(function(){
  console.log("Botul s-a incarcat complet...");
  }, 1000);

// Bot Status
function botStatus() {
  let status = [
    `BOT PREFIX = ${botconfig.prefix}.`,
    `Up VOTE aici Pls https://bit.ly/2Z0k73S.`,
    `facut de Giuli ★𝐆𝐢𝐮𝐥𝐢★#3387.`,
    `${bot.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString()} membri inregistrati.`
  ];
  let rstatus = Math.floor(Math.random() * status.length);
  bot.user.setActivity(status[rstatus], {Type: 'STREAMING'}),'https://twich.tv/RotGrodBOT';        
}; setInterval(botStatus, 2000)
  setInterval(() => {
    dbl.postStats(bot.guilds.size)
  }, 18000);
});

// Message event
bot.on("message", async message => {
  let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
  if(!prefixes[message.guild.id]){
    prefixes[message.guild.id] = {
      prefixes: botconfig.prefix
    };
  };
	
  let prefix = prefixes[message.guild.id].prefixes;
	if(message.author.bot) return undefined;
	if(message.channel.type === 'dm') return;
    
// Bot Mention Embed
  if(message.content.toLowerCase() === '<584056883061719060>'){
    let embed = new Discord.RichEmbed()
    .setTitle("Giuli BOT")
    .addField("Prefix", `\`${prefix}\``, true)
    .addField("Help", `\`${prefix}help\``, true)
    .setThumbnail(bot.user.displayAvatarURL)
    .setColor(`${message.guild.me.displayHexColor!=='#000000' ? message.guild.me.displayHexColor : 0xffffff}`);
    message.channel.send(embed);
  };

	let args = message.content.slice(prefix.length).trim().split(" ");
	let cmd = args.shift().toLowerCase();
	if(message.author.bot) return undefined;
	if(!message.content.startsWith(prefix)) return undefined;
  message.prefix = prefix;
  
	try {
	let commandFile = require(`./commands/${cmd}.js`);
	commandFile.run(bot, message, args);
    
	if(!commandFile) return message.channel.send("Giuli BOT Eroare: Nici o comanda gasita cu acel nume.");
  
  console.log(`[${message.author.tag}]: Comanda: "${cmd}" [${message.guild.name}]`);
	} catch (err) {
    console.log(`Giuli BOT Eroare: Am gasit o eroare in timp ce imi incarcam comenzile!\n${err.stack}`);
  };   
});

bot.on("message", function (message) {
  var boolean = true;
  if (!!!!Boolean(boolean) !== false && Boolean(boolean) === true) {
    {
      {
        {
          {
            {
              {
                {
                  {
                    {
                      {
                        if (!!!!Boolean(message.content.includes("discord.gg")) === true && Boolean(message.content.includes("discord.gg")) !== false) {
                          message.delete();
                          message.reply("Fara invite-uri!! Daca mai trimiti o data vei primi ban.")
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
});

bot.on('guildMemberAdd', guildMember =>{
  db.fetchObject(`autoRole_${guildMember.guild.id}`).then(i => {


    if (!i.text || i.text.toLowerCase() === 'none') return message.reply('Rolul nu a fost gasit!');
    else{

     
      try{
        guildMember.addRole(guildMember.guild.roles.find('name', i.text))
      } catch (e) {
        console.log('RotGrod: Am incercat sa dau rol intr-un guild rolul este invalid')
      }
    }
  })
})




client.login(process.env.BOT_TOKEN);