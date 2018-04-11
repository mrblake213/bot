const Discord = require('discord.js');
exports.run = function(client, message, args) {
    let mention = message.mentions.users.size
    let reason = args.slice(1).join(' ');
    let user = message.mentions.users.first();
    let guild = message.guild.name
    let modlog = client.channels.find('name', 'mod-log');
    if (!modlog) return message.reply('I cannot find a mod-log channel');
    if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply('You must have permission to warn.')
    if (!mention) return message.reply('You must mention a user to warn them.');
    if (reason.length < 1) return message.reply('You must have a reason to warn them.');
    user.send(`You have been warned in **${guild}** for **${reason}**`);
    const embed = new Discord.RichEmbed()
        .setColor(0x00AE86)
        .setTimestamp()
        .setDescription(`**Action:** Warn\n**User:** ${user.tag}\n**Moderator:** ${message.author.tag}\n**Reason:** ${reason}`);
        return client.channels.get(modlog.id).send(embed);
};