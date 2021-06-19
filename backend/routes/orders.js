const express = require('express');
const router = express.Router();
const multer = require('multer');
const OrderTemplate = require('../modules/order')



const storage = multer.diskStorage({
    destination: function(request, file, callback) {
        callback(null, "../uploads/images");
    },

     filename: function(request, file, callback) {
        callback(null, Date.now() + file.originalname);
    }
});

const upload = multer({
    storage: storage,
    limits: { fieldSize: 3 * 1024 * 1024 },
  });

router.post('/', upload.single('image'), async (request , response)=> {
    console.log("========================")
    console.log(request.body);

    const order = new OrderTemplate(
        {  
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
     
    await order.save()
    .then(data => {
        response.json(data)
    })
    .catch(error => {
        response.json(error)
    })
})

module.exports = router;