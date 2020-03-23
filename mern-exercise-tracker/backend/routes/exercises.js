const router = require('express').Router();
const Exercise = require('../models/exercise.model')

router.get('/', function(req,res){
    Exercise.find()
        .then(excercises => res.json(excercises))
        .catch(err => res.status(400).json('Error: ' + err))
});

router.post('/add',function(req,res) {
    const username = req.body.username
    const description = req.body.description
    const duration = Number(req.body.duration)
    const date = Date.parse(req.body.date)
    
    const newExcercise = new Exercise({
        username,
        description,
        duration,
        date
    });

    newExcercise.save()
        .then(() => res.json('Excercise added'))
        .catch(err => res.status(400).json('Error: '+ err))
});

module.exports = router