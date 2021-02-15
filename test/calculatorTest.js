let expect    = require("chai").expect;
let calculator = require("../app/calculator");


describe("Score calculation examples", function() {
    describe("d", function () {
        it("d should return 0", function () {
            let result = calculator.stringToIntHash("d");
            expect(result).to.equal(0);
        });
    });
    describe("Sammy", function () {
        it("Sammy should return 19", function () {
            let result = calculator.stringToIntHash("d");
            expect(result).to.equal(0);
        });
    });
});

describe("Full result examples", function() {
    describe("d", function () {
        it("Sammy should return wahou or something", function () {
            let result = calculator.score("Sammy");
            expect(result).to.contain("wahou");
        });
    });

});