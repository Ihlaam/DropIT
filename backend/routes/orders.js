const express = require('express');
const router = express.Router();
const OrderTemplate = require('../modules/order')

router.post('/' , (request , response)=> {

    const order = new OrderTemplate(
        {  
            deliveryDateTime:request.body.deliveryDateTime,
            pickup: {
                type:'Point',
                coordinates:[
                request.body.pickup.location.lng,
                request.body.pickup.location.lat,
                ]
            },
            dropoff: {
                type:'Point',
                coordinates:[
                request.body.dropoff.location.lng,
                request.body.dropoff.location.lat,
                ]
            },
            vehicle:request.body.vehicle.label,
            width:request.body.width,
            length:request.body.length,
            height:request.body.height,
            image:request.body.image,
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