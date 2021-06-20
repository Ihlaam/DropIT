const mongoose = require('mongoose');

const LocationSchema = new mongoose.Schema({
  type: {
    type: String,
    default:"Point"    
  },
  coordinates: {
    type: [Number],
    index: "2dsphere"
  } 
})


const OrderSchema = new mongoose.Schema(
  {    
    pickup:LocationSchema,
    dropoff:LocationSchema,
    pickup_address:{
      type:String,
      required:false,
    },
    dropoff_address:{
      type:String,
      required:false,
    },
    deliveryDateTime:{
      type:Date,
      default:Date.now
    },
    image:{
        type:String,
        required:false,
    },
    width:{
        type:String,
        required:false},    
    length:{
        type:String,
        required:false},
    height:{
          type:String,
          required:false},
    date:{
        type:Date,
        default:Date.now
    },
    quotes:{
      type:[{
        price:{
          type:Number
        },
        date:{
          type:Date,
          default:Date.now
        },
        driverId:{
          type:String
        }
      }],
      required:false,
    }

    })

      
module.exports = mongoose.model('orderTable' , OrderSchema )