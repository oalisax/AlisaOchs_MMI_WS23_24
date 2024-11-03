const expect = require('chai').expect;
const apiTemperature = require('../public/js/auxiliaryAPI')
const apiGreeting = require('../public/js/auxiliaryAPI')

//TODO Unit Tests to implement
describe("fahrenheitToCelsius()", function(){
    it('test below 32', function(){
        expect(Math.round(apiTemperature.fahrenheitToCelcius(30)*10)/10).to.equal(-1.1)
    })
    it('test equal 32', function(){
        expect(Math.round(apiTemperature.fahrenheitToCelcius(32)*10)/10).to.equal(0)
    })
    it('test above 32', function() {
        expect(Math.round(apiTemperature.fahrenheitToCelcius(36)*10)/10).to.equal(2.2)
    })
});

describe("celciusToFahrenheit()", function(){
    it('test below 0', function(){
        expect(Math.round(apiTemperature.celsiusToFahrenheit(-2)*10)/10).to.equal(28.4)
    })
    it('test equal 0', function(){
        expect(Math.round(apiTemperature.celsiusToFahrenheit(0)*10)/10).to.equal(32)
    })
    it('test above 0', function() {
        expect(Math.round(apiTemperature.celsiusToFahrenheit(2)*10)/10).to.equal(35.6)
    })
});

describe("GreetingDependOnTime()", function(){
    it('time in the morning', function(){
    //expect(apiGreeting.getGreetingDependOnTime('2024-01-01 07:00').to.equal("Guten Morgen"))
        assert.expect(apiGreeting.getGreetingDependOnTime(new Date('2020-01-01T07:00')).to.equal("Guten Morgen"))
    })
    it('time in the evening', function(){
        expect(apiGreeting.getGreetingDependOnTime('2024-01-01 19:00').to.equal("Guten Abend"))
    })
})