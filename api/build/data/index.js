"use strict";
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
exports.__esModule = true;
var lodash_1 = require("lodash");
var Validator = require("validator");
var pg = require("pg");
var Errors = require("../errors");
exports.Models = {};
var DataPool;
exports.Initialize = function (config) {
    if (config === void 0) { config = undefined; }
    return new Promise(function (resolve, reject) {
        return __awaiter(this, void 0, void 0, function () {
            var rows, err_1, k;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        DataPool = new pg.Pool(config || {
                            database: "rabbit",
                            host: "192.168.1.189",
                            port: 5432,
                            max: 50,
                            idleTimeoutMillis: 30000,
                            ssl: true,
                            user: "Developer",
                            password: "Fluffeh9985"
                        });
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4, exports.Query("SELECT * FROM information_schema.columns WHERE table_schema='rabbitschema'")];
                    case 2:
                        rows = (_a.sent()).rows;
                        return [3, 4];
                    case 3:
                        err_1 = _a.sent();
                        throw err_1;
                    case 4:
                        for (k in rows) {
                            if (exports.Models[rows[k].table_name] == undefined)
                                exports.Models[rows[k].table_name] = {};
                            exports.Models[rows[k].table_name][rows[k].column_name] = rows[k];
                        }
                        resolve();
                        return [2];
                }
            });
        });
    });
};
exports.Delete = function (obj) {
    return __awaiter(this, void 0, void 0, function () {
        var tablename, res, err_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    obj.id == -1 && Errors.UnsavedObjectError();
                    tablename = obj.prototype.tablename || obj.tablename || Errors.RequiredFieldError('tablename');
                    exports.ValidateObject(obj, exports.Models[tablename]);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4, exports.Query("DELETE FROM " + tablename + " WHERE id=" + obj.id + " RETURNING *")];
                case 2:
                    res = (_a.sent()).rows;
                    return [3, 4];
                case 3:
                    err_2 = _a.sent();
                    throw err_2;
                case 4:
                    obj.id = -1;
                    return [2, res];
            }
        });
    });
};
exports.Page = function (obj, amt, page, asc) {
    if (asc === void 0) { asc = true; }
    return __awaiter(this, void 0, void 0, function () {
        var tablename;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    tablename = (obj.prototype ? obj.prototype.tablename : false) || obj.tablename || Errors.RequiredFieldError('tablename');
                    !amt && Errors.RequiredFieldError('amt');
                    amt < 1 && Errors.WrongTypeError('signed integer', 'unsigned integer', 'amt');
                    !lodash_1.isNumber(amt) && Errors.WrongTypeError(typeof amt, 'number', 'amt')(page == undefined || page == null) && Errors.RequiredFieldError('page');
                    !lodash_1.isNumber(page) && Errors.WrongTypeError(typeof page, 'number', 'page');
                    if (page < 0) {
                        asc = !asc;
                        page = Math.abs(page);
                    }
                    amt = amt > 100 ? amt = 100 : amt;
                    return [4, exports.Query("SELECT * FROM " + tablename + " ORDER BY id " + (asc ? 'ASC' : 'DESC') + " LIMIT " + amt + " " + (amt * page != 0 ? 'OFFSET ' + amt * page : ''))];
                case 1: return [2, (_a.sent()).rows];
            }
        });
    });
};
exports.List = function (obj, amt, asc) {
    if (asc === void 0) { asc = true; }
    return exports.Page(obj, amt, 0, asc);
};
exports.Save = function (obj) {
    return __awaiter(this, void 0, void 0, function () {
        var tablename, Values, res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    tablename = obj.tablename || Errors.RequiredFieldError('tablename');
                    try {
                        ObjectToQueryable(obj);
                    }
                    catch (err) {
                        throw err;
                    }
                    SanitizeObject(obj);
                    Values = exports.GenerateDefinedValuesArray(obj);
                    console.log("INSERT INTO " + tablename + " (" + exports.GenerateDefinedKeysString(obj) + ") VALUES (" + exports.GenerateDefinedValuesPlaceholders(Values.length) + ") RETURNING *", Values);
                    return [4, exports.Query("INSERT INTO " + tablename + " (" + exports.GenerateDefinedKeysString(obj) + ") VALUES (" + exports.GenerateDefinedValuesPlaceholders(Values.length) + ") RETURNING *", Values)];
                case 1:
                    res = (_a.sent()).rows[0];
                    SoftClone(obj, res);
                    return [2, obj];
            }
        });
    });
};
exports.Sync = function (obj) {
    return __awaiter(this, void 0, void 0, function () {
        var tablename, DBResult, err_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    tablename = obj.tablename || Errors.RequiredFieldError('tablename');
                    obj.id || Errors.RequiredFieldError('id');
                    lodash_1.isNumber(obj.id) || Errors.WrongTypeError(typeof obj.id, 'number', 'id');
                    exports.Models[tablename] || Errors.UnregisteredModelError(obj);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4, exports.Query("SELECT * FROM " + tablename + " WHERE id=" + obj.id)];
                case 2:
                    DBResult = (_a.sent()).rows[0];
                    SoftClone(obj, DBResult);
                    return [3, 4];
                case 3:
                    err_3 = _a.sent();
                    throw err_3;
                case 4: return [2, obj];
            }
        });
    });
};
exports.Search = function (obj, amt, page, asc) {
    if (amt === void 0) { amt = 25; }
    if (page === void 0) { page = 0; }
    if (asc === void 0) { asc = true; }
    return __awaiter(this, void 0, void 0, function () {
        var tablename;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    tablename = obj.tablename || Errors.RequiredFieldError('tablename');
                    !amt && Errors.RequiredFieldError('amt');
                    !lodash_1.isNumber(amt) && Errors.WrongTypeError(typeof amt, 'number', 'amt');
                    !lodash_1.isNumber(page) && Errors.WrongTypeError(typeof page, 'number', 'page');
                    amt < 1 && Errors.WrongTypeError('signed integer', 'unsigned integer', 'amt')(page == undefined || page == null) && Errors.RequiredFieldError('page');
                    if (page < 0) {
                        asc = !asc;
                        page = Math.abs(page);
                    }
                    amt = amt > 100 ? amt = 100 : amt;
                    FormatToQueryable(obj);
                    SanitizeObject(obj);
                    return [4, exports.Query("SELECT * FROM " + tablename + " WHERE " + exports.GenerateSearchValues(obj) + " ORDER BY id " + (asc ? 'asc' : 'desc') + " LIMIT " + amt + " " + (amt * page > 0 ? 'OFFSET ' + amt * page : ''))];
                case 1: return [2, (_a.sent()).rows];
            }
        });
    });
};
exports.Update = function (obj) {
    return __awaiter(this, void 0, void 0, function () {
        var tablename, updateObj, Existent, k;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    tablename = obj.tablename || Errors.RequiredFieldError('tablename')(!obj.id || obj.id == -1 || obj.id == undefined) && Errors.RequiredFieldError('id');
                    try {
                        ObjectToQueryable(obj);
                    }
                    catch (err) {
                        throw err;
                    }
                    updateObj = {};
                    updateObj.id = obj.id;
                    updateObj.tablename = tablename;
                    return [4, exports.Query("SELECT * FROM " + tablename + " WHERE id=" + obj.id)];
                case 1:
                    Existent = (_a.sent()).rows[0];
                    for (k in Existent) {
                        if (obj[k] != Existent[k] && obj[k] != "'" + Existent[k] + "'")
                            updateObj[k] = obj[k];
                    }
                    if (lodash_1.keys(obj).length == 2)
                        return [2];
                    return [4, exports.Query("UPDATE " + tablename + " SET " + exports.GenerateUpdateKVs(updateObj) + " WHERE id=" + updateObj.id + " RETURNING *")];
                case 2: return [2, (_a.sent()).rows[0]];
            }
        });
    });
};
exports.GenerateDefinedKeysString = function (obj) {
    return lodash_1.keys(obj).reduce(function (prev, cur) {
        if (exports.ValidateObjectKey(obj, cur))
            prev = (prev == '' ? cur : prev + ', ' + cur);
        return prev;
    }, '');
};
exports.GenerateDefinedValuesArray = function (obj) {
    return lodash_1.keys(obj).reduce(function (prev, cur) {
        exports.ValidateObjectKey(obj, cur) && prev.push(obj[cur]);
        return prev;
    }, []);
};
exports.GenerateUpdateKVs = function (obj) {
    return lodash_1.keys(obj).reduce(function (prev, cur) {
        if (lodash_1.isString(obj[cur]) && obj[cur][0] != "'")
            obj[cur] = '\'' + obj[cur] + '\'';
        if (exports.ValidateObjectKey(obj, cur))
            prev = prev == '' ? cur + " = " + obj[cur] : prev + (", " + cur + " = " + obj[cur]);
        return prev;
    }, '');
};
exports.GenerateDefinedValuesPlaceholders = function (num) {
    num < 1 && Errors.IntOutOfBoundsError(num, 1, 1000, 'num');
    var str = '$1';
    for (var i = 2; i <= num; i++)
        str += ", $" + i;
    return str;
};
exports.GenerateSearchValues = function (obj) {
    return lodash_1.keys(obj).reduce(function (prev, cur) {
        var param = cur + " " + (lodash_1.isString(obj[cur]) ? "like '%" + obj[cur] + "%' " : '= ' + obj[cur]);
        if (cur != 'tablename' && obj[cur] && !lodash_1.isFunction(obj[cur]))
            prev = prev == '' ? param : prev + ' AND ' + param;
        return prev;
    }, '');
};
function ObjectToQueryable(obj) {
    var tablename = obj.tablename || Errors.RequiredFieldError('tablename');
    exports.Models[tablename] || Errors.UnregisteredModelError(obj);
    exports.ValidateObject(obj, exports.Models[tablename]);
    for (var k in exports.Models[tablename][k]) {
        obj[k] || exports.Models[tablename][k].is_nullable == 'NO' || k != 'id' || Errors.RequiredFieldError(k);
    }
    FormatToQueryable(obj);
    return obj;
}
exports.ObjectToQueryable = ObjectToQueryable;
function FormatToQueryable(obj) {
    var tablename = obj.tablename || Errors.RequiredFieldError('tablename');
    for (var k in exports.Models[tablename]) {
        console.log("Validating key " + k + ', ' + obj[k]);
        if (!obj[k] || k == 'id') {
            continue;
        }
        switch (exports.Models[tablename][k].udt_name) {
            case ('int2'):
            case ('int4'):
            case ('int8'):
                obj[k] = exports.ValidateInteger(obj[k], k, exports.Models[tablename][k].udt_name)[3];
                break;
            case ('numeric'):
                obj[k] = exports.ValidateNumeric(obj[k], k, exports.Models[tablename][k].numeric_precision);
                break;
            case ('varchar'):
                obj[k] = exports.ValidateVarchar(obj[k], k, exports.Models[tablename][k].character_maximum_length);
                break;
            case ('date'):
            case ('timestamp'):
            case ('timestamptz'):
                obj[k] = exports.ValidateDate(obj[k], k);
                break;
            case ('money'):
                obj[k] = exports.ValidateMoney(obj[k], k);
                break;
            case ('bool'):
                obj[k] = exports.ValidateBoolean(obj[k], k);
                break;
            case ('text'):
                obj[k] = exports.ValidateVarchar(obj[k], k);
            default:
                console.log("Add support for validation to " + exports.Models[tablename][k].udt_name);
                break;
        }
    }
}
exports.FormatToQueryable = FormatToQueryable;
var SoftClone = function (obj, row) {
    for (var k in row)
        obj[k] = row[k];
};
function IntIsInRange(size, obj) {
    size = "" + size;
    var sizes = {
        '2': [0, 255],
        '4': [-2147483648, 2147483647],
        '8': [-9223372036854775808, 9223372036854775807]
    };
    return (obj >= sizes[size][0] && sizes[size][1] >= obj);
}
function CountsAsNumber(obj) {
    return !lodash_1.isDate(obj) && lodash_1.isNumber(parseFloat(obj)) && ("" + obj).split('.').length <= 2;
}
exports.Query = function (str, args) {
    return __awaiter(this, void 0, void 0, function () {
        var Client, res, err_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4, DataPool.connect()];
                case 1:
                    Client = _a.sent();
                    return [4, Client.query(str, args)];
                case 2:
                    res = _a.sent();
                    Client.release();
                    return [3, 4];
                case 3:
                    err_4 = _a.sent();
                    throw err_4;
                case 4: return [2, res];
            }
        });
    });
};
var SanitizeObject = function (obj) {
    for (var k in obj) {
        if (lodash_1.isString(obj[k]) && k != 'tablename') {
            obj[k] = Validator.escape(obj[k]);
        }
    }
};
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
exports.ValidateInteger = function (obj, name, type) {
    !obj && Errors.RequiredFieldError('obj');
    !name && Errors.RequiredFieldError('name');
    !type && Errors.RequiredFieldError('type');
    !CountsAsNumber && Errors.WrongTypeError(typeof obj, 'string(number)|number');
    obj = parseInt(obj);
    type == '2' && !IntIsInRange(2, obj) && Errors.IntOutOfBoundsError(obj, 0, 255, name);
    type == '4' && !IntIsInRange(4, obj) && Errors.IntOutOfBoundsError(obj, -2147483648, 2147483647, name);
    type == '8' && !IntIsInRange(8, obj) && Errors.IntOutOfBoundsError(obj, -9223372036854775808, 9223372036854775807, name);
    return obj;
};
exports.ValidateNumeric = function (obj, name, precision) {
    !obj && Errors.RequiredFieldError('obj');
    !name && Errors.RequiredFieldError('name');
    !CountsAsNumber(obj) && Errors.WrongTypeError(typeof obj, 'string(number)|number', name)(('' + obj).split('.').pop() > precision) && Errors.WrongTypeError(typeof obj, "float(" + precision + ")", name);
    return parseFloat(obj);
};
exports.ValidateVarchar = function (obj, name, max) {
    if (max === void 0) { max = undefined; }
    !obj && Errors.RequiredFieldError('obj');
    !name && Errors.RequiredFieldError('name');
    !lodash_1.isString(obj) && Errors.WrongTypeError(typeof obj, 'string', name);
    if (!max)
        return obj;
    obj.length > max && Errors.StringTooLongError(name, max);
    return obj;
};
exports.ValidateDate = function (obj, name) {
    !obj && Errors.RequiredFieldError('obj');
    !name && Errors.RequiredFieldError('name')(!lodash_1.isString(obj) && !lodash_1.isDate(obj)) && Errors.WrongTypeError(typeof obj, 'string(date)|Date', name);
    if (lodash_1.isString(obj)) {
        obj = new Date(obj);
    }
    obj == 'Invalid date' && Errors.WrongTypeError(typeof obj, 'string(date)|Date', name);
    return obj.toUTCString();
};
exports.ValidateMoney = function (obj, name) {
    !obj && Errors.RequiredFieldError('obj');
    !name && Errors.RequiredFieldError('name');
    !CountsAsNumber(obj) && Errors.WrongTypeError(typeof obj, 'string(number)|number', name);
    lodash_1.isString(obj) && ("" + obj).split('.').length > 2 && Errors.WrongTypeError('multi-decimal string', 'string(number)|numer', name);
    obj = parseFloat(obj);
    !lodash_1.isNumber(obj) && Errors.WrongTypeError(typeof obj, 'string(number)|number', name);
    return obj;
};
exports.ValidateBoolean = function (obj, name) {
    !obj && Errors.RequiredFieldError('obj');
    !name && Errors.RequiredFieldError('name');
    lodash_1.toLower(ValidBooleans[("" + obj)]) == undefined && Errors.WrongTypeError(typeof obj, 'string(bool)|boolean|number');
    return ValidBooleans[("" + obj).toLowerCase()] || Errors.WrongTypeError(typeof obj, 'string(bool)|boolean|number');
};
exports.ValidateObject = function (obj, ref) {
    for (var k in obj)
        !lodash_1.has(ref, k) && k != 'tablename' && !lodash_1.isFunction(obj[k]) && Errors.InvalidModelError(k);
};
exports.ValidateObjectKey = function (obj, key) { return (obj[key] && key != 'tablename' && key != 'id' && !lodash_1.isFunction(obj[key])); };
