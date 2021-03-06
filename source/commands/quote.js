var quote = {};

quote.eval = function(data, chatConnection, commands, config) {
	nick = data.arguments[0];
	userList = config.log[nick];
	if(userList === undefined) {
		chatConnection.sendMessage("That user has not chatted since bot initialized.");
		return;
	}
	chatConnection.sendMessage(userList[parseInt(Math.random() * userList.length)] + "\n			-$\\text " + nick + "$");
}
quote.help = "Usage: quote <username>\nReturns a random quote by <username>.";

module.exports = {quote: quote};