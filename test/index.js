const sum = require('../index');
const assert = require('assert');

describe('Sum', () =>{
    it('should handle positive numbers cambio para probar jenkins', () => {
        assert.equal(sum(3,5),8);
    });
    it('should handle negative numbers', () => {
        assert.equal(sum(3,-5),-2);
    });
    it('should handle decimals numbers', () => {
        assert.equal(sum(3.5,7.1),10.6);
    });
});