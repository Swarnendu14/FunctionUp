const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    name:{type: String,
        required: true
        }, 
    author_id: {type: Number,
                required: true
                }, 
    price: {type: Number,
        required: true
        },
    ratings:Number,
    isDeleted: Boolean //true on book deletion i.e you flag the document/data as isDeleted: true..(mark "dirty")

}, { timestamps: true });


module.exports = mongoose.model('Book', bookSchema) //users
