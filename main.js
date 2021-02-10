// Bot by DeSper optimisé 
// Hostable sur heroku

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity('$info', { type: 'PLAYING'});
});

// Commande fake pour que la personne pense que le bot lui est utile

client.on('message', msg => {
  if (msg.content === '$info') {
    msg.reply('Une publicité de votre serveur se lancera bientot. Notre étape de validation est de 24h, une fois cette attente écoulé le serveur sera partagé toute les 3H. ');
  }
});

// Utiliser un tool, entrée le token du bot et spam mp

client.login('METTRE LE TOKEN ICI');
