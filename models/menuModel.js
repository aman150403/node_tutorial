const mongoose = require('mongoose')

const menuSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true
    },
    price : {
        type: Number,
        required: true
    },
    taste : {
        type: String,
        enum:['sweet', 'tangy', 'spicy'],
        required: true 
    },
    is_drink : {
        type: Boolean,
        default: false
    },
    ingridients : {
        type: [String],
        default: []
    },
    num_sales : {
        type : Number,
        default : 0
    }
});

const menuItem = mongoose.model('menuItem', menuSchema)

module.exports = menuItem
