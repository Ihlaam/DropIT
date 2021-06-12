const express = require('express');
const router = express.Router();
const OrderTemplate = require('../modules/order')

router.post('/' , (request , response)=> {
    const order = new OrderTemplate(
        {
            password:request.body.password,
            width:request.body.width,
            height:request.body.height,
            length:request.body.length,
         })
     
    order.save()
    .then(data => {
        response.json(data)
    })
    .catch(error => {
        response.json(error)
    })
})

module.exports = router;