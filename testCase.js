/**
 * We can write the test cases like this
 */

const { doesNotMatch } = require("assert");


describe('accountBalanceHistory', () => {
   
    accountTypeChecker(req) => {
        req.should.be.a(Array);
        req.length.should.be.morethan(2);
        req.should.have(account.balance.amount);
        done()
    }
    
});

