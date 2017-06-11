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
var fs = require('fs');
var path = require('path');
var rimraf = require('rimraf');
var promise = require('bluebird');
var clone = require('lodash').clone;
function makeFolders() {
    return new Promise(function (resolve, reject) {
        fs.mkdir(__dirname + '/test', function (err) {
            err && err.code != 'EEXIST' && reject(err);
            resolve();
        });
    });
}
function getData(obj) {
    return new Promise(function (resolve, reject) {
        return fs.readFile('specification.json', 'utf-8', function (err, data) {
            err && reject(err);
            !err && resolve(JSON.parse(data));
        });
    });
}
function startGenerator(data) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2, new Promise(function (resolve, reject) {
                    if (typeof data != typeof {}) {
                        reject('Need an actual object');
                        return;
                    }
                    var files = [];
                    for (var k in data) {
                        if (!fs.existsSync(path.join(__dirname, 'src', data[k].folder)))
                            fs.mkdirSync(path.join(__dirname, 'src', data[k].folder));
                        if (!fs.existsSync(path.join(__dirname, 'src', 'test')))
                            fs.mkdirSync(path.join(__dirname, 'src', 'test'));
                        fs.writeFile(path.join(__dirname, 'src', data[k].folder, data[k].filename) + '.ts', generateClassFile(data[k], k), function (err) {
                            if (err) {
                                reject(err);
                                return;
                            }
                        });
                        fs.writeFile(path.join(__dirname, 'src', 'test', data[k].filename + '.js'), generateTestFile(data[k], k), function (err) {
                            if (err) {
                                reject(err);
                                return;
                            }
                        });
                    }
                    resolve();
                })];
        });
    });
}
var tabber = function (tabLevel) {
    var ret = '';
    for (i = 0; i < tabLevel; i++) {
        ret += '\t';
    }
    return ret;
};
function LinesToString(Lines) {
    return Lines.reduce(function (prev, cur) {
        prev += cur + '\n';
        return prev;
    }, '');
}
function generateClassFile(obj, key) {
    console.log("Generating: " + key);
    if (obj.todo) {
        for (var i = 0; i < obj.todo.length; i++)
            console.log(' `- Todo:  ' + obj.todo[i]);
    }
    var tabLevel = 0;
    var tabs = function () {
        return tabber(tabLevel);
    };
    var paramsList = function (func) {
        var keys = [];
        var params = func.params || func;
        for (var k in params) {
            keys.push(k + ": " + (params[k].type ? params[k].type : 'any') + " " + (params[k]["default"] ? " = " + params[k]["default"] : ""));
        }
        keys = keys.reduce(function (prev, cur) {
            if (prev == undefined) {
                prev = cur;
            }
            else {
                prev += ', ' + cur;
            }
            return prev;
        }, undefined);
        return keys || '';
    };
    var param = function (par) {
        if (typeof par == typeof {}) {
            return par.comment + " (default: " + par["default"] + ")";
        }
        return par;
    };
    var static = function (func) {
        if (func.static == undefined)
            return '';
        if (func.static == 'both' || func.static == true) {
            return 'static ';
        }
        return '';
    };
    var Lines = [];
    for (var k in obj.dependencies) {
        Lines.push("import " + k + " from \"" + obj.dependencies[k] + "\"");
    }
    if (obj.type == 'router') {
        Lines.push("import { Router } from \"express\"\nvar route = Router()");
    }
    Lines.push('\n');
    if (obj.type == 'class') {
        Lines.push('/*');
        Lines.push(" * Class: " + key);
        tabLevel += 1;
        if (obj.functions['constructor'] != undefined) {
            Lines.push(" * " + tabs() + "Purpose: " + obj.functions['constructor'].purpose);
            Lines.push(" * " + tabs() + "Parameters: " + paramsList(obj.functions['constructor']));
        }
        Lines.push(" * " + tabs() + "Functions: ");
        tabLevel += 1;
        for (var funcName in obj.functions) {
            if (funcName != 'constructor')
                Lines.push(" * " + tabs() + funcName + ": " + obj.functions[funcName].purpose);
        }
        Lines.push(' */');
        tabLevel = 0;
        Lines.push("export class " + key + " {");
        tabLevel += 1;
        for (var funcName in obj.functions) {
            if (obj.functions[funcName].visibility != 'private') {
                if (funcName == 'constructor') {
                    Lines.push("" + tabs() + funcName + "(" + paramsList(obj.functions['constructor']) + ") {");
                    tabLevel += 1;
                    for (var k in obj.functions) {
                        if (obj.functions[k].static == 'both' || obj.functions[k].static == true) {
                            Lines.push(tabs() + "this." + k + " = this." + k + ".bind(this, this)");
                        }
                    }
                    tabLevel -= 1;
                    Lines.push(tabs() + "}");
                }
                else {
                    Lines.push(tabs() + "/*");
                    Lines.push(tabs() + " * \tPurpose: " + obj.functions[funcName].purpose);
                    if (obj.functions[funcName].params.length > 0)
                        Lines.push(tabs() + " * \tParameters:");
                    for (var par in obj.functions[funcName].params) {
                        Lines.push(tabs() + " * \t    @param " + par + ": " + param(obj.functions[funcName].params[par]));
                    }
                    Lines.push(tabs() + " */");
                    Lines.push("" + tabs() + static(obj.functions[funcName]) + funcName + "(" + paramsList(obj.functions[funcName]) + ") {\n" + tabs() + "\tthrow 'Not implemented'\n" + tabs() + "}");
                }
            }
        }
        Lines.push('}');
        Lines.push('\n');
        tabLevel = 0;
        for (var funcName in obj.functions) {
            obj.functions[funcName].visibility == 'private' && Lines.push(tabs() + "function " + funcName + "(" + paramsList(obj.functions[funcName]) + ") {\n" + tabs() + "\tthrow 'Not implemented'\n}");
        }
        Lines.push('\n');
    }
    else if (obj.type == 'interface') {
        Lines.push('/*');
        for (var k in obj.fields)
            Lines.push(" * Field: " + k + "\n *     Type: " + obj.fields[k].type + (obj.fields[k]["default"] ? "\n *     default: " + obj.fields[k]["default"] : ''));
        Lines.push('*/');
        Lines.push("export interface " + key + " {");
        for (var k in obj.fields) {
            Lines.push("    " + k + ": " + obj.fields[k].type + (obj.fields[k]["default"] != undefined ? " = " + obj.fields[k]["default"] : ''));
        }
        Lines.push('}');
    }
    else if (obj.type == 'functional' && obj.functions) {
        Lines.push('/*');
        Lines.push(" * " + tabs() + "Exported Functions: ");
        tabLevel += 1;
        for (var funcName in obj.functions) {
            if (obj.functions[funcName].visibility != 'private')
                Lines.push(" * " + tabs() + funcName + ": " + obj.functions[funcName].purpose);
        }
        tabLevel -= 1;
        Lines.push(" * " + tabs() + "Private Functions: ");
        tabLevel += 1;
        for (var funcName in obj.functions) {
            obj.functions[funcName].visibility == 'private' && Lines.push(" * " + tabs() + funcName + ": " + obj.functions[funcName].purpose);
        }
        Lines.push(' */');
        tabLevel = 0;
        for (var funcName in obj.functions) {
            Lines.push('/*');
            Lines.push(" * " + tabs() + "Purpose: " + obj.functions[funcName].purpose);
            if (obj.functions[funcName].params.length > 0)
                Lines.push(' * Functions: ');
            tabLevel += 1;
            for (var par in obj.functions[funcName].params) {
                Lines.push(" * @param " + par + ": " + param(obj.functions[funcName].params[par]));
            }
            tabLevel -= 1;
            Lines.push(' */');
            Lines.push("" + tabs() + (obj.functions[funcName].visibility != 'private' ? 'export ' : '') + "function " + funcName + "(" + paramsList(obj.functions[funcName]) + ") {\n" + tabs() + "\tthrow 'Not implemented'\n" + tabs() + "}");
        }
        Lines.push('\n');
    }
    else if (obj.type == 'router') {
        var RenderRoute = function (method, route, comment) {
            Lines.push("/*\n * " + route);
            Lines.push(" * Method: " + method);
            Lines.push(" * Remarks: " + comment);
            Lines.push(" */");
            Lines.push("route." + method + "('" + route + "', function(response, request) {\n\tthrow \"Route yet to be defined\"\n})");
        };
        if (obj.post)
            for (var k in obj.post) {
                RenderRoute('post', k, obj.post[k]);
                Lines.push("\n");
            }
        if (obj.get)
            for (var k in obj.get) {
                RenderRoute('get', k, obj.get[k]);
                Lines.push("\n");
            }
        if (obj.all)
            for (var k in obj.all) {
                RenderRoute('all', k, obj.all[k]);
                Lines.push("\n");
            }
        Lines.push("export default route = route");
    }
    return LinesToString(Lines);
}
function generateTestFile(obj, key) {
    var Lines = [];
    var tabLevel = 0;
    var tabs = function () {
        return tabber(tabLevel);
    };
    Lines.push("var " + key + " = require(\"../" + (obj.folder + '/' || '') + obj.filename + "\")");
    Lines.push("describe('#" + key + "', function() {");
    tabLevel += 1;
    for (var funcName in obj.functions) {
        if (funcName != 'constructor') {
            Lines.push(tabs() + 'describe(`' + funcName + '`, function() {');
            tabLevel += 1;
            for (var test in obj.functions[funcName].tests) {
                Lines.push(tabs() + 'it(`' + obj.functions[funcName].tests[test] + '`)');
            }
            tabLevel -= 1;
            Lines.push(tabs() + "})");
        }
    }
    tabLevel -= 1;
    Lines.push('})');
    return LinesToString(Lines);
}
getData()
    .then(startGenerator)["catch"](function (err) { throw err; });
