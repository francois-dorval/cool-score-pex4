let expect    = require("chai").expect;
let calculator = require("../app/calculator");


describe("Score calculation examples", function() {
    describe("Coolitude score of d", function () {
        it("d should return 0", function () {
            let result = calculator.stringToIntHash("d");
            expect(result).to.equal(0);
        });
    });
    describe("Coolitude score of Sammy", function () {
        it("Sammy should return 19", function () {
            let result = calculator.stringToIntHash("d");
            expect(result).to.equal(0);
        });
    });
});

describe("Full result examples", function() {
    describe("Full text result verification", function () {
        it("Sammy should return wahou or something", function () {
            let result = calculator.score("Sammy");
            expect(result).to.contain("wahou");
        });
        it("François should return 25/20 or something", function () {
            let result = calculator.score("François");
            expect(result).to.contain("25/20");
        });
    });




});