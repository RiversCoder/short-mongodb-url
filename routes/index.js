const express = require('express');
const router = express.Router();
// const validUrl = require('valid-url');
// const shortId = require('shortid');
// const config = require('config');

const UrlModel = require('../models/Url.js');

// @route POST /:code
// @desc  Redirect to long/original URL
router.get('/:code', async (req, res) => {
    const url = await UrlModel.findOne({ urlCode: req.params.code });

    if(url){
        // redirect
        res.redirect(url.longUrl);
    }else{
        // error
        res.status(404).json('Server error');
    }
});

module.exports = router;