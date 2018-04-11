const Discord = require('discord.js');
exports.run = function(client, message, args) {
    let mention = message.mentions.users.size
    let reason = args.slice(1).join(' ');
    let user = message.mentions.users.first();
    let modlog = client.channels.find('name', 'mod-log');
    if (!modlog) return message.reply('I cannot find a mod-log channel');
    let guild = message.guild.name
    if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply('You must have permission to kick.')
    if (!mention) return message.reply('You must mention a user to kick them.');
    if (reason.length < 1) return message.reply('You must have a reason to kick them.');
    if (!message.guild.member(client.user).hasPermission('KICK_MEMBERS')) return message.reply('I do not have the kick permissions.');

    if (!message.guild.member(user).kickable) return message.reply('I cannot kick that member');
    message.guild.member(user).kick(`${reason}`);
    user.send(`You have been kicked in **${guild}** for **${reason}**`);

    const embed = new Discord.RichEmbed()
    .setColor(0xffa500)
    .setTimestamp()
    .setDescription(`**Action:** Kick\n**User:** ${user.tag}\n**Moderator:** ${message.author.tag}\n**Reason:** ${reason}`);
    return client.channels.get(modlog.id).send(embed);
};