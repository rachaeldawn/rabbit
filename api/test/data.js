var assert = require('assert')
var Asset = require('../data/asset')
var Tag = require('../data/tag')
var _ = require('lodash')
var Data = require('../data')
let pg = require('pg')

let DataPool = new pg.Pool({
    database: "rabbit_tests",
    host: "192.168.1.189",
    port: 5432,
    max: 50,
    idleTimeoutMillis: 30000,
    ssl: true,
    user: "Developer",
    password: "Fluffeh9985"
})

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

before('Loading models...', function(done) {
    console.log("Loading Models... one moment")
    Data.Initialize()
        .then(() => { 
            console.log("Everything loaded.")
            console.log("========================")
            done() 
        })
        .catch(err => err && console.error(err))
})

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
    describe('Objects', function() {
        it('Fails with extra, unaccepted keys', function() {
            var obj = new Asset(-1, 'asset', 'a description', 33.44)
            obj.DangerTag = 3
            assert.throws(() => Data.ValidateObject(obj, new Asset()), /^Error: Object does not align with schema.$/, 'This should break! SQL injection as an object key variable is dangerous')
        })
        it('Passes with expected object', function() {
            var obj = new Asset(-1, 'asset', 'descriptin', 33.44)
            Data.ValidateObject(obj, new Asset())
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
        let asset = new Asset(-1, 'an asset name', 'an asset description', 44.44)
        beforeEach(function(done) {
            DataPool.connect()
                .then(client => {
                    client.query(`INSERT INTO asset (name, description, purchase_value) VALUES ('an asset name', 'an asset description', 44.44) RETURNING id`)
                        .then(res => {
                            asset.id = res.rows[0].id
                            done()
                        })
                        .catch(done)
                })
        })
        it('Deletes', function(done) {
            var PrevId = _.clone(asset.id)
            Data.Delete(asset)
                .then((res) => assert.ok(res[0].id == PrevId, 'Needs to actually be deleted.'))
                .then(done)
                .catch(done)
        })
        it('Sets id to -1', function(done) {
            Data.Delete(asset)
                .then(res => assert.ok(asset.id == -1, 'Asset needs to be set to -1 to indicate non-existent status'))
                .then(done)
                .catch(done)
        })
    })
    describe('List/Page', function() {
        before(function(done) {
            DataPool.connect()
            .then(client => {
                return new Promise(function(resolve, reject) {
                    var qstring = `INSERT INTO tag (name, red, green, blue, opacity) VALUES ('tag_1}', 255, 255, 255, 255);`
                    for(i = 2; i <= 300; i++) {
                        qstring += `INSERT INTO tag (name, red, green, blue, opacity) VALUES ('tag_${_.clone(i)}', 255, 255, 255, 255);`
                    }
                    client.query(qstring)
                        .then(resolve)
                        .catch(reject)
                })
            })
            .then(() => done())
            .catch(done)
        })
        after(function(done) {
            DataPool.connect()
            .then(client => {
                client.query(`DELETE FROM tag WHERE name like 'tag_%'`)
                    .then(() => client.end())
                    .then(done)
                    .catch(done)
            })
        })
        it('Gets proper quantity', function(done) {
            Data.Page(Tag, 50, 1)
                .then(res => assert.ok(res.length == 50))
                .then(done)
                .catch(done)
        })
        it('Skips proper amount', function(done) {
            Data.Page(Tag, 50, 1)
                .then(res => {
                    assert.ok(res[0].name == 'tag_51' && res[49].name == 'tag_100', `Did not skip proper amount. ${res[0].name} to ${res[49].name}`)
                })
                .then(done)
                .catch(done)
        })
        it('Caps out at max', function(done) {
            Data.Page(Tag, 120, 1)
                .then(res => {
                    assert.ok(res.length == 100, 'Did not cap out at 100')
                })
                .then(done)
                .catch(done)
        })
    })
    describe('#Save()', function(){
        it('Returns a row', function(done) {
            Data.Save(new Asset(-1, 'from_code_asset_row', 'The first asset generated from code', 54.45))
                .then(function(res) {
                    assert.ok(res, 'No value returned')
                })
                .then(done)
                .catch(done)
        })
        it('Sets the id of an object', function(done) {
            let obj = new Asset(-1, 'from_code_asset_id', 'The first asset generated from code again', 343.33)
            Data.Save(obj)
                .then(function() {
                    assert.ok(obj.id != -1, 'Id needs to be updated after save')
                    done()
                })
                .catch(done)
        })
        after('Making sure uniques do not exist', function(done) {
            DataPool.connect()
                .then(client => {
                    client.query(`DELETE FROM asset WHERE name like '%from_code_asset%'`)
                    .then((res) => {
                        client.end()
                        done()
                    })
                    .catch(done)
                })
        })
    })
})

describe('Converter', function() {
    describe('#ObjectToQueryable()', function() {
        it('Ignores when tablename is missing', function() {
            assert.throws(() => Data.ObjectToQueryable({}), 'Needs to ignore when .tablename is missing')
        })
        it('Ignores invalid models', function() {
            class Invalid{constructor() {this.name = 'dicks'; this.tablename='aninvalidname'}}
            let obj = new Invalid()
            assert.throws(() => Data.ObjectToQueryable(obj), /^Error: Class \'.*\' is not registered.$/, 'Needs to ignore unregistered models')
        })
        it('Errors on invalid null values', function() {
            let obj = new Asset()
            assert.throws(() => Data.ObjectToQueryable(obj), /^Error: Required field (.*) is undefined$/ ,'Needs to error when a field is not allowed to be null')
        })
        it('Formats object to expected', function() {
            let obj = new Asset(-1, 'asset_test_1', 'An asset that is used for testing', '33.44', undefined)
            Data.ObjectToQueryable(obj)
            assert.ok(_.isNumber(obj.purchase_value), 'Did not update object')
        })
    })
})
