const orm = require("../config/orm");

const burger = {
    findAll: function (cb) {
        orm.findAll("burgers", (data) => {
            cb(data);
        })
    },
    create: function (recordAsObject, cb) {
        orm.create("burgers", recordAsObject, (data) => {
            cb(data);
        });
    },
    eatIt: function (recordAsObject, id, cb) {
        orm.update("burgers", recordAsObject, id, (data) => cb(data));
    },
    delete: function (id, cb) {
        orm.delete("burgers", id, (data) => cb(data));
    }
};

// burger.findAll(data => console.table(data));

// const myBurg = {
//     name: "Chicken Ranch Burger!!!!",
//     eaten: true
// }

// burger.update(myBurg, 11, data => console.log(data));
// burger.create(myBurg, (data) => console.log(data));
// burger.delete(2, (data) => console.log(data));

module.exports = burger;