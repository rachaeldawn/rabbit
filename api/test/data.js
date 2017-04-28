var Models = require('../data')
var RegisterModel = Models.RegisterModel
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
        it('adds Tag when appropriate', function(done) {
            var Supporters = []
            Models.Pool.query(`SELECT * FROM pg_tables WHERE tablename LIKE '%_tag'`)
                .then(function(res) {
                    Supporters = res.rows
                    Supporters = Supporters.reduce(function(prev, cur) {
                        if(prev == undefined){
                            prev = []
                        }
                        prev.push(cur.tablename.substr(0, cur.tablename.length - 4))
                        return prev
                    }, []).reduce(function(prev, cur) {
                        if(prev == undefined) {
                            prev = []
                        }
                        prev.push(cur.split('_').reduce(function(prev, cur) {
                            prev += cur[0].toUpperCase() + cur.substr(1)
                            return prev
                        }, ''))
                        return prev
                    }, []).reduce(function(prev, cur) {
                        console.log(cur)
                        if(Models[cur].Tag == undefined)
                            prev.push(cur)
                        return prev
                    }, [])
                    
                    assert.ok(Supporters == undefined || Supporters.length == 0, `Tag needs to be added to ${Supporters}`)
                 }).catch(err => done(err))
    
        })
    })
    describe('Functionality', function() {
        describe('Convert', function() {
            it('Errors on invalid', function() {
                //var q = new Models.
            })
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