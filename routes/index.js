var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mareks favourtie albums' });
});
/* GET Album list page. */
router.get('/albums', function(req, res) {
    var db = req.db;
    var collection = db.get('albumList');
    collection.find({},{},function(e,docs){
        res.render('albumList', {
            "almbumList" : docs,
            title: 'View favourite albums'
        });
    });
});
/* GET New Album page. */
router.get('/newalbum', function(req, res) {
    res.render('newAlbum', { title: 'Add New Album' });
});
module.exports = router;
