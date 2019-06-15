const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://172.17.0.2:27017';
const dbName = 'fat_squirrel';
var db;
MongoClient.connect(url, function(err, client) {
    if (err === null) {
       db = client.db(dbName);
    } else {
        console.log('Panic!!!');
    }
});
router.get('/', function(req, res, next) {
    const dishCollection = db.collection('dishes');
    dishCollection.find({}).toArray((err, docs) => res.send(docs));
});

router.get('/search', function(req, res, next) {
    const dishCollection = db.collection('dishes');
    const terms = req.query.query;
    console.log(terms);
    if (terms === null || terms === '') {
        res.send({});
    } else {
        dishCollection.find(
            {
                $text: {
                    $search: terms
                }
            }
        ).toArray((err, docs) => res.send(docs));
    }
});

router.post('/upload', function(req, res, next) {
    const dishCollection = db.collection('dishes');
    dishCollection.insertMany(req.body);
    res.send('OK');
});

module.exports = router;
