const Discord = require("discord.js");
const client = new Discord.Client();
const config = require('./config.json')
require('./util/eventLoader')(client);

//reload command from reload.js
var reload = (message, cmd) => {
    delete require.cache[require.resolve('./commands/' + cmd)];
    try {
        let cmdFile = require('./commands/' + cmd);
    } catch (err) {
        message.channel.send(`Problem loading ${cmd}: ${err}`).then(
            response => response.delete(1000).catch(error => console.log(error.stack))
        ).catch(error => console.log(error.stack));
    }
    message.channel.send(`${cmd} reload was a success!`).then(
        response => response.delete(1000).catch(error => console.log(error.stack))
    ).catch(error => console.log(error.stack));
};
exports.reload = reload;

client.login(config.token);