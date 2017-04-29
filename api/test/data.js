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
        it('adds Tag and UnTag when appropriate', function(done) {
            var CheckForAdded = function(res) {
            var Supporters = []
                return new Promise(function(resolve, reject) {
                    Supporters = res.rows
                    Supporters = Supporters.reduce(function(prev, cur) {
                        if(prev == undefined){
                            prev = []
                        }
                        prev.push(cur.tablename.substr(0, cur.tablename.length - 4))
                        return prev
                    }, [])
                    .reduce(function(prev, cur) {
                        if(prev == undefined) {
                            prev = []
                        }
                        prev.push(cur.split('_')
                            .reduce(function(prev, cur) {
                                prev += cur[0].toUpperCase() + cur.substr(1)
                                return prev
                            }, '')
                        )
                        return prev
                    }, [])

                    var Appropriates = Supporters.reduce(function(prev, cur) {
                        if(Models[cur].prototype.Tag == undefined && new Models[cur]().Tag == undefined && Models[cur].prototype.UnTag == undefined && new Models[cur]().Tag )
                            prev.push(cur)
                        return prev
                    }, [])
                    
                    assert.ok(Appropriates == undefined || Appropriates.length == 0, `Tag needs to be added to ${Supporters}`)
                    resolve(Supporters)
                })       
            }

            var CheckForInappropriateAdds = function(Supporters) {
                return new Promise(function(resolve, reject) {
                    for(var k in Models) {
                        if(Supporters[k] == undefined) {
                            assert.ok(Models[k].prototype.Tag != undefined || new Models[k]().Tag != undefined, 'Tag should not be added to ' + k)
                            assert.ok(Models[k].prototype.UnTag != undefined || new Models[k]().UnTag != undefined, 'UnTag should not be added to ' + k)
                        }
                    }
                    resolve()
                })
            }

            Models.Pool.query(`SELECT * FROM pg_tables WHERE tablename LIKE '%_tag'`)
                .then(CheckForAdded)
                .then(CheckForInappropriateAdds)
                .then(done())
                .catch(err => done(err))
    
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