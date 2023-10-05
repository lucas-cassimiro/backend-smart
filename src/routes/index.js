const express = require('express')
const router = express.Router()
const userRoutes = require('./user/userRoutes')
const productRoutes = require('./product/productRoutes')

router.use('/user', userRoutes)
router.use('/product', productRoutes)

module.exports = router
