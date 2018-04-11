exports.run = function(client, message, args) {
    let wikipedia = args.join("%20"); 
    message.reply("https://en.wikipedia.org/wiki/" + wikipedia);
}