var irc = require("irc");
var config = require("./config");

var bot = new irc.Client(config.server, config.botname, {
	channels: config.channels,
	port: config.port,
	password: config.pass
});

console.log(config.server);

bot.addListener('message', function(from, to, message){
    console.log(from + ' => ' + to + ': ' + message);

});

bot.addListener('error', function(message) {
    console.log('error: ', message);
});
