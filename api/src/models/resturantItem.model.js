'user strict';
var dbConn = require('../../config/db.config');

//ResturantItem object create
var ResturantItem = function(resturantItem){
    this.name     = resturantItem.first_name;

    this.description          = resturantItem.description;
    this.image          = resturantItem.image;
    this.quantity   = resturantItem.quantity;
    this.price    = resturantItem.price;
    this.created_at     = new Date();
    this.updated_at     = new Date();
};
ResturantItem.create = function (newEmp, result) {
    dbConn.query("INSERT INTO resturant_items set ?", newEmp, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};
ResturantItem.findById = function (id, result) {
    dbConn.query("Select * from resturant_items where id = ? ", id, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });
};
ResturantItem.findAll = function (result) {
    dbConn.query("Select * from resturant_items", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('resturant_items : ', res);
            result(null, res);
        }
    });
};
ResturantItem.update = function(id, resturantItem, result){
  dbConn.query("UPDATE resturant_items SET name=?,description=?,image=?,quantity=?,price=?,designation=?,salary=? WHERE id = ?", [resturantItem.name,resturantItem.description,resturantItem.image,resturantItem.quantity,resturantItem.price, id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }else{
            result(null, res);
        }
    });
};
ResturantItem.delete = function(id, result){
     dbConn.query("DELETE FROM resturant_items WHERE id = ?", [id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    });
};

module.exports= ResturantItem;