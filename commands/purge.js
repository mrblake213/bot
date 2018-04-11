const Discord = require('discord.js');
exports.run = function(client, message, args) {
    let messagecount = parseInt(args.join(' '));
    let reason = args.slice(1).join(' ');
    let modlog = client.channels.find('name', 'mod-log');
    if (!modlog) return message.reply('I cannot find a mod-log channel');
    if (!messagecount) return message.reply('You must put the number of messages to purge.');
    if (!reason) return message.reply('You must have a reason to purge messages.');

    message.channel.fetchMessages({limit: messagecount + 1}).then(messages => message.channel.bulkDelete(messages));

    const embed = new Discord.RichEmbed()
    .setColor(0xffff00)
    .setTimestamp()
    .setDescription(`**Action:** Purge\n**Number of messages:** ${messagecount}\n**Moderator:** ${message.author.tag}\n**Reason:** ${reason}`);
    return client.channels.get(modlog.id).send(embed);
}