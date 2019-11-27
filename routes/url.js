const express = require('express');
const router = express.Router();
const validUrl = require('valid-url');
const shortId = require('shortid');
const config = require('config');

const UrlModel = require('../models/Url.js');

// @route POST /api/url/shorten
// @desc  Create short url

router.get('/shorten', async (req, res) => {
    const { longUrl } = req.query;
    const baseUrl = config.get("baseUrl");
    // console.log(baseUrl)
    // check base url
    if(!validUrl.isUri(baseUrl)){
        return res.status(401).json('Invalid base url');
    }
    
    // create url code
    const urlCode  = shortId.generate();
    console.log(longUrl)
    // check long url 
    if(validUrl.isUri(longUrl)){
        try{
            let url = await UrlModel.findOne({ longUrl });
            if(url){
                res.json(url);
            }else{
                const shortUrl = baseUrl + '/' + urlCode;
                
                url = new UrlModel({
                    longUrl, shortUrl, urlCode, date: new Date()
                });
                await url.save();

                res.json(shortUrl);
            }
        }catch(err){
            console.error(err);
            res.status(500).json('Server error.');
        }
    }else{
        
    }
});

module.exports = router;