const mongoose = require('mongoose')

const cardSchema = new mongoose.Schema({
    cardNumber: {
        type: String,
        required: [true, "card number is required"]
    },
    cardType: {
        type: String,
        required: [true, "card type is required"],
        enum: ["REGULAR", "SPECIAL"]

    },
    customerName: {
        type: String,
        required: [true, "customer name is required"],
        minLength: 2,
        trim: true,
        validate: {
            validator: function(value) {
                const nameRegex = /^[A-Za-z\s]+$/;
                return nameRegex.test(value);
            },
            message: 'Name should only contain alphabets and spaces.'
        }

    },
    status: {
        type: String,
        required: [true, "status is required"],
        enum: ["ACTIVE", "INACTIVE"],
        default: 'ACTIVE'

    },
    vision: {
        type: String,
        required: [true, "vision is required"],
    },
    customerID: {
        type: mongoose.Schema.Types.UUID,
        ref: 'customer',
        required: [true, "customer ID is required"]
    }
}, { timestamps: true })


module.exports = mongoose.model('card', cardSchema)