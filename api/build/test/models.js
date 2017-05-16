var assert = require('assert');
var clone = require('lodash').cloneDeep;
var pg = require('pg');
var fs = require('fs');
var Promise = require('bluebird');
var Pool = new pg.Pool({
    database: 'rabbit_tests',
    host: '192.168.1.189',
    max: 50,
    port: 5432,
    ssl: true,
    user: 'Developer',
    password: "Fluffeh9985",
    idleTimeoutMillis: 2000
});
var TestClass = (function () {
    function TestClass() {
    }
    return TestClass;
}());
var GetModels = function () {
    return new Promise(function (resolve, reject) {
        fs.readdir('../data/', function (err, files) {
            if (err) {
                reject(err);
                return;
            }
            files = files.reduce(function (prev, cur) {
                if (prev == undefined) {
                    prev = [];
                }
                prev.push(require("../data/" + cur));
                return prev;
            }, []);
            resolve(files);
        });
    });
};
describe('Models', function (done) {
    it('loads models', function (done) {
        GetModels()
            .then(function (Models) {
            return new Promise(function (resolve, reject) {
                for (var k in Models) {
                    describe(Models[k].prototype.tablename, function () {
                        var index = clone(k);
                        var Class = Models[index];
                        it('is a class', function () {
                            assert.ok(typeof Class == typeof TestClass, 'needs to be a class');
                        });
                        it('has a tablename', function () {
                            assert.ok(Class.prototype.tablename, 'Tablename needs to be added to the protoype');
                        });
                        it('has properties', function () {
                            assert.ok(Object.keys(new Class()).length > 0, 'properties need to be added');
                        });
                        it('matches schema', function (done) {
                            /*
                             *  SELECT * FROM information_schema.columns WHERE table_schema = 'your_schema' AND table_name   = 'your_table'
                             */
                            Pool.query("SELECT * FROM information_schema.columns WHERE table_schema='rabbitschema' AND table_name='" + Class.prototype.tablename + "'")
                                .then(function (result) {
                                var columns = [];
                                for (var k in result.rows) {
                                    columns.push(result.rows[k].column_name);
                                }
                                var contents = Object.getOwnPropertyNames(new Class());
                                assert.ok(columns.length == contents.length, "Class for " + Class.prototype.tablename + " is out of sync. Has " + contents + ", expects: " + columns);
                                var filtered = contents.reduce(function (prev, current) {
                                    if (prev == undefined) {
                                        prev = [];
                                    }
                                    for (var k in columns) {
                                        if (columns[k] == current) {
                                            return prev;
                                        }
                                    }
                                    prev.push(current);
                                    return prev;
                                }, []);
                                assert.ok(filtered.length == 0, "Class for " + Class.prototype.tablename + " is out of sync. Invalids: " + filtered);
                                done();
                            })["catch"](function (err) { return done(err); });
                        });
                    });
                }
            });
        })["catch"](function (err) { throw err; })
            .then(done())["catch"](function (err) { done(err); });
    });
    it('is complete', function (done) {
        GetModels()
            .then(function (Models) {
            Pool.query("SELECT * FROM information_schema.columns WHERE table_schema = 'rabbitschema'")
                .then(function (results) {
                var resultFilter = {};
                for (var k in results.rows) {
                    resultFilter[results.rows[k].table_name] = 1;
                }
                var columns = [];
                for (var k in resultFilter) {
                    columns.push(k);
                }
                var remaining = columns.reduce(function (prev, cur) {
                    if (prev == undefined) {
                        prev = [];
                    }
                    if (cur.endsWith('_tag'))
                        return prev;
                    for (var k in Models) {
                        if (Models[k].prototype.tablename == cur) {
                            return prev;
                        }
                    }
                    prev.push(cur);
                    return prev;
                }, []);
                assert.ok(remaining == undefined || remaining.length == 0, "Missing: " + remaining);
            })["catch"](function (err) { done(err); });
        })
            .then(function () { done(); })["catch"](function (err) { done(err); });
    });
});
//# sourceMappingURL=models.js.map