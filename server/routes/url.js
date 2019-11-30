const express = require('express');
const router = express.Router();
const validUrl = require('valid-url');
const shortId = require('shortid');
const config = require('config');

const UrlModel = require('../models/Url.js');

// @route POST /api/url/shorten
// @desc  Create short url

async function sleep(time){
    return new Promise((resolve) => {
        let timer = setTimeout(v => {
            resolve(v);
            clearTimeout(timer);
        }, time*1000);
    });
}

router.post('/shorten', async (req, res) => {
    const { longUrl } = req.body;
    const baseUrl = config.get("baseUrl");
    console.log('longUrl: '+longUrl)

    // 停留10秒
    await sleep(1);
    
    // check base url
    if(!validUrl.isUri(baseUrl)){
        return res.status(401).json('Invalid base url');
    }
    
    // create url code
    const urlCode  = shortId.generate();
   
    // check long url 
    if(validUrl.isUri(longUrl)){
        try{
            let url = await UrlModel.findOne({ longUrl });
            if(url){
                res.json(url);
            }else{
                // get short url
                const shortUrl = baseUrl + urlCode;
                
                url = new UrlModel({
                    longUrl, shortUrl, urlCode, date: new Date()
                });
                await url.save();

                res.json(url);
            }
        }catch(err){
            console.error(err);
            res.status(500).json('Server error.');
        }
    }else{
        
    }
});

module.exports = router;