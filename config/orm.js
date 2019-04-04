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
    updateById: function(tableName, recordAsObject, id, cb) {
        connection.query("UPDATE ?? SET ? WHERE id = ?", [tableName, recordAsObject, id], (err, result) => {
            if (err) throw err;
            cb(result)
        })
    }
};

// orm.findAll("burgers", (data)=> console.table(data));

// const myBurg = {
//     name: "Chicken Bacon Ranch Burger!"
// }

// orm.updateById("burgers", myBurg, 11, (data) => console.log(data));
// orm.create("burgers", myBurg, (data) => console.log(data));
module.exports = orm;