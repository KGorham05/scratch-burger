const orm = require("../config/orm");

const burger = {
    findAll: function(cb) {
        orm.findAll("burgers", (data) => {
            cb(data);
        })
    },
    create: function(recordAsObject, cb) {
       orm.create("burgers", recordAsObject, (data) => {
           cb(data);
       }); 
    }
    
};

// burger.findAll(data => console.table(data));

// const myBurg = {
//     name: "Pineapple Teriyaki Chicken Burger",
// }
 
// burger.create(myBurg, (data) => console.log(data))


module.exports = burger;