const mongoose = require('mongoose')

const MentorSchema = new mongoose.Schema({
    isLooking: {
        type: String,
        required: true,
        trim: true
    },
    currentCompany: {
        type: String,
        required: true,
        trim: true,
    },
    location: {
        type: String,
        required: true,
        trim: true
    },
    yearsOfExperence: {
        type: Number,
    },
    expertise: {
        type: String
    },
    designation: {
        type: String,
    },
    user: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true
    }
})

////////////////////////////////////////////////////////

const Mentor = mongoose.model('Mentor', MentorSchema)
module.exports = Mentor