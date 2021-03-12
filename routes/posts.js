var express = require('express');

var router = express.Router();

var Post = require('../models/Post.js')

/* GET users listing. */
router.get('/', function (req, res) {
  Post.find().sort('-publicationdate').exec(function(err, posts) {  
    if (err) res.status(500).send(err);
    else res.status(200).json(posts);
  });
});

/* GET all posts from an user by user Email --Pedir todo*/
router.get('/all/:email', function (req, res) {
  Post.find({'email':req.params.email}).sort('-publicationdate').exec(function (err, posts) {
      if (err) res.status(500).send(err);
      else res.status(200).json(posts);
    });
});

/* POST a new post --Publicar */
router.post('/', function (req, res) {
  Post.create(req.body, function (err, postinfo) {
    if (err) res.status(500).send(err);
    else res.sendStatus(200);
  });
});

/* PUT an existing post --Actulizar*/
router.put('/:id', function (req, res) {
  Post.findByIdAndUpdate(req.params.id, req.body, function (err, postinfo) {
    if (err) res.status(500).send(err);
    else res.sendStatus(200);
  });
});

/* DELETE an existing post --Borrar*/
router.delete('/:id', function (req, res) {
  Post.findByIdAndDelete(req.params.id, function (err, postinfo) {
    if (err) res.status(500).send(err);
    else res.sendStatus(200);
  });
});

module.exports = router;
