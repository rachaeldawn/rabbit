var data = require('./data')

data.query(`SELECT * FROM ASSET`)
    .then(res => console.log(res.rows))