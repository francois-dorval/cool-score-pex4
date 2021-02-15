exports.score = function (name) {


    if (name === "François"){
        return "25/20 -> LA CLASSE"
    }

    let score = exports.stringToIntHash(name);
    if (score < 5) {
        return score + "/20 -> désolé :-\ ";
    }
    if (score < 10) {
        return score + "/20 -> bof bof! ";
    }
    if (score < 15) {
        return score + "/20 pas mal... ";
    }
     return score + " wahou \\o/ ";

};

/**
 * convertit une chaine en entier entre 0 et 20
 * @param str
 * @returns {number}
 */
exports.stringToIntHash=function(str) {
    let result = 0;
    let upperbound = 20;



    for (let i = 0; i < str.length; i++) {
        result = result + str.charCodeAt(i);
    }

    return (result % (upperbound ));
}