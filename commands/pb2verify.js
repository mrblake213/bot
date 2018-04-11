const Discord = require('discord.js');
exports.run = function(client, message, args) {

    const embed = new Discord.RichEmbed()
    .setColor(0xffffff)
    .setTimestamp()
    .setThumbnail('https://vignette.wikia.nocookie.net/plazmabursttwo/images/6/6c/Plazma_Burst_2_Wallpaper.jpg/revision/latest?cb=20120605174642')
    .setTitle('Siegmeyer of Catarina#9720\'s PB2 Verify Command')
    .setDescription("**Verification Steps:**\n \n**1.** Go to your PlazmaBurst 2 Edit Profile.\n**2.** Inside the **Discord username:** field. Write your Discord username and your discrim. Example: `mrblake213#8851`. To know what your Discord tag is, Go to Discord and look at the bottom left next to your avatar.\n**3.** After editing your Discord username in your PB2 Profile, scroll down and `Update Profile`\n**4.** In the PB2 Official Discord Server, inside `#chatroom-pb2api` channel type `!pb2verify [login name]`\n \nIf you've correctly done everything in this list, you should be verified now. Congratulations!")
    .setFooter('Message sent with delightment from Siegmeyer of Catarina#9720')
    message.channel.send(embed)
};