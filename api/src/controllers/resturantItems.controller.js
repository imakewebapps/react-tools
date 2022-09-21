'use strict';

const ResturantItem = require('../models/resturantItem.model');

exports.findAll = function(req, res) {
  ResturantItem.findAll(function(err, resturantItem) {
    console.log('controller')
    if (err)
    res.send(err);
    console.log('res', resturantItem);
    res.send(resturantItem);
  });
};


exports.create = function(req, res) {
    const new_resturantItem = new ResturantItem(req.body);

    //handles null error
   if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        ResturantItem.create(new_resturantItem, function(err, resturantItem) {
            if (err)
            res.send(err);
            res.json({error:false,message:"ResturantItem added successfully!",data:resturantItem});
        });
    }
};


exports.findById = function(req, res) {
    ResturantItem.findById(req.params.id, function(err, resturantItem) {
        if (err)
        res.send(err);
        res.json(resturantItem);
    });
};


exports.update = function(req, res) {
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        ResturantItem.update(req.params.id, new ResturantItem(req.body), function(err, resturantItem) {
            if (err)
            res.send(err);
            res.json({ error:false, message: 'ResturantItem successfully updated' });
        });
    }

};


exports.delete = function(req, res) {
  ResturantItem.delete( req.params.id, function(err, resturantItem) {
    if (err)
    res.send(err);
    res.json({ error:false, message: 'ResturantItem successfully deleted' });
  });
};