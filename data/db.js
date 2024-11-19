
const mysql = require("mysql2");
const config = require("../config");

let connection = mysql.createConnection(config.db);

connection.connect(function(err) {
    if(err) {
        return console.log(err);
    }

    // connection.query("select * from blog", function(err, result) {
    //     console.log(result[0].baslik);
    // })

    console.log("mysql server connection established ");
});

module.exports = connection.promise();

// promise , async-away => async