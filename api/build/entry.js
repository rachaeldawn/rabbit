var data = require('./data');
data.query("SELECT * FROM ASSET")
    .then(function (res) { return console.log(res.rows); });
//# sourceMappingURL=entry.js.map