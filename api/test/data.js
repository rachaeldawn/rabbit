var assert = require('assert')
var _ = require('lodash')
var Data = require('../data')


let ValidBooleans = {
    '0': false,
    'f': false,
    'false': false,
    'n': false,
    'no': false,
    'off': false,
    '1': true,
    't': true,
    'true': true,
    'y': true,
    'yes': true,
    'on': true
}

describe('Validators', function() {
    describe('Boolean', function() {
        it('Fails on missing params', () => FailsOnMissing('ValidateBoolean'))
        it('Fails on invalid type passed', function() {
            assert.throws(() => Date.ValidateBoolean('q', 'test'))
            // does a thing
        })
        it('Validates all correct parameters', function() {
            
            for(var k of _.keys(ValidBooleans)) 
                assert.doesNotThrow(() => Data.ValidateBoolean(k, 'Test'), `Failed on ${k}`)
        })
        it('Formats as boolean', function() {
            for(var k in ValidBooleans) {
                assert.ok(ValidBooleans[k] == Data.ValidateBoolean(k, 'test'), 'Does not return as a boolean')
            }
        })
    })
    describe('Date', function() {
        it('Fails on missing params', () => FailsOnMissing('ValidateDate'))
        it('Fails on invalid type passed', function() {
            assert.throws(() => Date.ValidateDate('q', 'Test'))
        })
        it('Validates correct date', function() {
            var testDate = new Date(1999, 12, 12, 5, 3, 55, 22)
            var valids = []
            valids.push(testDate.toDateString())
            valids.push(testDate.toISOString())
            valids.push(testDate.toLocaleDateString())
            valids.push(testDate.toLocaleString())
            valids.push(testDate.toLocaleTimeString())
            valids.push(testDate.toString())
            valids.push(testDate.toTimeString())
            valids.push(testDate.toUTCString())
            for(var v of valids) 
                assert.doesNotThrow(() => Data.ValidateDate(v, 'Test'), `Failed on ${v}, index: ${_.indexOf(valids, v)}, type ${typeof v}`)
        })
        it('Returns as UTC string', function() {
            var TestDate = new Date(1999, 12, 12, 5, 3, 55, 22)
            assert.ok(TestDate.toUTCString() == Data.ValidateDate(TestDate, 'TestDate'), 'Does not return as a UTC string')
        })
    })
    describe('Integer', function() {
        it('Fails on missing params', () => FailsOnMissing('ValidateInteger'))
        it('Fails on invalid passed', function() {
            assert.throws(() => Date.ValidateDate('q', 'Test'))
        })
        it('Validates bytes', function() {
            assert.doesNotThrow(() => Data.ValidateInteger(234, 'byte-pass', 2), 'Fails in range validation')
            assert.throws(() => Data.ValidateInteger(1000, 'byte-fail', 2), 'Fails out of range validation')
            assert.throws(() => Data.ValidateInteger(-1000, 'byte-fail-low', 2), 'Fails out of range validation')
        })
        it('Validates int4', function() {
            assert.doesNotThrow(() => Data.ValidateInteger(214748, 'int4-pass', 4), 'Fails in range validation')
            assert.throws(() => Data.ValidateInteger(21474836470, 'int4-fail-too-high', 4), 'Fails out of range validation')
            assert.throws(() => Data.ValidateInteger(-21474836470, 'int4-fail-too-low', 4), 'Fails out of range validation')
        })
        it('Validates int8', function() {
            assert.doesNotThrow(() => Data.ValidateInteger(2424, 'int8-pass', 8), 'Fails in range validation')
            assert.throws(() => Data.ValidateInteger(-92233720368547758080, 'int-8-fail-too-low', 8), 'Fails out of range validation')
            assert.throws(() => Data.ValidateInteger(92233720368547758070, 'int-8-fail-too-high', 8), 'Fails out of range validation')
        })
        it('Formats strings to number', function() {
            assert.ok(_.isNumber(Data.ValidateInteger(255, 'thing', 4)), 'Does not return as a number')
        })
    })
    describe('Money', function() {
        it('Fails on missing params', () => FailsOnMissing('ValidateMoney'))
        it('Validates string money', function() {
            assert.doesNotThrow(() => Data.ValidateMoney('22.22', 'pass'))
        })
        it('Validates float money', function() {
            assert.doesNotThrow(() => Data.ValidateMoney(22.22, 'pass'))
        })
        it('Fails on invalid type', function() {
            assert.throws(() => Data.ValidateMoney(new Date(), 'fail'), 'Does not bail on invalid types')
        })
        it('Fails on invalid string', function() {
            assert.throws(() => Data.ValidateMoney('22.22.22', 'fail'), 'Does not bail on invalid strings')
        })
        it('Formats output', function() {
            var output = Data.ValidateMoney('22.22', 'output')
            assert.ok(_.isNumber(output), `Did not update output: ${typeof output}`)
        })
    })
    describe('Numeric', function() {
        it('Fails on missing params', () => FailsOnMissing('ValidateNumeric'))
        it('Validates strings', function() {
            assert.doesNotThrow(() => Data.ValidateNumeric('22.22', 'name', 7), 'Does not work for strings')
        })
        it('Formats as a number', function() {
            assert.ok(_.isNumber(Data.ValidateNumeric('22.22', 'name', 7)), 'Does not return a number value')
        })
        it('Fails on invalid type sent', function() {
            assert.throws(() => Data.ValidateNumeric(new Date(2, 2, 2, 2, 2, 2, 2), 'Date', 33))
        })
    })
    describe('Varchar', function() {
        it('Fails on missing params', () => FailsOnMissing('ValidateVarchar'))
        it('Breaks on invalid type', function() {
            assert.throws(() => Data.ValidateVarchar(true, 'boolean', 50))
            assert.throws(() => Data.ValidateVarchar(new Data(2, 2, 2, 2, 2), 'date', 50))
        })
        it('Checks length', function() {
            assert.throws(() => Data.ValidateVarchar('The Quick Brown Fox Jumps Over the lazy dog', 'breaks', 4), 'Needs to validate length')
        })
        it('Allows proper length', function() {
            assert.doesNotThrow(() => Data.ValidateVarchar('We have a thing here', 'pass', 300))
        })
    })
})

function FailsOnMissing(funcName) {
    assert.throws(Data[funcName])
    assert.throws(() => Data[funcName](1), 'Needs to fail on first param')
    assert.throws(() => Data[funcName](undefined, 1), 'Needs to fail on second param')
}

describe('Accessors', function() {
    describe('Delete', function() {
        it('Deletes')
    })
    describe('List/Page', function() {
        it('Skips proper amount')
        it('Caps out at max')
    })
})