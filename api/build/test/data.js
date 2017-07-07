var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
var assert = require('assert');
var Asset = require('../data/asset')["default"];
var Tag = require('../data/tag')["default"];
var _ = require('lodash');
var Data = require('../data');
var User = require('../data/user_account')["default"];
var pg = require('pg');
var DataPool = new pg.Pool({
    database: "rabbit",
    host: "192.168.1.189",
    port: 5432,
    max: 50,
    idleTimeoutMillis: 30000,
    ssl: true,
    user: "Developer",
    password: "Fluffeh9985"
});
var ValidBooleans = {
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
};
before('Loading models...', function () {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, Data.Initialize()];
                case 1:
                    _a.sent();
                    return [2];
            }
        });
    });
});
var Query = function (str, args) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
    switch (_a.label) {
        case 0: return [4, DataPool.connect()];
        case 1: return [4, (_a.sent()).query(str, args)];
        case 2: return [2, _a.sent()];
    }
}); }); };
describe('Validators', function () {
    describe('Boolean', function () {
        it('Fails on missing params', function () { return FailsOnMissing('ValidateBoolean'); });
        it('Fails on invalid type passed', function () {
            assert.throws(function () { return Date.ValidateBoolean('q', 'test'); });
        });
        it('Validates all correct parameters', function () {
            for (var _i = 0, _a = _.keys(ValidBooleans); _i < _a.length; _i++) {
                var k = _a[_i];
                assert.doesNotThrow(function () { return Data.ValidateBoolean(k, 'Test'); }, "Failed on " + k);
            }
        });
        it('Formats as boolean', function () {
            for (var k in ValidBooleans) {
                assert.ok(ValidBooleans[k] == Data.ValidateBoolean(k, 'test'), 'Does not return as a boolean');
            }
        });
    });
    describe('Date', function () {
        it('Fails on missing params', function () { return FailsOnMissing('ValidateDate'); });
        it('Fails on invalid type passed', function () {
            assert.throws(function () { return Date.ValidateDate('q', 'Test'); });
        });
        it('Validates correct date', function () {
            var testDate = new Date(1999, 12, 12, 5, 3, 55, 22);
            var valids = [];
            valids.push(testDate.toDateString());
            valids.push(testDate.toISOString());
            valids.push(testDate.toLocaleDateString());
            valids.push(testDate.toLocaleString());
            valids.push(testDate.toLocaleTimeString());
            valids.push(testDate.toString());
            valids.push(testDate.toTimeString());
            valids.push(testDate.toUTCString());
            for (var _i = 0, valids_1 = valids; _i < valids_1.length; _i++) {
                var v = valids_1[_i];
                assert.doesNotThrow(function () { return Data.ValidateDate(v, 'Test'); }, "Failed on " + v + ", index: " + _.indexOf(valids, v) + ", type " + typeof v);
            }
        });
        it('Returns as UTC string', function () {
            var TestDate = new Date(1999, 12, 12, 5, 3, 55, 22);
            assert.ok(TestDate.toUTCString() == Data.ValidateDate(TestDate, 'TestDate'), 'Does not return as a UTC string');
        });
    });
    describe('Integer', function () {
        it('Fails on missing params', function () { return FailsOnMissing('ValidateInteger'); });
        it('Fails on invalid passed', function () {
            assert.throws(function () { return Date.ValidateDate('q', 'Test'); });
        });
        it('Validates bytes', function () {
            assert.doesNotThrow(function () { return Data.ValidateInteger(234, 'byte-pass', 2); }, 'Fails in range validation');
            assert.throws(function () { return Data.ValidateInteger(1000, 'byte-fail', 2); }, 'Fails out of range validation');
            assert.throws(function () { return Data.ValidateInteger(-1000, 'byte-fail-low', 2); }, 'Fails out of range validation');
        });
        it('Validates int4', function () {
            assert.doesNotThrow(function () { return Data.ValidateInteger(214748, 'int4-pass', 4); }, 'Fails in range validation');
            assert.throws(function () { return Data.ValidateInteger(21474836470, 'int4-fail-too-high', 4); }, 'Fails out of range validation');
            assert.throws(function () { return Data.ValidateInteger(-21474836470, 'int4-fail-too-low', 4); }, 'Fails out of range validation');
        });
        it('Validates int8', function () {
            assert.doesNotThrow(function () { return Data.ValidateInteger(2424, 'int8-pass', 8); }, 'Fails in range validation');
            assert.throws(function () { return Data.ValidateInteger(-92233720368547758080, 'int-8-fail-too-low', 8); }, 'Fails out of range validation');
            assert.throws(function () { return Data.ValidateInteger(92233720368547758070, 'int-8-fail-too-high', 8); }, 'Fails out of range validation');
        });
        it('Formats strings to number', function () {
            assert.ok(_.isNumber(Data.ValidateInteger(255, 'thing', 4)), 'Does not return as a number');
        });
    });
    describe('Money', function () {
        it('Fails on missing params', function () { return FailsOnMissing('ValidateMoney'); });
        it('Validates string money', function () {
            assert.doesNotThrow(function () { return Data.ValidateMoney('22.22', 'pass'); });
        });
        it('Validates float money', function () {
            assert.doesNotThrow(function () { return Data.ValidateMoney(22.22, 'pass'); });
        });
        it('Fails on invalid type', function () {
            assert.throws(function () { return Data.ValidateMoney(new Date(), 'fail'); }, 'Does not bail on invalid types');
        });
        it('Fails on invalid string', function () {
            assert.throws(function () { return Data.ValidateMoney('22.22.22', 'fail'); }, 'Does not bail on invalid strings');
        });
        it('Formats output', function () {
            var output = Data.ValidateMoney('22.22', 'output');
            assert.ok(_.isNumber(output), "Did not update output: " + typeof output);
        });
    });
    describe('Numeric', function () {
        it('Fails on missing params', function () { return FailsOnMissing('ValidateNumeric'); });
        it('Validates strings', function () {
            assert.doesNotThrow(function () { return Data.ValidateNumeric('22.22', 'name', 7); }, 'Does not work for strings');
        });
        it('Formats as a number', function () {
            assert.ok(_.isNumber(Data.ValidateNumeric('22.22', 'name', 7)), 'Does not return a number value');
        });
        it('Fails on invalid type sent', function () {
            assert.throws(function () { return Data.ValidateNumeric(new Date(2, 2, 2, 2, 2, 2, 2), 'Date', 33); });
        });
    });
    describe('Varchar', function () {
        it('Fails on missing params', function () { return FailsOnMissing('ValidateVarchar'); });
        it('Breaks on invalid type', function () {
            assert.throws(function () { return Data.ValidateVarchar(true, 'boolean', 50); });
            assert.throws(function () { return Data.ValidateVarchar(new Data(2, 2, 2, 2, 2), 'date', 50); });
        });
        it('Checks length', function () {
            assert.throws(function () { return Data.ValidateVarchar('The Quick Brown Fox Jumps Over the lazy dog', 'breaks', 4); }, 'Needs to validate length');
        });
        it('Allows proper length', function () {
            assert.doesNotThrow(function () { return Data.ValidateVarchar('We have a thing here', 'pass', 300); });
        });
    });
    describe('Objects', function () {
        it('Fails with extra, unaccepted keys', function () {
            var obj = new Asset(-1, 'asset', 'a description', 33.44);
            obj.DangerTag = 3;
            assert.throws(function () { return Data.ValidateObject(obj, new Asset()); }, /Error: Object does not align with schema/, 'This should break! SQL injection as an object key variable is dangerous');
        });
        it('Passes with expected object', function () {
            var obj = new Asset(-1, 'asset', 'descriptin', 33.44);
            Data.ValidateObject(obj, new Asset());
        });
    });
});
describe('Generators', function () {
    var obj = {
        name: 'IsDefined',
        other: 'yee dawg',
        invalid: undefined
    };
    describe('GeneratedDefinedKeysString', function () {
        it('Strips invalids', function () {
            assert.ok((/invalid/).exec(Data.GenerateDefinedKeysString(obj).substr('invalid')) == null, 'Undefineds need to be stripped');
        });
        it('Returns all valids', function () {
            assert.ok((/name/).exec(Data.GenerateDefinedKeysString(obj)) != null, 'Needs to return the proper string');
            assert.ok((/other/).exec(Data.GenerateDefinedKeysString(obj)) != null, 'Needs to return the proper string');
        });
    });
    describe('GenerateDefinedValuesArray', function () {
        it('Generates correct array', function () {
            var rets = Data.GenerateDefinedValuesArray(obj);
            assert.ok(rets.length == 2, "Should have only returned 2 values. " + rets);
        });
        it('Removes undefineds', function () {
            var rets = Data.GenerateDefinedValuesArray(obj);
            var check = [];
            for (var k in obj)
                check.push(obj[k]);
            assert.ok(rets != check, check + " vs " + rets);
        });
    });
    describe('GenerateDefinedValuesPlaceholders', function () {
        it('Generates correct placeholder amounts', function () {
            var str = Data.GenerateDefinedValuesPlaceholders(4);
            assert.ok(str == '$1, $2, $3, $4', "Needs to generate 4. " + str);
            str = Data.GenerateDefinedValuesPlaceholders(1);
            assert.ok(str == '$1', 'Does not define properly with only 1 element');
        });
        it('Rejects num 0', function () {
            assert.throws(function () { return Data.GenerateDefinedValuesPlaceholders(0); }, 'Needs to error when 0 is passed.');
        });
    });
    describe('GenerateSearchValues', function () {
        var obj;
        beforeEach(function () {
            obj = {
                name: 'asset',
                description: undefined,
                purchase_value: 44.44,
                serial_key: undefined,
                tablename: 'asset'
            };
        });
        it('Generates proper search string', function () {
            var str = Data.GenerateSearchValues(obj);
            var correct = /(name)\ *like\ *'%asset%'\ *AND purchase_value\ *=\ *44.44/;
            assert.ok(correct.exec(str), "Did not generate proper string. \nIs:\t\t" + str + "\nShould be: \t" + correct);
        });
        it('Ignored undefineds', function () {
            var str = Data.GenerateSearchValues(obj);
            assert.ok((/description/).exec(str) == null, 'Should have removed the undefined value description');
        });
    });
    describe('GenerateUpdateKVs', function () {
        it('Generates proper update string', function () {
            var desc = 'Yeeeee dawg';
            var serial = 'lkjsdf7hk3kjb+3o3';
            obj.description = desc;
            obj.serial_key = serial;
            var str = Data.GenerateUpdateKVs(obj);
            var correct = "name = 'IsDefined', other = 'yee dawg', description = 'Yeeeee dawg', serial_key = 'lkjsdf7hk3kjb+3o3'";
            assert.ok(str == correct, "Did not create proper string.\nIs:\t\t" + str + "\nShould be: " + correct + "\t");
            obj.serial_key = undefined;
        });
        it('Ignores undefineds', function () {
            var str = Data.GenerateUpdateKVs(obj);
            var correct = "name = 'IsDefined', other = 'yee dawg', description = 'Yeeeee dawg'";
            assert.ok(str == correct, "Did not create proper string.\nIs:\t\t" + str + "\nShould be: \t" + correct + "\t");
        });
    });
});
function FailsOnMissing(funcName) {
    assert.throws(Data[funcName]);
    assert.throws(function () { return Data[funcName](1); }, 'Needs to fail on first param');
    assert.throws(function () { return Data[funcName](undefined, 1); }, 'Needs to fail on second param');
}
var asset = new Asset(-1, 'an asset name', 'an asset description', 44.44);
var testAsset = new Asset(-1, 'test_asset_update', 'a description', 44.44);
describe('Accessors', function () {
    before(function () {
        return __awaiter(this, void 0, void 0, function () {
            var qstring;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        qstring = "INSERT INTO tag (name, red, green, blue, opacity) VALUES ('tag_1', 255, 255, 255, 255);";
                        for (i = 2; i <= 300; i++) {
                            qstring += "INSERT INTO tag (name, red, green, blue, opacity) VALUES ('tag_" + _.clone(i) + "', 255, 255, 255, 255);";
                        }
                        return [4, Query(qstring)];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    });
    after(function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, Query("DELETE FROM tag WHERE name like 'tag_%'")];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    });
    describe('Delete', function () {
        beforeEach(function () {
            return __awaiter(this, void 0, void 0, function () {
                var res, inserted;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, Query("SELECT * FROM asset WHERE name='an asset name'")];
                        case 1:
                            res = (_a.sent()).rows;
                            if (!(res.length == 1)) return [3, 2];
                            asset.id = res[0].id;
                            return [2];
                        case 2: return [4, Query("INSERT INTO asset (name, description, purchase_value) VALUES ('an asset name', 'an asset description', 44.44) RETURNING id")];
                        case 3:
                            inserted = (_a.sent()).rows[0];
                            asset.id = inserted.id;
                            return [2];
                    }
                });
            });
        });
        it('Deletes', function (done) {
            var PrevId = _.clone(asset.id);
            Data.Delete(asset)
                .then(function (res) { return assert.ok(res[0].id == PrevId, 'Needs to actually be deleted.'); })
                .then(done)["catch"](done);
        });
        it('Sets id to -1', function (done) {
            Data.Delete(asset)
                .then(function (res) { return assert.ok(asset.id == -1, 'Asset needs to be set to -1 to indicate non-existent status'); })
                .then(done)["catch"](done);
        });
        it('Errors when id is -1', function (done) {
            Data.Delete(new Asset(-1, 'no name', 'description here', 44.44))["catch"](function (err) {
                assert.ok(err, 'Needs to break when id is -1');
                done();
            });
        });
        it('Ignores invalid objects', function (done) {
            Data.Delete({ name: 'George', tablename: 'Notvalid' })
                .then(function () {
                assert.ok(false, 'This needs to throw an error');
                done();
            })["catch"](function (err) {
                assert.ok(err, 'Needs to break when invalid object');
                done();
            });
        });
    });
    describe('List/Page', function () {
        it('Gets proper quantity', function (done) {
            Data.Page(Tag, 22, 1)
                .then(function (res) { return assert.ok(res.length == 22, 'Needs to return the specified amount'); })
                .then(done)["catch"](done);
        });
        it('Skips proper amount', function (done) {
            Data.Page(Tag, 50, 1)
                .then(function (res) {
                var firstTag = _.toNumber(res[0].name.split('_')[1]);
                var secondTag = _.toNumber(res[49].name.split(_)[1]);
                assert.ok(firstTag >= 50, "Did not skip proper amount. " + res[0].name + " to " + res[49].name);
            })
                .then(done)["catch"](done);
        });
        it('Caps out at max', function (done) {
            Data.Page(Tag, 120, 1)
                .then(function (res) {
                assert.ok(res.length == 100, 'Did not cap out at 100');
            })
                .then(done)["catch"](done);
        });
        it('List returns page 0', function (done) {
            Data.List(Tag, 50)
                .then(function (res) {
                assert.ok(res[0].name == 'tag_1' && res[49].name == 'tag_50', "Needs to return first page. Returned: " + res[0].name + " to " + res[49].name);
                done();
            })["catch"](done);
        });
        it('Pages descending properly', function (done) {
            Data.List(Tag, 50, false)
                .then(function (res) {
                var firstTag = _.toNumber(res[0].name.split('_')[1]);
                var secondTag = _.toNumber(res[49].name.split('_')[1]);
                assert.ok(firstTag - secondTag > 0 && secondTag - firstTag < 0, "Reversed incorrectly. " + (firstTag - secondTag) + ", " + (secondTag - firstTag));
            })
                .then(function () { return done(); })["catch"](done);
        });
        it('Reverses ascend/descend if pages are negative', function (done) {
            Data.Page(Tag, 50, -1, false)
                .then(function (res) {
                var firstTag = _.toNumber(res[0].name.split('_')[1]);
                var secondTag = _.toNumber(res[49].name.split(_)[1]);
                assert.ok(firstTag >= 50, "Did not reverse. " + res[0].name + " to " + res[49].name);
            })
                .then(function () { return done(); })["catch"](done);
        });
        it('Errors on invalid page/amt/class', function (done) {
            Data.Page(Tag, 'blue', 'green')
                .then(function (res) {
                assert.ok(!res, 'This should have errored');
            })
                .then(function () { return done(); })["catch"](function (err) {
                assert.ok(err, 'This should have broken');
                done();
            });
        });
    });
    describe('Save', function () {
        it('Returns a row', function (done) {
            Data.Save(new Asset(-1, 'from_code_asset_row', 'The first asset generated from code', 54.45))
                .then(function (res) {
                assert.ok(res, 'No value returned');
            })
                .then(done)["catch"](done);
        });
        it('Saves ALL fields defined', function (done) {
            Data.Save(new User(-1, 'condomsauce', 'saucy@salamander.com', false))
                .then(function (res) {
                Data.Query("DELETE FROM user_account WHERE username='condomsauce'");
                console.log(res);
                done();
            });
        });
        it('Sets the id of an object', function (done) {
            var obj = new Asset(-1, 'from_code_asset_id', 'The first asset generated from code again', 343.33);
            Data.Save(obj)
                .then(function () {
                assert.ok(obj.id != -1, 'Id needs to be updated after save');
                done();
            })["catch"](done);
        });
        it('Refuses to save invalid objects', function (done) {
            var obj = { id: -1, name: 'george', description: 'a description', purchase_value: 'a thing', invalidkey: false, tablename: 'asset' };
            Data.Save(obj)
                .then(function () {
                assert.ok(!obj.id, 'This needs to never happen. Security hole. Reject non-compliant objects.');
                done();
            })["catch"](function (err) {
                assert.ok(err, 'This needs to never happen. Security hole. Reject non-compliant objects.');
                done();
            });
        });
        it('Refuses to save missing required fields', function (done) {
            var obj = new Asset(-1, undefined, 'a desc', undefined);
            Data.Save(obj)
                .then(function () {
                assert.ok(false, 'This should not work. Missing required fields.');
                done();
            })["catch"](function (err) {
                assert.ok(err, 'This should not work. Missing required fields.');
                done();
            });
        });
        after('Making sure uniques do not exist', function (done) {
            DataPool.connect()
                .then(function (client) {
                client.query("DELETE FROM asset WHERE name like '%from_code_asset%'")
                    .then(function (res) {
                    client.end();
                    done();
                })["catch"](done);
            });
        });
    });
    describe('Update', function () {
        before('Creating original asset', function (done) {
            testAsset = new Asset(-1, 'test_asset_update', 'a description', 44.44);
            DataPool.connect()
                .then(function (client) {
                client.query("INSERT INTO asset (name, description, purchase_value) VALUES ('test_asset_update', 'a description', 44.44) RETURNING *")
                    .then(function (res) {
                    testAsset.id = res.rows[0].id;
                    client.end();
                    done();
                })["catch"](function (err) { return done(err); });
            })["catch"](done);
        });
        it('Puts new data in database', function (done) {
            testAsset.description = 'Updated description for puts new data in database';
            Data.Update(testAsset)
                .then(function (res) {
                DataPool.connect()
                    .then(function (client) {
                    client.query("SELECT description FROM asset WHERE name='test_asset_update'")
                        .then(function (res) { return res.rows[0].description; })
                        .then(function (res) {
                        assert.ok(res == testAsset.description, "Needs to be updated server-side. " + res + " vs " + testAsset.description);
                        client.end();
                    })
                        .then(done)["catch"](done);
                })["catch"](done);
            })["catch"](done);
        });
        it('Errors on invalid id', function (done) {
            var fail = new Asset(-1, 'A fake one', 'fake description', 1337.13);
            Data.Update(fail)
                .then(function (res) {
                console.log(res);
            })["catch"](function (err) {
                assert.ok(err, 'This needs to error. The object does not exist in the DB.');
                done();
            });
        });
        it('Rejects invalid objects', function (done) {
            var invalid = { name: 'george' };
            Data.Update(invalid)
                .then(function (res) {
                assert.ok(-1, 'This should have errored');
                done();
            })["catch"](function (err) {
                assert.ok(err, 'This should have errored.');
                done();
            });
        });
        it('Returns saved object', function (done) {
            testAsset.description = 'Dicks and balls man';
            Data.Update(testAsset)
                .then(function (res) {
                assert.ok(res.description == 'Dicks and balls man', 'Did not return an expected object: ' + res);
                done();
            })["catch"](done);
        });
        after('Delete asset for sake of synchronicity', function (done) {
            DataPool.connect()
                .then(function (client) {
                client.query("DELETE FROM asset WHERE name='test_asset_update'")
                    .then(function () {
                    testAsset.id = -1;
                    client.end();
                    done();
                })["catch"](done);
            })["catch"](done);
        });
    });
    describe('Search', function () {
        it('searches partials', function () {
            return __awaiter(this, void 0, void 0, function () {
                var SearchObj, Results, k;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            SearchObj = new Tag(undefined, 'tag_2');
                            return [4, Data.Search(SearchObj, 50, 0)];
                        case 1:
                            Results = _a.sent();
                            assert.ok(Results.length == 50, 'Needs to return full amount (tags generates 300)');
                            for (k in Results) {
                                assert.ok(Results[k].name.substr('tag_2'), "An invalid result was returned: " + Results[k]);
                            }
                            return [2];
                    }
                });
            });
        });
        it('denies invalid search object', function () {
            return __awaiter(this, void 0, void 0, function () {
                var SearchObj, err_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            SearchObj = { name: 'george' };
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4, Data.Search(SearchObj)];
                        case 2:
                            _a.sent();
                            assert.ok(false, 'Search should have failed as tablename was undefined');
                            return [3, 4];
                        case 3:
                            err_1 = _a.sent();
                            assert.ok(err_1, 'Search should have failed as tablename was undefined');
                            return [3, 4];
                        case 4: return [2];
                    }
                });
            });
        });
        it('returns 1 result if valid id is provided', function () {
            return __awaiter(this, void 0, void 0, function () {
                var obj, _a, _b;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0: return [4, Query("SELECT * FROM tag WHERE name='tag_233' LIMIT 1")];
                        case 1:
                            obj = (_c.sent()).rows[0];
                            obj.tablename = 'tag';
                            _b = (_a = assert).ok;
                            return [4, Data.Search(obj)];
                        case 2:
                            _b.apply(_a, [(_c.sent()).length == 1, 'Should have only returned 1 since a real id was passed.']);
                            return [2];
                    }
                });
            });
        });
    });
});
describe('Converter', function () {
    describe('#ObjectToQueryable()', function () {
        it('Ignores when tablename is missing', function () {
            assert.throws(function () { return Data.ObjectToQueryable({}); }, 'Needs to ignore when .tablename is missing');
        });
        it('Ignores invalid models', function () {
            var Invalid = (function () {
                function Invalid() {
                    this.name = 'dicks';
                    this.tablename = 'aninvalidname';
                }
                return Invalid;
            }());
            var obj = new Invalid();
            assert.throws(function () { return Data.ObjectToQueryable(obj); }, /^Error: Class \'.*\' is not registered.$/, 'Needs to ignore unregistered models');
        });
        it('Errors on invalid null values', function () {
            var obj = new Asset();
            assert.throws(function () { return Data.ObjectToQueryable(obj); }, /^Error: Required field (.*) is undefined$/, 'Needs to error when a field is not allowed to be null');
        });
        it('Formats object to expected', function () {
            var obj = new Asset(-1, 'asset_test_1', 'An asset that is used for testing', '33.44', undefined);
            Data.ObjectToQueryable(obj);
            assert.ok(_.isNumber(obj.purchase_value), 'Did not update object');
        });
    });
});
