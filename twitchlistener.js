var irc = require("irc");
var config = require("./config");
var statements = require("./my_modules/statementkeeper");


/*statements.insertStatement("test1");
statements.insertStatement("test2");
statements.insertStatement("test3");
statements.insertStatement("test2");
statements.insertStatement("test3");
statements.insertStatement("test3");

statements.printStatements();*/


var bot = new irc.Client(config.server, config.botname, {
	channels: config.channels,
	port: config.port,
	password: config.pass
});

bot.addListener('message', function(from, to, message){
    //console.log(from + ' => ' + to + ': ' + message);
    statements.insertStatement(message);
});

bot.addListener('error', function(message) {
    console.log('error: ', message);
});

