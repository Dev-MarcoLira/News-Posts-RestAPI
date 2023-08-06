const setHeader = require('./middleware')
const router = require('express').Router()
const News = require('../models/News')

router.get('/', (req, res)=>{

    setHeader(req, res)
    res.send('<h1>Hello World</h1>')

})

router.get('/api', (req, res)=>{

    setHeader(req, res)
    res.send('<h1>Welcome to the API!</h1>')

})

router.post('/api/news', async(req, res)=>{

    setHeader(req, res)

    try{

        const { title, content } = req.body
        const newsPost = News.create({ title, content })
        
        res.status(201).json(newsPost)

    }catch(error){
        res.status(500).json({ error: 'Error when creating new post!' })
    }

})

router.get('/api/news', async(req, res)=>{

    setHeader(req, res)

    try{

        const newsPosts = News.findAll()
        res.json(newsPosts)

    }catch(error){
        res.status(500).json({ error: 'Failed to fetch posts!' })
    }

})

module.exports = router