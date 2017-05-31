var express = require('express');
var router = express.Router();


router.get('/albumlist', function(req, res) {
    var db = req.db;
    var collection = db.get('albumList');
    collection.find({},{},function(e,docs){
        res.json(docs);
    });
});

/* POST to Add Album Service */
router.post('/addalbum', function(req, res) {

    // Set our internal DB variable
    var db = req.db;

    // Get our form values. These rely on the "name" attributes
    var albumName = req.body.albumName;
    var artist = req.body.artist;
    var year = req.body.year;
    var genre = req.body.genre;

    // Set our collection
    var collection = db.get('albumList');
    // Submit to the DB
    collection.insert({
        "albumName" : albumName,
        "artist" : artist,
        "year" : year,
        "genre" : genre
    }, function (err, doc) {
        if (err) {
            // If it failed, return error
            res.send("There was a problem adding the information to the database.");
        }
    });
});
module.exports = router;
