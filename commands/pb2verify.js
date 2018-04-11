const Discord = require('discord.js');
exports.run = function(client, message, args) {
    var colors = ["0x67037b","0xff2492","0x1e90ff","0xc71585","0x7fff00","0xdc143c","0x48d1cc","0x9932cc"]
    const embed = new Discord.RichEmbed()
    .setColor(colors[Math.floor(Math.random() * colors.length)])
    .setThumbnail(message.guild.iconURL)
    .setTitle(`${client.user.tag}\'s PB2 Verify Command`)
    .setDescription(`**Verification Steps:**\n \n**1.** Go to your PlazmaBurst 2 Edit Profile.\n**2.** Inside the Discord username: field. Write your Discord username and your discrim. Your Discord tag is ${message.author.tag}. To otherwise know what your Discord tag is, Go to Discord and look at the bottom left next to your avatar.\n**3.** After editing your Discord username in your PB2 Profile, scroll down and Update Profile\n**4.** In the PB2 Official Discord Server, inside #chatroom-pb2api channel type !pb2verify [login name]\n \nIf you've correctly done everything in this list, you should be verified now. Congratulations!`)
    .addField("Video Tutorial", "https://youtu.be/M8bQ6aYq1rk")
    .setFooter(`Message sent with delightment from ${client.user.tag}`)
    message.channel.send(embed)
};