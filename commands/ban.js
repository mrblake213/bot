const Discord = require('discord.js');
exports.run = function(client, message, args) {
    let mention = message.mentions.users.size
    let reason = args.slice(1).join(' ');
    let user = message.mentions.users.first();
    let modlog = client.channels.find('name', 'mod-log');
    if (!modlog) return message.reply('I cannot find a mod-log channel');
    let guild = message.guild.name
    if (!message.member.hasPermission("BAN_MEMBERS")) return message.reply('You must have permission to ban.')
    if (!mention) return message.reply('You must mention a user to ban them.');
    if (reason.length < 1) return message.reply('You must have a reason to ban them.');
    if (!message.guild.member(client.user).hasPermission('BAN_MEMBERS')) return message.reply('I do not have the ban permissions.');

    if (!message.guild.member(user).bannable) return message.reply('I cannot ban that member');
    message.guild.ban(user, `${reason}`);
    user.send(`You have been banned in **${guild}** for **${reason}**`);

    const embed = new Discord.RichEmbed()
    .setColor(0xff0000)
    .setTimestamp()
    .setDescription(`**Action:** Ban\n**User:** ${user.tag}\n**Moderator:** ${message.author.tag}\n**Reason:** ${reason}`);
    return client.channels.get(modlog.id).send(embed);
};