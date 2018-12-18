const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("524678638759837719")
setInterval(function() {
channel.send(`motamarid motamarid motamarid motamaridvmotamarid motamarid motamarid motamaridmotamarid motamarid motamarid motamaridmotamarid motamarid motamarid motamaridmotamarid motamarid motamarid motamaridmotamarid motamarid motamarid motamaridmotamarid motamarid motamarid motamaridmotamarid motamarid motamarid motamarid`);
}, 30)
})

client.login(process.env.BOT_TOKEN);