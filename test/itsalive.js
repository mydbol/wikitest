console.log("I'm really excited to start testing!!");

var expect = require('chai').expect;
describe('+', function () {
    it('adds 2 + 2', function () {
        var re=2+2;
        expect(re).to.equal(4);
    });
   
});
