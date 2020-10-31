// Bot by DeSper optimisé pour peu de poid. 
// Hostable sur heroku

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity('$info', { type: 'PLAYING'});
});

// Set the client user's activity

  



client.on('message', msg => {
  if (msg.content === '$info') {
    msg.reply('Une publicité de votre serveur se lancera bientot. Notre étape de validation est de 24h, une fois cette attente écoulé le serveur sera partagé toute les 3H. ');
  }
});

client.login('NzcxOTAxOTU3NDI5MjY0NDA0.X5y3tw.zRnn_WbOBgXDQvhC_JSo5CrJWes');