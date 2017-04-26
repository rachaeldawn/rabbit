var RegisterModel = require('../data').RegisterModel
var assert = require('assert')

class TestClass{constructor(){}}
class TagClass {constructor(){}}
TagClass.prototype.supportsTagging = true

RegisterModel(TagClass)
RegisterModel(TestClass)

describe('Data', function() {
    describe('Bolting', function() {
        it('adds Convert', function() {
            var q = new TestClass()
            assert.ok(typeof q.Convert == typeof (function(){}), 'Convert needs to be added')
        })
        it('adds Serialize', function() {
            var q = new TestClass()
            assert.ok(typeof q.Serialize == typeof (function(){}), 'Serialize needs to be added')
        })
        it('adds Search', function() {
            var q = new TestClass()
            assert.ok(typeof q.Search == typeof (function(){}), 'Search needs to be added')
        })
        it('adds Update', function() {
            var q = new TestClass()
            assert.ok(typeof q.Update == typeof (function(){}), 'Update needs to be added')
        })
        it('adds Delete', function() {
            var q = new TestClass()
            assert.ok(typeof q.Delete == typeof (function(){}), 'Delete needs to be added')
        })
        it('adds Page', function() {
            var q = new TestClass()
            assert.ok(typeof q.Page == typeof (function(){}), 'Page needs to be added')
        })
        it('adds List', function() {
            var q = new TestClass()
            assert.ok(typeof q.List == typeof (function(){}), 'List needs to be added')
        })
        it('adds Save', function() {
            var q = new TestClass()
            assert.ok(typeof q.Save == typeof (function(){}), 'Save needs to be added')
        })
        it('adds Tag when necessary', function() {
            var q = new TestClass()
            assert.ok(q.Tag == undefined, 'Should not add Tag unless .supportsTagging is specified')
            q = new TagClass()
            assert.ok(typeof q.Tag == typeof (function(){}), 'Should add Tag when .supportsTagging is specified')
        })
        it('adds Untag when necessary', function() {
            var q = new TestClass()
            assert.ok(q.Tag == undefined, 'Should not add UnTag unless .supportsTagging is specified')
            q = new TagClass()
            assert.ok(typeof q.Tag == typeof (function(){}), 'Should add UnTag when .supportsTagging is specified')
        })
    })
    describe('Functionality', function() {
        describe('Convert', function() {
            it('Errors on invalid')
            it('Returns expectedly')
        })
        describe('Serialize', function() {
            it('Errors on invalid')
            it('Returns expectedly')
        })
        describe('Search', function() {
            it('Errors on invalid')
            it('Returns expectedly')
        })
        describe('Update', function() {
            it('Errors on invalid')
            it('Returns expectedly')
        })
        describe('Delete', function() {
            it('Errors on invalid')
            it('Returns expectedly')
        })
        describe('Page', function() {
            it('Errors on invalid')
            it('Returns expectedly')
        })
        describe('List', function() {
            it('Errors on invalid')
            it('Returns expectedly')
        })
        describe('Save', function() {
            it('Errors on invalid')
            it('Returns expectedly')
        })
    })
})