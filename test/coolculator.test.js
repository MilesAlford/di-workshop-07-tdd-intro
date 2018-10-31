var chai = require('chai')
var expect = chai.expect

var Coolculator = require('../lib/coolculator')

describe('Coolculator', function() {
  mm = new Coolculator()

  it('should add', function() {
    result = mm.add(2, 3)
    expect(result).to.equal(5)
  })

  // Uncomment this 👇
  it('should multiply', function() {
     result = mm.multiply(2, 3)
     expect(result).to.equal(6)
   })

  // Uncomment this 👇
   it('should subtract', function() {
     result = mm.subtract(3, 2)
     expect(result).to.equal(1)
   })

   it('should divide', function() {
     result = mm.divide(4, 2)
     expect(result).to.equal(2)
   })

   it('highest value', function() {
     result = mm.highest(5, 10)
     expect(result).to.equal(10)
   })

   it('lowest value', function() {
     result = mm.lowest(8, 4)
     expect(result).to.equal(4)
   })

   it('should double', function() {
     result = mm.double(4)
     expect(result).to.equal(8)
   })

   it('should square', function() {
     result = mm.square(5)
     expect(result).to.equal(25)
   })

   it('should raise', function() {
     result= mm.raise(5, 3)
     expect(result).to.equal(125)
   })

   it('negative should be true', function() {
     result = mm.isNegative(-4)
     expect(result).to.equal(true)
   })
   
   it('positive should be true', function() {
    result = mm.isPositive(4)
    expect(result).to.equal(true)
  })

})
