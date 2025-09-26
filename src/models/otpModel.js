const mongoose = require('mongoose');
const { schema } = require('./userModel');

// Connect to MongoDB

// mongoose.connect('mongodb://localhost/my_database', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useCreateIndex: true,
// });

// Create a schema for the user
const otpModel = mongoose.Schema 
({
    userid: {
        type: mongoose.Types.ObjectId,
        ref: "users",
        required: true
    },

    otp: {
        type: Number,
        required: true
    },

    otpToken:{
        type: String,
        required: true
    },

    propose: {
        type: String,
        enum: ['verified-mail', 'reset-password'],
        required: true
    }

});

const OtpModel = mongoose.model('otps', schema);

module.exports = OtpModel;
