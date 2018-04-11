exports.run = function(client, message, args) {
    let pb2wiki = args.join("%20"); 
    message.reply("https://plazmaburst.miraheze.org/wiki/" + pb2wiki);
}