var chai = require('chai');
var librogue = require('../');

describe('Testing LibRogue:PRNG', function () {
    it("Has a working XorShift32", function () {
        var rand = new librogue.PRNG.XorShift("xorshift32");
        rand.seed(5321312321312132);

        var num1 = rand.generate();
        var num2 = rand.generate();

        chai.expect(num1).to.be.equal(1120961647);
        chai.expect(num2).to.be.equal(435479905);
    });

    it("Has a working XorShift128", function () {
        var rand = new librogue.PRNG.XorShift("xorshift128");
        rand.seed(4);

        var num1 = rand.generate();
        var num2 = rand.generate();

        chai.expect(num1).to.be.equal(1205752114);
        chai.expect(num2).to.be.equal(798252567);
    });

    it("Has the decimal conversion method", function () {
        var rand = new librogue.PRNG.XorShift("xorshift32");
        rand.seed(4115);

        chai.expect(parseFloat(rand.generate(true).toPrecision(2))).to.be.equal(0.26);
    })
});