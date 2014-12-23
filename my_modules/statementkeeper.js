var simCalc = require("./similaritycalculator");
var natural = require("natural");

var statements = [];
var tokenizer = new natural.WordTokenizer;//TreebankWordTokenizer();
var stopwords = natural.stopwords;

module.exports.insertStatement = function(statement) {
	//the index of the old statement that the new statement equals
	var i = find(statement);

	//terms created from the new statement
	var terms = createTerms(statement);

	//the statements does not already exist
	if(i == -1) {

		var newSimScore = 0;
		//retrieves a score for each old statement based on the similarity to the new statement
		for(var i = 0; i < statements.length; i++){
			var simScore = simCalc.calculate({statement: statements[i].statement, terms: statements[i].terms}, {statement:statement,terms: terms});
			if(simScore > 0) {
				statements[i].score += simScore;
				statements[i].lastUpdated = new Date();
				newSimScore += simScore;
			}
		}


		//pushes the new statement
		statements.push({
			statement: statement,
			terms: terms,
			score: 1+newSimScore,
			occurences: 1,
			dateCreated: new Date(),
			lastUpdated: new Date()
		});
	}
	//the statement already exist in exact same form
	else {
		statements[i].score++;
		statements[i].occurences++;
		statements[i].lastUpdated = new Date();
	}
};

module.exports.printStatements = function(){
	console.log(statements);
};

function find(statement){
	for (var i = 0; i < statements.length; i++) {
		if (statements[i].statement === statement)
			return i;
	}
	return -1;
}
function createTerms(statement){
	var tokens = tokenizer.tokenize(statement);
	//console.log(statement);

	var terms = [];
	for(var i = 0; i < tokens.length; i++){
		if(stopwords.indexOf(tokens[i]) == -1)
			terms.push(natural.PorterStemmer.stem(tokens[i]));
	}
	//console.log(terms);
	return terms;
}