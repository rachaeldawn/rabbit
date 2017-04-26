var assert = require('assert')
var Models = require('../data')
var clone = require('lodash').cloneDeep

class TestClass{constructor(){}}


describe('Models', function() {
    for(var k in Models) {
        if(k != 'RegisterModel')
            describe(k, function() {
                var index = clone(k)
                var Class = Models[index]
                it('is a class', function() {
                    assert.ok(typeof Class == typeof TestClass, 'needs to be a class')
                })
                it('is bolted', function() {
                    assert.ok(new Class().isDataModel, 'needs to be bolted')
                })
                it('has a tableName', function() {
                    assert.ok(typeof Class.tableName == typeof "")
                })
                it('has properties', function() {
                    assert.ok(Object.keys(new Class()).length > 0, 'properties need to be added')
                })
            })
    }
})