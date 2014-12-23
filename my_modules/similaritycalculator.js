/**
 * Created by espen on 23/12/14.
 */

module.exports.calculate = function(oldStatement, newStatement){
    var score = 0;

    score += checkCase(oldStatement.statement,newStatement.statement);
    score += checkTerms(oldStatement.terms, newStatement.terms);
    score += checkHamming(oldStatement.terms, newStatement.terms);

}
function checkCase(oldStatement, newStatement){

}
function checkTerms(oldTerms, newTerms){

}
function checkHamming(oldTerms, newTerms){

}
