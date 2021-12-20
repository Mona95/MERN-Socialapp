const router = require('express').Router()
const Post = require('../models/Post')

router.get("/", (req, res) => {
    console.log('posts page')
})

module.exports = router