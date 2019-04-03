const connection = require("./connection");

const orm = {
    findAll: function(tableName, cb) {
        connection.query("SELECT * FROM ??", [tableName], (err, results) => {
            if (err) throw err;
            cb(results);
        })
    },
    create: function(tableName, recordAsObject, cb) {
        connection.query("INSERT INTO ?? SET ?", [tableName, recordAsObject], (err, results) => {
            if (err) throw err;
            cb(results);
        })       
    },

};

// orm.findAll("burgers", (data)=> console.table(data));

// const myBurg = {
//     name: "Chicken Bacon Ranch!"
// }

// orm.create("burgers", myBurg, (data) => console.log(data));
module.exports = orm;