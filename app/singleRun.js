let calculator = require("./calculator");
let argv = require('minimist')(process.argv.slice(2));
//console.log(argv);

let nameParam = argv["name"];
if (!nameParam){
    console.log("Missing parameter --name");
    process.exit(1)
}

let score = calculator.score(nameParam);
console.log(nameParam+":"+score);
