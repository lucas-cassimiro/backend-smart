const express = require('express')
const router = express.Router()
const model = require('./../../database/models/productModel')

router.get('/', async(req,res) => {

    try {

        const teste = await model.find({})
        res.send(teste)

    } catch (error) {
        console.log(error)
    }

})

router.post('/', async(req, res)=>{

    try {
        
        console.log(req.body)

        const createProduct = await model.create(req.body)

        res.send(createProduct) 

    } catch (error) {
        
    }

})

module.exports = router