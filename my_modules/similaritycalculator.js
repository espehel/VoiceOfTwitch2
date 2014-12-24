/**
 * Created by espen on 23/12/14.
 */

module.exports.calculate = function(oldStatement, newStatement){
    var score = 0;

    if(checkCase(oldStatement.statement,newStatement.statement))
        return  0.8;
    if(checkTerms(oldStatement.terms, newStatement.terms))
        return 0.5;
    score += checkHamming(oldStatement.terms, newStatement.terms);

    return score;

}
function checkCase(oldStatement, newStatement){

    return oldStatement.toLowerCase() == newStatement.toLowerCase();// ? 0.5 : 0;

}
function checkTerms(oldTerms, newTerms){

    if(newTerms.length != oldTerms.length)
        return false;//0;

    for (var i = 0; i < oldTerms.length; i++) {
        if(oldTerms[i] != newTerms[i])
            return false;//0;
    }
    return true;//0.2;

}
function checkHamming(oldTerms, newTerms){
    var score = 0;
    if (oldTerms.length == newTerms.length)
        for (var i = 0; i < oldTerms.length; i++) {
        var lenght = oldTerms[i].Length();
        var upperLimit;
        if (lenght < 2)
            continue;
        else if (lenght == 2)
            upperLimit = 1;
        else
            upperLimit = 2;

        if (checkHammingDistance(oldTerms[i], newTerms[i], upperLimit))
            score += 0.01;
        else
            return 0;
    }

    return score;
}
function checkHammingDistance(source, target, upperLimit) {
    var distance = 0;

    if (source.length() == target.length()) {
        for (var i = 0; i < source.Length; i++) {
            if (source.charAt(i) != target.charAt(i)) {
                distance++;
            }
        }
        return distance <= upperLimit;
    }
    return false;
}
