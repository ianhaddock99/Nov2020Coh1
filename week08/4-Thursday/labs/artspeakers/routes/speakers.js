const express = require('express');
const router = express.Router();
let dataFile = require('../data/data.json');

let pageSpeakers = dataFile.speakers; //array of speakers


router.get('/speakers', (req,res) => {
    

    let pagePhotos = [];

    pageSpeakers.forEach(speakerObj => {
        pagePhotos = pagePhotos.concat(speakerObj.artwork)
    })

    res.render('speakers', {
        photos: pagePhotos,
        speakers: pageSpeakers
    });

})

router.get('/speakers/:speakerid', (req,res) => {

    let photos = [];
    let speakers = [];

    pageSpeakers.forEach(speakerObj=>{
        if(speakerObj.shortname === req.params.speakerid){
            photos = speakerObj.artwork;
            speakers.push(speakerObj) 
        }
    })
    res.render('speakers', {
        photos: photos,
        speakers: speakers
    });
})

module.exports = router;